import mysql from "mysql2/promise"
// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });
  const fetchCourses = async function() {
    try {
      const query = "select * from courses"; 
      const [rows] = await connection.execute(query); 
      return rows;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }

  };

  const fetchCourseDetails = async function(id) {
    try {

        const query = "SELECT * FROM courses WHERE ID = ?"; 
        const [rows] = await connection.execute(query, [id]); 
        return rows[0] || null;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
  };

  export { fetchCourses, fetchCourseDetails};