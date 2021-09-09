import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"
function ContactForm() {
    const [state, handleSubmit] = useForm("xpzkkgza");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <div id="form">
            <label htmlFor="name" className="formLabel">
                Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            </div>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;

