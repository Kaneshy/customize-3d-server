import Gallery from "../models/Gallery.js";
import { createError } from "../error.js";

export const updateGallery = async (req, res, next) => {
  console.log('espress addvideo', req.body)
  const newTarget = new Gallery({ ...req.body });
  try {
    const savedTarget = await newTarget.save();
    res.status(200).json(savedTarget);
  } catch (err) {
    console.log(err.message)
    next(err);
  }
};

export const getGallery = async (req, res) => {

  try {
    const getTarjetsw = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(getTarjetsw);
  } catch (err) {
    console.log(err.message)
  }
}

export const getbyId = async (req, res, next) => {
  console.log('dd', req.params.id)
  try {
    const user = await Gallery.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    next(err)
  }
}

export const deletebyid = async (req, res, next) => {
  console.log('dd', req.params.id)
  try {
    await Gallery.findOneAndDelete({ _id: req.params.id })
    res.status(200).json('Target Deleted')
  } catch (error) {
    next(err)
  }
}
