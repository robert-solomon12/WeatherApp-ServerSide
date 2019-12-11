import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is a required property']
  },
  address: String,
  mobileNumber: {
    type: Number,
    min: 0,
    max: 12,
    required: true
  },
  email: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

ContactInfoSchema.path('email').validate((email) => {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email);
}, 'A valid e-mail address is required');

ContactInfoSchema.statics.findByEmail = (email) => {
  return this.findOne({
    email: email
  });
};

ContactInfoSchema.methods.compareEmail = function (candidateEmail) {
  const isMatch = this.email === candidateEmail;
  if (!isMatch) {
    throw new Error('Password mismatch');
  }
  return this;
};


export default mongoose.model('Contact', ContactInfoSchema);