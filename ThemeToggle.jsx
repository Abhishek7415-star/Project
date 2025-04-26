import React, { useReducer } from 'react';

const initialState = {
  theme: 'light', 
};

function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', 
      };
    default:
      return state;
  }
}

function ThemeToggle() {
  const [state, dispatch] = useReducer(themeReducer, initialState); 

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); 
  };

  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={themeStyles}>
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
