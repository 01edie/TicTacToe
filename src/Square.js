import React from 'react'

const Square = ({data,setSquare,mem, turn}) => {

  return (
    <button className="square" 
    onClick={()=> setSquare(data,turn)}>
        {mem[data]}
      </button>
  )
}


export default Square