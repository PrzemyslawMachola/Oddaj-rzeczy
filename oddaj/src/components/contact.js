import React, { useState } from "react";
import "../scss/elements/contact.scss";
import decoration from "../assets/Decoration.svg";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const isValid = (data) => {
        const error = {}
        if (!validateEmail(data.email)) {
            error.email = "Zły email"
        }

        console.log(error)
        if (Object.keys(error).length) {
            setErrors(error)
            return false
        }
        return true;
    }

    const handleForm = function (e) {
        e.preventDefault();

        let formData = {
            name: name,
            email: email,
            id: "",
            message: message,
        }



        if (!isValid(formData)) return;

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
            .then(response => response.json())
            .then(data=> {
                console.log(data);
            })
          
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="contact" id="contact" >
            <div className="contact__form">
                <span className="contact__form__title">Skontaktuj sie z nami</span>
                <img className="decoration" src={decoration}></img>
                <form noValidate className="form__box" onSubmit={handleForm}>
                    <div className="user__data">
                        <label className="form__input">Wpisz swoje imię
                            <input 
                                type="text" 
                                placeholder="Jan"
                                value={name}
                                onChange={e => setName(e.target.value)}>
                            </input>
                        </label>
                        <label className="form__input">Wpisz swój email
                            <input 
                                type="email" 
                                placeholder="abc@xyz.pl"
                                value={email}
                                onChange={e => setEmail(e.target.value)}>
                            </input>
                            <p>{errors?.email}</p>
                        </label>
                    </div>
                    <label className="form__input">Wpisz swoją wiadomosć
                        <input 
                            type="text" 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            value={message}
                            onChange={e => setMessage(e.target.value)}>
                        </input>
                    </label>
                    <button className="form__button">Wyślij</button>
                </form>
            </div>
            <div className="footer">
                <span>Copyright</span>
            </div>
        </div>
    )
}

export default Contact;