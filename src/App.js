import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    phoneNo: '',
    address: '',
    linkedInAddress: '',
    imageUrl: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/headers', formData);
      alert('User data submitted successfully!');
    } catch (error) {
      alert('An error occurred while submitting user data.');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Email Address:</label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <label>LinkedIn Address:</label>
        <input
          type="text"
          name="linkedInAddress"
          value={formData.linkedInAddress}
          onChange={handleInputChange}
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
