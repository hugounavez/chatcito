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
    const newMessage = {
      position: "left",
      type: "text",
      title: "Kursat",
      text: inputText,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText('');
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <AlignItemsList />
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'40%'}
        dataSource={messages}
      />
      <Grid container spacing={2} alignItems="center" className="message-input">
        <Grid item xs>
          <TextField
            id="outlined-basic"
            label="Type a message"
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSend}>Send</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
