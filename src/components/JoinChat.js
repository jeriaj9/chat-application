import React from 'react';

function JoinChat({ username, setUsername, room, setRoom, joinRoom }) {
    return (
        <div className="joinChatContainer">
            <h1>Welcome to the Chat Application</h1>
            <p>Join A Chat</p>
            <div className="input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <input
                    type="text"
                    placeholder="John..."
                    value={username}
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
            </div>
            <div className="input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
                <input
                    type="text"
                    placeholder="Room ID..."
                    value={room}
                    onChange={(event) => {
                        setRoom(event.target.value);
                    }}
                />
            </div>
            <button onClick={joinRoom}>Join A Room</button>
        </div>
    );
}

export default JoinChat;
