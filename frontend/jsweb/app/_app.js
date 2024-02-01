import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css'; // Update the path to your global styles file

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
