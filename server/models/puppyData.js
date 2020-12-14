import mongoose from 'mongoose';

const puppySchema = mongoose.Schema({
  name: String,
  birthday: Date,
  breed: String,
  weight: String,
  height: String,
  photo: String,
});

let PuppyData = mongoose.model('PuppyData', puppySchema);

export default PuppyData;
