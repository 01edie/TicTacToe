import React from 'react'

const History = ({history, travel}) => {
  return (
    <div className="game-info">
        <div><h3>Time travel : </h3></div>
        <ol className='history'>{history.map((item, index) => (
          <li key={index}><button className='btn-history' type='btn' onClick={()=>{travel(item)}}>Back to  turn {index + 1}</button></li>
        )
        )}</ol>
      </div>
  )
}

export default History