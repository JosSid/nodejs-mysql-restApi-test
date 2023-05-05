//https://www.youtube.com/watch?v=3dSkc-DIM74
import {PORT} from './config/dotenv.js';
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'not found'
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

