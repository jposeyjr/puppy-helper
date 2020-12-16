import TrackerData from '../models/trackerData.js';
import mongoose from 'mongoose';

export const getPotty = async (req, res) => {
  try {
    const pottyData = await TrackerData.find();
    res.status(200).json(pottyData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  const { startTime, stopTime, activity } = req.body;
  const newPotty = new TrackerData({
    startTime,
    stopTime,
    activity,
  });
  try {
    await newPotty.save();
    res.status(201).json(newPotty);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePotty = async (req, res) => {
  const { id } = req.params;
  const { startTime, stopTime, activity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No potty data with that id: ${id}`);

  const updatedPotty = new TrackerData({
    startTime,
    stopTime,
    activity,
  });

  await TrackerData.findByIdAndUpdate(id, updatedPotty, { new: true });

  res.json(updatedPotty);
};

export const deletePotty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No potty data with id: ${id}`);

  await TrackerData.findByIdAndRemove(id);

  res.json({ message: 'Potty removed successfully.' });
};
