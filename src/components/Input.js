import React, { forwardRef } from 'react';

function Input({ name, label, ...rest }) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
        <input type="text" {...rest}/>
    </div>
  );
}

export default forwardRef(Input);
