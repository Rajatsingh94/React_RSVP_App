import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {
  state = {
    isFiltered:false,
    pendingGuest:'',
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

  getTotalAttending = () =>
  this.state.guests.reduce((total,guest) => guest.isConfirmed ? total+1 : total ,0);

  getToggleFiltered = () => this.setState({ isFiltered: !this.state.isFiltered});

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

    // func to take input from form
    pendingGuestValue = (e) => this.setState({pendingGuest:e.target.value});

    // func to handle confirmation property
    toggleConfirmationAt = (index) =>
      this.togglePropertyAt('isConfirmed',index);

    // func to take Edit property
    toggleEditingAt = (index) => this.togglePropertyAt('isEditing',index);

    removeHandler = (index) =>
    this.setState({
      guests:[
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index+1)
      ]

    });

    // func to adding guest from form to GuestList
    newGuestvalueAdd = (e) => {
      e.preventDefault();
      this.setState({
        guests:[{
          name:this.state.pendingGuest,
          isConfirmed:false,
          isEditing:false
        },
        ...this.state.guests
      ],
      pendingGuest:''
      });
    }

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
    const totalInvited = this.getTotalInvited();
    const getTotalAttending = this.getTotalAttending();
    const unConfirmed = totalInvited - getTotalAttending;

    return (
      <div className="App">
        <header>
          <h1></h1>
          <p></p>
          <form onSubmit={this.newGuestvalueAdd}>
              <input type="text"
                onChange={this.pendingGuestValue}
                value={this.state.pendingGuest}
                placeholder="Invite Someone"/>
              <button type="submit"
                name="submit"
                value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox"
                checked={this.state.isFiltered}
              onChange={this.getToggleFiltered}
            /> Hide those who haven't responded
            </label>
          </div>
          <Counter
            total = {totalInvited}
            attending = {getTotalAttending}
            unConfirmed = {unConfirmed}    
          />

          <GuestList
            guests = {this.state.guests}
            handleName = {this.toggleSetName}
            toggleEditingAt = {this.toggleEditingAt}
            toggleConfirmationAt={this.toggleConfirmationAt}
            isFiltered={this.state.isFiltered}
            removeHandler={this.removeHandler}
            pending={this.state.pendingGuest}

          />
        </div>
      </div>
    );
  }
}

export default App;
