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
  const { time, activity, puppyId } = req.body;
  const newPotty = new TrackerData({
    time,
    activity,
    puppyId,
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
  const { time, activity, puppyId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No potty data with that id to update: ${id}`);

  const updatedTracker = new TrackerData({
    time,
    activity,
    puppyId,
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
