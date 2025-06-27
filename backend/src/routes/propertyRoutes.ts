import express from "express";
import {
  fetchProperties,
  fetchPropertyById,
} from "../controllers/propertyController";

const router = express.Router();

router.get("/properties", fetchProperties);
router.get("/properties/:id", fetchPropertyById);

export default router;
