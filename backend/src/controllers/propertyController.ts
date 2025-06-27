import { Request, Response } from "express";
import { getAllProperties, getPropertyById } from "../models/propertyModel";

export const fetchProperties = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const data = await getAllProperties();
  res.json(data); // just call, no return
};

export const fetchPropertyById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  const property = await getPropertyById(id);
  if (!property) {
    res.status(404).json({ error: "Property not found" });
    return;
  }

  res.json(property); // no return
};
