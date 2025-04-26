import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET_FORM':
      return initialState; 
    default:
      throw new Error('Invalid action type'); 
  }
}

function FormData() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      return (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      dispatch({ type: 'UPDATE_EMAIL', payload: value });
    } else if (name === 'password') {
      dispatch({ type: 'UPDATE_PASSWORD', payload: value });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form Data Management with useReducer</h2>

      {state.email && state.password ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset Form</button>
    </div>
  );
}

export default FormData;
