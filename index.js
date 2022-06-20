import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sign-up', (req, res) => {
  
  console.log(req.headers)
  console.log(req.body)
  });
  



app.listen(5000);