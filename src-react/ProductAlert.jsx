import React from 'react';

const ProductAlert = ({ title, description, buttonText, buttonColor }) => {
  const handleClick = () => {
    alert(`알림: ${title}`);
  };

  return (
    <div style={{
      padding: '1rem',
      border: '2px solid #000',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '1rem 0'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button 
        onClick={handleClick}
        style={{
          padding: '8px 16px',
          backgroundColor: buttonColor || '#008060',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductAlert;
