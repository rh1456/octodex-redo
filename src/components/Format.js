import React from 'react'

const Format = props => {
  return (
    <li>
      <img src={props.imageURL} alt={props.imageAlt} />
      <div>
        <p>
          {props.catNumber}
          <span> {props.catID} </span>
        </p>
      </div>
    </li>
  )
}

export default Format
