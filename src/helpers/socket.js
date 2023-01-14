import { io } from 'socket.io-client';

let socket;

const connectToServer = (username, lobby) => {
	socket = io('http://localhost:3000/', {
		auth: {
			username,
			lobby
		}
	});
	return socket;
};
