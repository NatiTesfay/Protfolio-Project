import React from 'react'
import './contectUs.css';

const ContectUs = () => {
  return (
    <form className="form-inline" action="/action_page.php">
    <label for="text">First Name:</label>
    <input type="text" className='input' placeholder="Enter Name" name="email"/>
    <label for="text">Last Name:</label>
    <input type="text" className='input' placeholder="Enter Last Name" name="email"/>
    <label for="country">Country</label>
    <select className="country" name="country">
      <option value="australia">Israel</option>
      <option value="canada">Ethiopia</option>
      <option value="usa">USA</option>
    </select>
    <textarea name="w3review" rows="10" className='textErea' ></textarea>
    <br />
    <button type="submit">Send</button>
  </form>
   
  )
}

export default ContectUs