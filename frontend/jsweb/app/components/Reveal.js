import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from "framer-motion"

function Reveal({children, delay=0, duration=0.75}) {
    const controls = useAnimation()
    const ref = useRef(null)
    const InView = useInView(ref, {once:true})
    useEffect(() => {
        if(InView){
            controls.start("visible")
        }
    }, [InView])
    return (
        <div>
            <motion.div ref={ref}
            variants={
                {
                    hidden: {opacity:0, y:40},
                    visible: {opacity:100, y:0}
                }
            }
            initial="hidden"
            animate={controls}
            transition={{delay, duration}}
            >
                {children}
            </motion.div>
        </div>
  )
}



export default Reveal