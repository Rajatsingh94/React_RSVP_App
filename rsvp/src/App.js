import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
  state = {
    guests:[
      {
        name:'Saloni',
        isConfirmed:true,
        isEditing:true
      },
      {
        name:'Saryu',
        isConfirmed:true,
        isEditing:false
      },
      {
        name:'Jasleen',
        isConfirmed:false,
        isEditing:false
      }
    ]
  }

  getTotalInvited=()=> this.state.guests.length;

  togglePropertyAt = (property,indextoChange) =>
    this.setState({
      guests: this.state.guests.map((guest,index) =>{
        if(index === indextoChange)
        {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
          return guest;
      })
    });

    toggleConfirmationAt = (index) =>
      this.togglePropertyAt('isConfirmed',index);

    toggleEditingAt =(index) => this.togglePropertyAt('isEditing',index);

   toggleSetName = (name,indextoChange) =>
    this.setState({
      guests: this.state.guests.map((guest,index) =>{
        if(index === indextoChange)
        {
          return {
            ...guest,
            name
          };
        }
          return guest;
      })
    });

  render() {
    return (
      <div className="App">
        <header>
          <h1></h1>
          <p></p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests = {this.state.guests}
            handleName = {this.toggleSetName}
            toggleEditingAt = {this.toggleEditingAt}
            toggleConfirmationAt={this.toggleConfirmationAt}/>
        </div>
      </div>
    );
  }
}

export default App;
