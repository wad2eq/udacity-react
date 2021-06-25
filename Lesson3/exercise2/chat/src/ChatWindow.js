import React from "react";
import SubmitMessage from "./FormSubmit";

const ChatWindow = ({user, messages,isDisabled}) =>{

    return(

        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>

          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === user.username ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
          <SubmitMessage />
          </div>
        </div>
    )
}

export default ChatWindow;