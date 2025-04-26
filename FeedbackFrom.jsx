import React, { useState } from 'react';

function FeedbackForm() {
  // State to manage form input values and all feedbacks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new feedback object
    const newFeedback = {
      name,
      email,
      message,
    };

    // Update feedback list with new feedback
    setFeedbackList([...feedbackList, newFeedback]);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📩 Feedback Form</h2>

      {/* Feedback form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Message:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          /><br />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Display all submitted feedback */}
      <div style={{ marginTop: 30 }}>
        <h3>Submitted Feedback</h3>
        <ul>
          {feedbackList.length > 0 ? (
            feedbackList.map((feedback, index) => (
              <li key={index} style={{ marginBottom: 15 }}>
                <p><strong>Name:</strong> {feedback.name}</p>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Message:</strong> {feedback.message}</p>
                <hr />
              </li>
            ))
          ) : (
            <p>No feedback yet. Be the first to submit!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackForm;
