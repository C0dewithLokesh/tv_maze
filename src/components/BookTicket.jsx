import React, { useState } from "react";
import "./bookTicket.css";

const BookTicket = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('formData', JSON.stringify(formData));

    onSubmitForm();
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <div className="modal-container" id="modal">
      <div className="modal">
        <div className="modal-header">
          <h3>Book Ticket</h3>
        </div>
        <div className="modal-content">
          <form className="modal-form" onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                id="price"
                placeholder="Enter Price"
                className="form-input"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>

            <input type="submit" value="submit" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
