// src/app/api/time/route.js
// import db from "../../../../lib/db";

import db from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { rows } = await db.query("SELECT NOW()");
    res.status(200).json({ now: rows[0].now });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
