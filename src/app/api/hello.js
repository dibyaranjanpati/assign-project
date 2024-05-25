// pages/api/hello.js
// import db from '../../lib/db';

import db from "@/lib/db";

export default async (req, res) => {
  try {
    const { rows } = await db.query("SELECT NOW()");
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
