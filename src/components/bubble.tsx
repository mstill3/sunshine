
// Import dependencies
import * as React from 'react'

// Import interfaces
import {BubbleInterface} from '../interfaces'

// Todo form component
const Bubble = (props: BubbleInterface) => {
    const colored = { backgroundColor: props.color };
    return (
    <div className="bubble">
      <span style={colored} className="pill"> {props.category} </span>
      <p> {props.ant} </p>
      <p> {props.replacement} </p>
    </div>
  )
}


export default Bubble; 