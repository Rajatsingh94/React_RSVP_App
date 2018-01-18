import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';


const Guest = props =>

    <li className="responded">
      <GuestName
        handleName={e => props.handleName(e.target.value)}
        isEditing={props.isEditing}>
        {props.call}
      </GuestName>
      <label>
        <input type="checkbox" onChange={props.handler} checked = {props.isConfirmed} /> Confirmed
      </label>
      <button onClick={props.editinghandler}>{props.isEditing ? "save" : "edit"}</button>
      <button onClick={props.removebutton}>remove</button>
    </li>


 Guest.propType = {
  call: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleName:PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handler:PropTypes.func.isRequired,
  editinghandler: PropTypes.func.isRequired,
  removebutton:PropTypes.func.isRequired

}
export default Guest;
