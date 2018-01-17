import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
  <ul>
    {props.guests.map((guest,index) =>
      <Guest
        key={index}
        call={guest.name}
        isConfirmed={guest.isConfirmed}
        isEditing = {guest.isEditing}
        handler={() => props.toggleConfirmationAt(index) }
       editinghandler = {() => props.toggleEditingAt(index) }/>
    )}
  </ul>;

GuestList.propType = {
  guests: PropTypes.array.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired

}
export default GuestList;
