import React from 'react'
import Item from './Item'

function Attributes({attribute}) {
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

export default Attributes