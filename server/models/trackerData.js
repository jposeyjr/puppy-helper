import mongoose from 'mongoose';

const trackerSchema = mongoose.Schema({
  puppyId: String,
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  activity: String,
  name: String,
});

const TrackerData = mongoose.model('TrackerData', trackerSchema);

export default TrackerData;
