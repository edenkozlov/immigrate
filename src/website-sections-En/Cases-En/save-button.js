import React from 'react';

function SaveButton() {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '60px',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#7D85C7',
        color: '#fff',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s',
      }}
      // Add the :hover selector here
      onMouseEnter={(e) => (e.target.style.backgroundColor = '#514C98')}
      onMouseLeave={(e) => (e.target.style.backgroundColor = '#7D85C7')}
    >
      Save
    </button>
  );
}

export default SaveButton;
