// Import dependencies
import * as React from 'react'
import { render } from 'react-dom'

// Import interfaces
import { BubbleInterface } from './interfaces'

// Import components
import BubbleList from './components/bubble-list'
import Topbar from './components/topbar';

// Import styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './magic/hidesidebar.js'

import './styles/sidebar.scss'
import './styles/styles.scss'


const bubbles: Array<BubbleInterface> = [
  {
   'id': 1,
   'category': "Looks",
   'ant':"Look silly",
   'replacement':"Not accurate, look good",
   'color':"rgb(79, 140, 196)"
  },
  {
    'id': 2,
    'category': "Intelligence",
    'ant':"I am stupid",
    'replacement':"No you are very smart because ...",
    'color':"rgb(79, 140, 96)"
   }
];

// TodoListApp component
const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container-fluid content">
        <BubbleList
          bubbles={bubbles}
        />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
