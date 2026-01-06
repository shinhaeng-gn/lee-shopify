import React from 'react';

const ProductAlert = ({ productId, title }) => {
  const handleClick = () => {
    alert(`Product ID: ${productId}\nTitle: ${title}`);
  };

  return (
    <div style={{
      padding: '1rem',
      border: '2px solid #000',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '1rem 0'
    }}>
      <h3>React Component (Web Component)</h3>
      <p>이것은 리액트로 만든 알림 컴포넌트입니다.</p>
      <button 
        onClick={handleClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#008060',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        제품 정보 보기
      </button>
    </div>
  );
};

export default ProductAlert;
