import { pool } from "../config/database";
import { RowDataPacket } from "mysql2";

export const getAllProperties = async () => {
  const [rows] = await pool.query(
    "SELECT * FROM properties ORDER BY created_at DESC"
  );
  return rows;
};

export const getPropertyById = async (id: number) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM properties WHERE id = ?",
    [id]
  );
  return rows[0];
};
