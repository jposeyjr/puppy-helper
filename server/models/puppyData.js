import mongoose from 'mongoose';

const puppySchema = mongoose.Schema({
  name: String,
  birthday: String,
  breed: String,
  weight: String,
  height: String,
  photo: String,
});

const PuppyData = mongoose.model('PuppyData', puppySchema);

export default PuppyData;
