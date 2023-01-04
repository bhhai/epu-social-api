import mysql from "mysql"

export const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6588268",
  password: "VkGUXZB9Vl",
  database: "sql6588268"
})

db.connect((err) => {
  if (err) console.log("connect err")
  console.log("connected")
})