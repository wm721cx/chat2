import { Request, Response } from 'express';
import { Message } from '../models/message';
import { SocketService } from '../services/socketService';

class ChatController {
    private socketService: SocketService;

    constructor(socketService: SocketService) {
        this.socketService = socketService;
    }

    public getMessages = async (req: Request, res: Response): Promise<void> => {
        try {
            const messages = await Message.find(); // Assuming Message is a Mongoose model
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch messages' });
        }
    };

    public sendMessage = async (req: Request, res: Response): Promise<void> => {
        const { content, sender } = req.body;

        const newMessage = new Message({ content, sender });

        try {
            await newMessage.save();
            this.socketService.broadcastMessage(newMessage); // Broadcast the new message to all connected clients
            res.status(201).json(newMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to send message' });
        }
    };
}

export default ChatController;