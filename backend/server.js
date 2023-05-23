const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require("body-parser");
const cors = require('cors');
const dotenv = require('dotenv');
const pdf = require('html-pdf');
const app = express();

//my code
const PORT = process.env.PORT || 8070;

//my code end

//const studentRouter = require("./routes/agencies.js");
const studentRouter = require('./routes/details.js');
//const CustomerRouter = require('./routes/Customer');

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/student', studentRouter);
app.use('/backend/CustomerR', CustomerRouter);

app.listen('5000', () => {
  console.log('Backend is running.');
});

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

// GET - send the genarete PDF to   client
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

//const   URL ='mongodb+srv://IT20641788:199708d@onlineCustomer1.pm0x5.mongodb.net/ONLINECustomer?retryWrites=true&w=majority';
