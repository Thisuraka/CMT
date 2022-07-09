import React from "react"
import {} from "react-router-dom"

const CustomButton =({ 
    color,
    backgroundColor,
    text, 
    onClick, 
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: '#FFFFFF',
         color: 'color',
         borderColor: 'color',
         borderWidth: '1px',
         borderRadius: '4px',
         minHeight : '25px',
         minWidth : '120px',
         height : 'fit-content',
         width : 'fit-content',
         padding : '6px',
         margin: '4px',
         fontWeight: 'bold',
      }}
    >
    {text}
    </button>
  );
}

export default CustomButton;