import { useState } from "react";

import FormInput from "./form-input";

import "./contact-form.scss";

const ContactForm = () => {
  const [input, setInput] = useState<string>("");
  // console.log("input =", input);

  return (
    <div className="back">
      <div className="registration-form">
        <div className="form-header">
          <h2>Contact me</h2>
          <p>Let's create something amazing together!</p>
        </div>
        <form>
          <FormInput
            wrapper="email-section"
            type="text"
            placeholder="ENTER YOUR FIRST NAME"
            input="email"
            preIconWrapper="icon-paper-plane"
            preIcon="envelope-o"
            postIconWrapper="next-btn email"
            postIcon="arrow-up"
            setInput={setInput}
            value={input}
          />
          <FormInput
            wrapper="password-section folded"
            type="text"
            placeholder="ENTER YOUR LAST NAME"
            input="password"
            preIconWrapper="icon-lock"
            preIcon="lock"
            postIconWrapper="password"
            postIcon="arrow-up"
            setInput={setInput}
            value={input}
          />
          <FormInput
            wrapper="repeat-password-section folded"
            type="email"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            input="epeat-password"
            preIconWrapper="icon-repeat-lock"
            preIcon="envelope-o"
            postIconWrapper="repeat-password"
            postIcon="paper-plane"
            setInput={setInput}
            value={input}
          />
          <div className="success">
            <p>MESSAGE SENT</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
