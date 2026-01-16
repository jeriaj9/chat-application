import React from 'react';

function JoinChat({ username, setUsername, room, setRoom, joinRoom }) {
    return (
        <div className="joinChatContainer">
            <h1>Welcome to the Chat Application</h1>
            <p>Join A Chat</p>
            <input
                type="text"
                placeholder="John..."
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <input
                type="text"
                placeholder="Room ID..."
                value={room}
                onChange={(event) => {
                    setRoom(event.target.value);
                }}
            />
            <button onClick={joinRoom}>Join A Room</button>
        </div>
    );
}

export default JoinChat;
