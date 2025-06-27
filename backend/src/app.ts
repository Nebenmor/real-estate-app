import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', propertyRoutes);

export default app;
