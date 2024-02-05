import express from "express";
import { deletebyid, getGallery, getbyId, updateGallery } from "../controllers/gallery.js"

const router = express.Router();

//create a video
router.post("/", updateGallery)
router.get("/", getGallery)
router.get("/:id", getbyId)
router.delete("/:id", deletebyid)

export default router;