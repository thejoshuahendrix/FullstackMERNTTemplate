import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './routes/index';
import cors from 'cors';
import log from './services/Logger';






dotenv.config();
const PORT = process.env.PORT || 5000;


const app: Express = express();
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use("/api", router);

app.listen(PORT, () => {
    log.info(`Listening on http://localhost:${PORT}`)
    mongoose.connect(process.env.MONGO_URI || "").then(() => {
        log.info("Connected to the database")
    }).catch((e: any) => {
        log.veryBigNetworkError("Error connecting to the DB", e.message)
    });
});
