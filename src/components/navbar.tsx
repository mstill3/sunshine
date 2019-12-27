// Import dependencies
import * as React from 'react'

// Import interfaces
import {NavBarInterface} from '../interfaces'

// Todo form component
const NavBar = (props: NavBarInterface) => {
    return (
    <nav className="navbar navbar-expand-sm bg-light">
            <span> {props.username} </span>
            <span> {props.avatar} </span>
            <span> {props.points} </span>
    </nav>
  )
}


export default NavBar; 