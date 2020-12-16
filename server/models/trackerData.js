import mongoose from 'mongoose';

const trackerSchema = mongoose.Schema({
  startTime: String,
  stopTime: String,
  activity: String,
});

const TrackerData = mongoose.model('TrackerData', trackerSchema);

export default TrackerData;
