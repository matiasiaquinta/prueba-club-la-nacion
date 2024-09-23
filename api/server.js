import express, { Router } from 'express';
import { getDataWithTag, getDataWithVoucher } from './controllers/carousel.js';

const PORT = process.env.PORT || 3000;
const app = express();

const router = Router();

// Evito error de CORS de manera local
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
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

app.use('/', (req, res) => {
  res.send('Servidor iniciado correctamente.');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Esto es para que funcione en deploy con vercel
export default (req, res) => app(req, res);
