
// Import dependencies
import * as React from 'react'
import shortid from 'shortid'

// Import interfaces
import {BubbleListInterface, BubbleInterface} from '../interfaces'
import Bubble from './bubble'

// Todo form component
const BubbleList = (props: BubbleListInterface) => {
    return (
    <div className="bubble-list">
      {
        <ul>
        {props.bubbles.map((bubble: BubbleInterface) => 
        (<li key={bubble.id}>
          <Bubble
            id={bubble.id}
            category={bubble.category}
            ant={bubble.ant}
            replacement={bubble.replacement}
            color={bubble.color}
          />
        </li>)
        )}
        </ul>
      }
    </div>
  )
}


export default BubbleList; 