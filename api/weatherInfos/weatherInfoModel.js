import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WeatherInfoSchema = new Schema({
  cityName: {
    type: String,
    required: [true, 'Name is a required property']
  },
  countyName: String,
      required: [true, 'Name is a required property']
});

WeatherInfoSchema.path('cityName').validate((email) => {
  var cityNameRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return cityNameRegex.test(cityName);
}, 'A valid city Name is required');

WeatherInfoSchema.statics.findByCityName = (email) => {
  return this.findOne({
    cityName: cityName
  });
};


//Not sure here ================>v
WeatherInfoSchema.methods.compareCityName = function (candidateEmail) {
  const isMatch = this.cityName === cityName;
  if (!isMatch) {
    throw new Error('Password mismatch');
  }
  return this;
};


export default mongoose.model('Weather', WeatherInfoSchema);