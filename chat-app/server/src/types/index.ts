export interface Message {
    id: string;
    content: string;
    senderId: string;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
}

export interface Chat {
    id: string;
    messages: Message[];
    participants: User[];
}