// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <li className="list-item-notification">
      {children}
      <GrFormClose className="cross-icon" />
    </li>
  )
}

export default Notification
