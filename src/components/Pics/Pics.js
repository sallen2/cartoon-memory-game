import React from 'react'

function Pics(props) {

  const style = {
    width: '200px',
    height: '200px',
    margin: '10%',
  }

  const imgSize = {
    width: '150px',
    height: '150px',
  }

  return (
    <div className="shadow card" style={style}>
      <div className="card-body">
        <img alt='pics' name={props.name} style={imgSize} className='img-fluid' src={props.src}/>
      </div>
    </div>
  )
}

export default Pics