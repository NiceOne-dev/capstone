import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.time) errors.time = 'Time is required';
    if (formData.guests < 1) errors.guests = 'Guests must be at least 1';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully!');
      // handle form submission
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span role="alert">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span role="alert">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.date ? "true" : "false"}
        />
        {errors.date && <span role="alert">{errors.date}</span>}
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.time ? "true" : "false"}
        />
        {errors.time && <span role="alert">{errors.time}</span>}
      </div>
      <div>
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.guests ? "true" : "false"}
        />
        {errors.guests && <span role="alert">{errors.guests}</span>}
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
