import React from 'react'

export default function Swatch({item}) {
const divStyle={
    backgroundColor:item.value,
}
  return (
    <>
    <div className='colorswatch' style={divStyle}>
        
    </div>
</>
  )
}
