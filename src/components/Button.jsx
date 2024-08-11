import React from 'react';

function Button({ title, type, extraStyle, width }) {
  return (
    <button 
      style={{width:`${width}px`}}   
      type={type} 
      className={`w-full py-[18px] font-semibold border-none bg-[#1DA1F2] text-white rounded-[76px] text-[18px] ${extraStyle}`}>
      {title}
    </button>
  );
}

export default Button;
