import React from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
    return (
        <div>
            <h1>Chat Application</h1>
            <ChatWindow />
            <MessageInput />
        </div>
    );
};

export default App;