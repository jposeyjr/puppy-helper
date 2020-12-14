import PuppyData from '../models/puppyData.js';
import mongoose from 'mongoose';

export const getPuppies = async (req, res) => {
  try {
    const getPuppies = await PuppyData.find();
    res.status(200).json(getPuppies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPuppy = async (req, res) => {
  const { name, birthday, photo, breed, weight, height } = req.body;
  const newPuppy = new PuppyData({
    name,
    birthday,
    photo,
    breed,
    weight,
    height,
  });
  try {
    await newPuppy.save();
    res.status(201).json(newPuppy);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePuppy = async (req, res) => {
  const { id } = req.params;
  const { name, birthday, photo, breed, weight, height } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No puppy with id: ${id}`);

  const updatedPuppy = {
    name,
    birthday,
    photo,
    breed,
    weight,
    height,
    _id: id,
  };

  await PuppyData.findByIdAndUpdate(id, updatedPuppy, { new: true });

  res.json(updatedPuppy);
};

export const deletePuppy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No puppy with id: ${id}`);

  await PuppyData.findByIdAndRemove(id);

  res.json({ message: 'Puppy loved successfully.' });
};
