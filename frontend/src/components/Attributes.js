import React from 'react'
import Item from './Item'
import Swatch from './Swatch'

function Attributes({attribute}) {
  if(attribute.name==='Color'){
    return(
      <>
      <div className='pdpsize'>
          <p>{attribute.name}</p>
          <div className='pdpsizing'>
          {attribute.items.map((item)=><Swatch key={item.id} item={item}/>)}
          </div>
      </div>
    </>
    )
  }else{
  return (
  <>
    <div className='pdpsize'>
        <p>{attribute.name}</p>
        <div className='pdpsizing'>
        {attribute.items.map((item)=><Item key={item.id} item={item}/>)}
        </div>
    </div>
  </>
  )
}
}

export default Attributes