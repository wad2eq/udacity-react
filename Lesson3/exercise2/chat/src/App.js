import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: [{ username: 'Amy' }, { username: 'John' }],
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
    }

  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    const {users, messages} = this.state;
    console.log(users);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="container">
          {
            users.map((user, index) => <ChatWindow 
                                        key={index} 
                                        user={user} 
                                        messages={messages}
                                        isDisabled={this.isDisabled}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
