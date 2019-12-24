import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WeatherInfoSchema = new Schema({

    cityname: {
    type: String,
    // required: [true, 'City Name is a required property']
},
    countryname: {
    type: String,
    // required: [true, 'County Name is a required property']
},
	description: {
	type: String,
    // required: [true, 'County Name is a required property']
},
	humidity: {
	type: String,
    // required: [true, 'County Name is a required property']
},
	wind_speed: {
	type: String,
    // required: [true, 'Wind Speed is a required property']
},
    wind_degree: {
    type: String,
    // required: [true, 'Wind Degree is a required property']
},
});

export default mongoose.model('weatherInfo', WeatherInfoSchema);



// const WeatherInfoSchema = new Schema({
//   cityName: {
//     type: String,
//     required: [true, 'City Name is a required property']
//   },
//   countyName: String,
//       required: [true, 'County Name is a required property']
// });

// WeatherInfoSchema.path('cityName').validate((cityName) => {
//   var cityNameRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return cityNameRegex.test(cityName);
// }, 'A valid city Name is required');

// WeatherInfoSchema.statics.findByCityName = (cityName) => {
//   return this.findOne({
//     cityName: cityName
//   });
// };


// // Not sure here ================>v

// // WeatherInfoSchema.methods.compareCityName = function (cityName) {
// //   const isMatch = this.cityName === cityName;
// //   if (!isMatch) {
// //     throw new Error('city name mismatch');
// //   }
// //   return this;
// // };


// export default mongoose.model('Weather', WeatherInfoSchema);
