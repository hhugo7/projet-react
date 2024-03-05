import React, { useState } from 'react';
import '../css/InscriptionForm.css';

function InscriptionForm(props) {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "nom") setNom(value);
        if (name === "email") setEmail(value);
    }

    const validerForm = () => {
        let formErrors = [];

        if (!email.includes("@")) {
            formErrors.push("Email invalide !")
        }

        if (nom.length < 2) {
            formErrors.push("Il faut minimum deux caractères !");
        }

        setErrors(formErrors);
        return formErrors.length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validerForm()) {
            //console.log("form sumbitted");
            window.location.href = '/accueil';
        }
    }

    return (
        <div>
            

            <form onSubmit={handleSubmit} className='form'>
                <h1>HugHUB</h1>
                <input name="nom" type="text" value={nom} onChange={handleChange} placeholder='NOM' />
                <input name="email" type="text" value={email} onChange={handleChange} placeholder='E-MAIL' />
                {errors.length > 0 && 
                    <div className='alert'>
                        {errors.join(" , ")}
                    </div>
                }
                <button type='submit'>sumbitted</button>
            </form>
        </div>
    );
}

export default InscriptionForm;