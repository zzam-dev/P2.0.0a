'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
const login = app.post('/login', (req, res) => {
    const data = req.body;
    console.log('Incoming Connection!');
    setTimeout(() => {
        console.log(data);
        res.send('Recieved:' + JSON.stringify(data));
    }, 500);
});
login.on('error', console.error);
const register = app.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Recieved:' + JSON.stringify(data));
});
register.on('error', console.error);
const server = app.listen(port, () => {
    console.log('Listening on port:' + port);
});
server.on('error', console.error);
