import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2 className="my-5 text-primary text-center">Send Us an Email</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Email Subject
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="--Enter--"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Email Body
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
        ></textarea>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Email Us
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
