const express = require("express");
const cors = require("cors"); // Import CORS package

const app = express();
const port = 3000;

// Middleware to parse JSON bodies. This should come before your routes.
app.use(express.json());

// Use CORS middleware (This will enable CORS for all routes)
// Simplify the cors() usage for default options, or specify your options as needed.
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: "GET,POST", // Specifically allow GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// GET request handler
app.get("/", (req, res) => {
  res.send("Hello World from Vercel!");
});

// POST request handler
app.post("/submit-data", (req, res) => {
  // Make sure to check if the body is defined
  if (!req.body) return res.sendStatus(400);

  const { name, age } = req.body;
  res.status(200).json({ message: `Hello ${name}, you are ${age} years old.` });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
