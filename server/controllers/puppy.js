import PuppyData from '../models/puppyData.js';

export const getPuppies = async (req, res) => {
  try {
    const getPuppies = await PuppyData.find();
    res.status(200).json(getPuppies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
