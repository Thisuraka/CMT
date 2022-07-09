import React from "react"
import {} from "react-router-dom"

function MouseOver(event) {
  event.target.style.color = '#FFFFFF';
  event.target.style.background = '#FF3A3A';
}
function MouseOut(event){
  event.target.style.color = '#FF3A3A';
  event.target.style.background = '#FFFFFF';
}

const CancelButton =({ 
    text,
    onClick, 
  }) => { 
  return (
    <button 
      onClick={onClick} 
      onMouseOver={MouseOver} 
      onMouseOut={MouseOut}
      style={{
         borderColor: '#FF3A3A',
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

export default CancelButton;