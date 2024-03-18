import express from "express";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient(); // the connection to the db using db variable
const app = express();
app.use(express.urlencoded()); // ->  = body-parser (built-in in express)
app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await db.post.findMany();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { content } = req.body;
  const createdPost = await db.post.create({ data: { content } });
  res.json(createdPost);
});

app.listen(8085, () => {
  console.log("server is working");
});
