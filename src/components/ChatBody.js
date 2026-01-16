import React from 'react';

function ChatBody({ messageList, username }) {
    return (
        <div className="chat-body">
            <div className="message-container">
                {messageList.map((messageContent, key) => {
                    return (
                        <div
                            className="message"
                            id={username === messageContent.author ? "you" : "other"}
                            key={key}
                        >
                            <div>
                                <div className="message-content">
                                    <p>{messageContent.message}</p>
                                </div>
                                <div className="message-meta">
                                    <p id="time">{messageContent.time}</p>
                                    <p id="author">{messageContent.author}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatBody;
