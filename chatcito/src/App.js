import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import ButtonAppBar from './ButtonAppBar';
import AlignItemsList from './AlignItemsList';
import VirtualizedList from './VirtualizedList';
import { MessageList } from "react-chat-elements"
import "react-chat-elements/dist/main.css"

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <AlignItemsList/>
      <MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'40%'}
    dataSource={[
    {
      position:"left",
      type:"text",
      title:"Kursat",
      text:"Give me a message list example !",
    },
    {
      position:"right",
      type:"text",
      title:"Emre",
      text:"That's all.",
    },
    ]}
/>
    </div>
  );
}

export default App;







