import createBookmark from "../controllers/bookmarks.js";
import { Router } from "express";

const router = Router();

router.post("/bookmark", createBookmark);

export default router