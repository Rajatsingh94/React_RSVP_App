import React from 'react';
import PropTypes from 'prop-types';


const Counter = props =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.attending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.unConfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.total}</td>
      </tr>
    </tbody>
  </table>;


 Counter.propType = {
   total:PropTypes.number,
   attending: PropTypes.number,
   unConfirmed: PropTypes.number

}
export default Counter;
