import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import followRoutes from "./routes/follow.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import storiesRoutes from "./routes/stories.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    // "https://epusocial.online"
    origin: "https://epusocial.online",
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../epu-social-ui/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/follow", followRoutes)
app.use("/api/relationships", relationshipRoutes);
app.use("/api/stories", storiesRoutes);

app.listen(8800, () => {
  console.log("API working!");
});
