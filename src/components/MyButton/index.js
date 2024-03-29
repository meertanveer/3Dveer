import React from 'react';

const MyButton = (props) => {
  return (
    <div className='button-wrapper'>
      <button type='submit' onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

export default MyButton;
