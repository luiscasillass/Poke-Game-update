import React from 'react';
import '../styles.css'

const Actions = () => {
  return (
    <div
      style={{
        width: '60px',
        height: '60px',
        display: 'flex',
        backgroundColor: 'black',
      }}
    >
      <div classNme="container-action">
        <button
         className="action-btn"
        ></button>
      </div>
      <div>0
        <button
          style={{
            backgroundColor: '#821660',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        ></button>
      </div>
    </div>
  );
};

export default Actions;