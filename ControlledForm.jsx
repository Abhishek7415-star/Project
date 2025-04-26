import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState(''); 
  const [submittedName, setSubmittedName] = useState(''); 

  const handleChange = (event) => {
    setName(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmittedName(name); 
    setName('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name} 
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <p>Submitted Name: <strong>{submittedName}</strong></p>
      )}
    </div>
  );
}

export default ControlledForm;
