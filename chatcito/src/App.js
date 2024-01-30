import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid'; // Import Grid
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonAppBar from './ButtonAppBar';
import AlignItemsList from './AlignItemsList';
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import messagesHardcoded from './messagesModel'; // Import messages

function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(messagesHardcoded);
  }, []);

  const handleSend = () => {
    if (inputText.trim() === '') {
      // Prevent sending empty messages
      return;
    }

    const newMessage = {
      position: "right", // Assuming you want the sent message to appear on the right
      type: "text",
      title: "User", // Replace with the user's name if available
      text: inputText,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of the enter key
      handleSend();
    }
  };

  const inputHeight = 60; // Adjust the height to match your TextField and Button size
  const appBarHeight = 64;

  return (
    <div className="App">
      <ButtonAppBar style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }} />
      
      <div style={{ paddingTop: `${appBarHeight}px` }}>
        <AlignItemsList />
        <div style={{ overflowY: 'auto', height: `calc(100vh - ${inputHeight}px - ${appBarHeight}px)` }}>
          <MessageList
            className='message-list'
            lockable={false}
            toBottomHeight={'100%'}
            dataSource={messages}
          />
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: `${inputHeight}px`, background: '#fff', borderTop: '1px solid #ccc' }}>
        <Grid container spacing={0} alignItems="center" className="message-input">
          <Grid item xs>
            <TextField
              id="outlined-basic"
              label="Type a message"
              variant="outlined"
              value={inputText}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInputText(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSend} style={{ height: `${inputHeight}px` }}>Send</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
