import express, { Router } from 'express';
import { getDataWithTag, getDataWithVoucher } from './controllers/carousel.js';

const PORT = process.env.PORT || 3000;
const app = express();

const router = Router();

// Evito error de CORS de manera local
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Rutas
router.get('/carousel/tag', getDataWithTag);
router.get('/carousel/voucher', getDataWithVoucher);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
