import React, { useState } from 'react';

const MessageInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="أدخل رسالتك هنا..."
            />
            <button onClick={handleSend}>إرسال</button>
        </div>
    );
};

export default MessageInput;