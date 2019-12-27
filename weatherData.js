import weatherInfoModel from './api/weatherInfos/weatherInfoModel';

const weatherInputs = [
{
'cityname': 'cityTest',
 'countryname': 'countryTest'
},
{
 'cityname': 'cityTest2',
 'countryname': 'countryTest2'
}
]

export default async function loadWeather() {
  try {
    await weatherInfoModel.deleteMany();
    await weatherInfoModel.collection.insertMany(weatherInputs);
    console.info(`${weatherInputs.length} weather data were successfully stored.`);
  } catch (err) { 
    console.error(`failed to Load Weather Input Data: ${err}`);
  }
}

