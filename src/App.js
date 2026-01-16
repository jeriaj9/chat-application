import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import JoinChat from './components/JoinChat';
import ChatWindow from './components/ChatWindow';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const closeChat = () => {
    setShowChat(false);
    setUsername("");
    setRoom("");
  };

  return (
    <div className="App">
      {!showChat ? (
        <JoinChat
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          joinRoom={joinRoom}
        />
      ) : (
        <ChatWindow socket={socket} username={username} room={room} closeChat={closeChat} />
      )}
    </div>
  );
}

export default App;
