import express, { Request, Response } from "express";
import 'dotenv/config';
import './conect-data/conectDB';
import connectDataBase from "./conect-data/conectDB";
import cors from 'cors';

const HOST = process.env.SERVER_IP;
const PORT = process.env.SERVER_PORT || 3001;

interface IReqRes{
  req: Request,
  res: Response
}

// App
const app = express();
app.use(express.json());
// Cors
app.use(cors({
  origin: '*' 
}));

app.get('/', ({req , res}: IReqRes) => {
  res.send('Página Home');
});

app.use("/home", connectDataBase);

app.listen(PORT as number, HOST as string, () => {
  console.log(`Servidor executando na URL http://${HOST}:${PORT}`);
});
