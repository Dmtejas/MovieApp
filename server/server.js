import express from 'express'
import dotenv from 'dotenv'
import movieRouter from './routes/movieRoute.js';
import path from 'path'
import { fileURLToPath } from 'url';
import { dbConnection } from './middleware/dbConnection.js';
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist')));

//Movie Route
app.use('/api/movies', movieRouter);


app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
    if(err) console.log(`Error setting up the server ${err}`);
    else {
        console.log(`Server is running at : http://localhost:${PORT}`);
    }
})

