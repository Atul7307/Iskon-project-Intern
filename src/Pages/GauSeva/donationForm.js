import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    mobile: '',
    dob: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="donation-container">
      <div className="donation-box">
        
        <h1 className="form-header">Offer Gau Poshana Seva</h1>

        
        <div className="donation-options">
          <div className="option">Rs 1,500 <br /> (Feed a cow for a week)</div>
          <div className="option">Rs 2,500 <br /> (Feed a cow for 2 weeks)</div>
          <div className="option">Rs 5,500 <br /> (Feed a cow for 3 weeks)</div>
          <div className="option">Rs 7,500 <br /> (Feed a cow for a month)</div>
          <div className="option">Rs 7,500 <br /> (Feed a cow for a month)</div>
        </div>

        
        <form onSubmit={handleSubmit} 
        className='flex flex-col justify-center items-center md:block'
        >
          <label>Donation Amount<span className="required">*</span></label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Donation Amount..."
            required
            className='dona'
            style={
              {
                padding:"2px 10px",
                marginBottom:"5px"
              }
            }
          />

          
          <div className="form-group">
            <div className="form-col">
              <label>Name<span className="required">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-col">
              <label>Email<span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

        
          <div className="form-group">
            <div className="form-col">
              <label>Mobile Number<span className="required">*</span></label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
                required
              />
            </div>
            <div className="form-col hidden md:block">
              <label>Date Of Birth<span className="required">*</span></label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

        
          <div className="checkbox-section">
            <label>
              <input type="checkbox" />
              <span className="checkbox-label">I would like to receive 80G Certificate</span>
            </label>
            <label>
              <input type="checkbox" />
              <span className="checkbox-label">Please enter your address for receiving Prasadam (Only within India)</span>
            </label>
          </div>

        
          <button type="submit" className="donate-button">DONATE NOW</button>
        </form>

        <p>Avail 80G tax exemption to your donation</p>
      </div>
    </div>
  );
};

export default DonationForm;
