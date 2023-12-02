from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    message = db.Column(db.Text)

# Route to handle adding a contact
@app.route('/add_contact', methods=['POST'])
def add_contact():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        new_contact = Contact(name=name, email=email, message=message)

        db.session.add(new_contact)
        db.session.commit()

        return jsonify({'message': 'Contact added successfully!'}), 201
    except KeyError:
        return jsonify({'message': 'Incomplete data. Please provide name, email, and message.'}), 400
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Route to retrieve all contacts
@app.route('/contact', methods=['GET'])
def get_contacts():
    try:
        contacts = Contact.query.all()
        contact_list = [{
            'id': contact.id,
            'name': contact.name,
            'email': contact.email,
            'message': contact.message
        } for contact in contacts]

        return jsonify({'contacts': contact_list}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
