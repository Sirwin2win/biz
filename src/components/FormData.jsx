import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    body: "",
    car: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((vals) => ({ ...vals, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   `${formData.fullName} ${formData.email} ${formData.phone} ${formData.body} ${formData.car}`
    // );
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>{" "}
        <br />
        <select name="car" value={formData.car} onChange={handleChange}>
          <option value="select" disabled>
            select
          </option>
          <option value="KIA">KIA</option>
          <option value="TOYOTA">TOYOTA</option>
          <option value="HONDA">HONDA</option>
          <option value="FORD">FORD</option>
        </select>
        <input type="submit" value="Create Account" />
      </form>
      <p>{formData.fullName}</p>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
    </div>
  );
};

export default FormData;
