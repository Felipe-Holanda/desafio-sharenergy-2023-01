import express from 'express';
import userRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';
import clientRoutes from './routes/clients.routes';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/clients', clientRoutes);


export default app;