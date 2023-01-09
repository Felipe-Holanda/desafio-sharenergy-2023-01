import cors from 'cors';
import express from 'express';
import userRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';
import clientRoutes from './routes/clients.routes';
import animalRoutes from './routes/animals.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/clients', clientRoutes);
app.use("/animals", animalRoutes);


export default app;