import TrackerData from '../models/trackerData.js';
import mongoose from 'mongoose';

export const getTracker = async (req, res) => {
  try {
    const pottyData = await TrackerData.find();
    res.status(200).json(pottyData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTrackerById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const pottyData = await TrackerData.findOne({ puppyId: id });
    res.status(200).json(pottyData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createTracker = async (req, res) => {
  const { startTime, endTime, activity, puppyId, name } = req.body;
  const newPotty = new TrackerData({
    startTime,
    endTime,
    activity,
    puppyId,
    name,
  });
  try {
    await newPotty.save();
    res.status(201).json(newPotty);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTracker = async (req, res) => {
  const { id } = req.params;
  const { startTime, endTime, activity, puppyId, name } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No potty data with that id to update: ${id}`);

  const updatedTracker = new TrackerData({
    startTime,
    endTime,
    activity,
    puppyId,
    name,
  });

  await TrackerData.findByIdAndUpdate(id, updatedTracker, { new: true });

  res.json(updatedTracker);
};

export const deleteTracker = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No potty data with id to delete: ${id}`);

  await TrackerData.findByIdAndRemove(id);

  res.json({ message: 'Tracker removed successfully.' });
};
