import mongoose from 'mongoose';

const trackerSchema = mongoose.Schema({
  time: Number,
  activity: String,
});

const TrackerData = mongoose.model('TrackerData', trackerSchema);

export default TrackerData;
