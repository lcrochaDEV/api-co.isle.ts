import express from 'express';
import 'dotenv/config';
import './conect-data/conectDB';
import conectDataBase from './conect-data/conectDB';
import cors from 'cors';


const HOST = process.env.SERVER_IP;
const PORT = process.env.SERVER_PORT || 3001;
// App
const app = express();
app.use(express.json());
// Cors
app.use(cors({
  origin: '*' 
}));

app.get('/', (req,  res) => {
  res.send('Página Home');
});

app.use("/home", async () => conectDataBase);

app.listen(PORT as number, HOST as string, () => {
  console.log(`Servidor executando na URL http://${HOST}:${PORT}`);
});