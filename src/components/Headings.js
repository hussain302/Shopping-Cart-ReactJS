import React from 'react'

const Headings = (props) => {
  return (
    <div className='container text-center mt-5 mb-2 p-4' style={{backgroundColor:"rgb(240,240,240)"}} >
        <h1 className='display-1'> {props.heading.toUpperCase()} </h1>
    </div>
  )
}
export default Headings
