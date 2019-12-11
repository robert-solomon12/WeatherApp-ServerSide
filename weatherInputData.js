import weatherInputModel from './api/contacts/weatherInfoModel';

const userInputWeather = [{
    'cityName': 'london',
    'countryName': 'UK',
  },
  {
 'cityName': 'new york',
    'countryName': 'United States',
  },
  {
   'cityName': 'berlin',
    'countryName': 'Germany',
  },
  {
    'cityName': 'paris',
    'countryName': 'France',
];

export default async function loadWeatherInput() {
  try {
    await weatherInputModel.deleteMany();
    await weatherInputModel.collection.insertMany(userInputWeather);
    console.info(`${userInputWeather.length} weather Input Data were successfully stored.`);
  } catch (err) { 
    console.error(`failed to Load Weather Input Data: ${err}`);
  }
}
