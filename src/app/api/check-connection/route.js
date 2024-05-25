import db from "@/lib/db";

export async function GET(req, res) {
  try {
    // Perform a simple query to test the connection
    await db.query("SELECT 1");
    return new Response(
      JSON.stringify({ message: "Database connection successful" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Database connection error:", error);
    return new Response(
      JSON.stringify({
        message: "Database connection failed",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// export default async function handler(req, res) {
//   try {
//     // Perform a simple query to test the connection
//     await db.query("SELECT 1");
//     res.status(200).json({ message: "Database connection successful" });
//   } catch (error) {
//     console.error("Database connection error:", error);
//     res
//       .status(500)
//       .json({ message: "Database connection failed", error: error.message });
//   }
// }
