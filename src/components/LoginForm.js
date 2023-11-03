import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='outerdivisionn'>
      <div className='teacher'>
        <h2 className='headingteacher'>Add Details</h2>
        <h5>(Trainers)</h5>
        <br></br>
        <form className='details'>
        <div>
        <label>Name:
          <input type='text'/></label>
          </div>
          <br></br>
          <div>
        <label>Age:
          <input type='age'/></label>
          </div>
          <br></br>
          <div>
        <label>Designation:
          <input type='text'/></label>
          </div>
          <br></br>
          <div>
        <label>Specialization:
          <input type='text'/></label>
          </div>
          <br></br>
          <div>
        <label>Class:
          <input type='text'/></label>
          </div>
          <br></br>
        </form>
        <br></br>
        <button className='addbutton'>Add</button>
      </div>
    </div>
  );
};

export default LoginForm;
