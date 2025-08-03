import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Rotte di esempio
app.get('/', (req, res) => {
  res.send('Test API');
});

app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});