// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-main-container">
    <h1 className="alert-notifications-heading">Alert Notifications</h1>
    <ul className="notification-list-container">
      <Notification>
        <div className="status-icon-container">
          <AiFillCheckCircle className="notification-icon success-color" />
          <div className="notification-des-container">
            <h1 className="notification-status-type-message success-color">
              Success
            </h1>
            <p className="notification-description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="status-icon-container">
          <RiErrorWarningFill className="notification-icon error-color" />
          <div className="notification-des-container">
            <h1 className="notification-status-type-message error-color">
              Error
            </h1>
            <p className="notification-description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="status-icon-container">
          <MdWarning className="notification-icon warning-color" />
          <div className="notification-des-container">
            <h1 className="notification-status-type-message warning-color">
              Warning
            </h1>
            <p className="notification-description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="status-icon-container">
          <MdInfo className="notification-icon info-color" />
          <div className="notification-des-container">
            <h1 className="notification-status-type-message info-color">
              Info
            </h1>
            <p className="notification-description">
              Anyone on the internet can view these files.
            </p>
          </div>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
