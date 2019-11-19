import React from 'react'

const Format = props => {
  return (
    <li>
      <div>
        <img src={props.imageURL} alt={props.imageAlt} />
        {/* <div> */}
        <p>
          {props.catNumber}
          <span> {props.catID} </span>
        </p>
        {/* </div> */}
      </div>
    </li>
  )
}

export default Format
