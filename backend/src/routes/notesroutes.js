import express from "express";
import {getAllNotes, createNotes, updateNotes, deleteNotes, getNotebyId} from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotebyId);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;