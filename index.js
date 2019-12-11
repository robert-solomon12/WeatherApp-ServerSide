import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contactInfo';
import weatherRouter from './api/weatherInfos';
import bodyParser from 'body-parser';
import loadContactInfos from './contactsData';
import loadWeatherInfos from './weatherInputData';
import './db';


dotenv.config();

const app = express();

const port = process.env.port || 3001;

if (process.env.seedDb) {
  loadContactInfos();
  loadWeatherInfos();
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/contactInfo', contactsRouter);
app.use('/api/weatherInfo', weatherRouter);

console.log("test")

// app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
