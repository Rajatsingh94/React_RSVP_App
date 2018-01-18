import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest'

const GuestList = props =>
  <ul>
    <PendingGuest  name={props.pending} />

    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed )
      .map((guest,index) =>
      <Guest
        key={index}
        call={guest.name}
        isConfirmed={guest.isConfirmed}
        isEditing = {guest.isEditing}
        removebutton={() => props.removeHandler(index)}
        handler={() => props.toggleConfirmationAt(index) }
       editinghandler = {() => props.toggleEditingAt(index)}
       handleName={(text) => props.handleName(text,index)}  />
    )}
  </ul>;

GuestList.propType = {
  guests: PropTypes.array.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  handleName: PropTypes.func.isRequired,
  isFiltered:PropTypes.bool.isRequired,
  removeHandler:PropTypes.func.isRequired,
  pending:PropTypes.string.isRequired

}
export default GuestList;
