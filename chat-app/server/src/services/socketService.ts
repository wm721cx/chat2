import { Server } from "socket.io";

class SocketService {
    private io: Server;

    constructor(server: any) {
        this.io = new Server(server);
        this.initializeSocketEvents();
    }

    private initializeSocketEvents() {
        this.io.on("connection", (socket) => {
            console.log("A user connected: " + socket.id);

            socket.on("disconnect", () => {
                console.log("User disconnected: " + socket.id);
            });

            socket.on("sendMessage", (message) => {
                this.io.emit("receiveMessage", message);
            });
        });
    }
}

export default SocketService;