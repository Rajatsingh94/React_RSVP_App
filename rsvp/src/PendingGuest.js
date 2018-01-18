import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';

const PendingGuest = props =>
    {
        if(props.name)
        {
          return(
          <li className="pending">
            <span>
              {props.name}
            </span>

          </li>
                );
        }
      return null;
    };

 PendingGuest.propType = {
   name:PropTypes.string.isRequired

}
export default PendingGuest;
