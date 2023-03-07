import mongodb, { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Abir:nwlTKRX6Tvq96q9o@cluster0.a9jq4mu.mongodb.net/?retryWrites=true&w=majority"
  );

  //create database

  const db = client.db("books");

  if (req.method === "GET") {
    const books = await db.collection("books").find().sort().toArray();

    if (!books) {
      return res.status(500).json({ message: "internal Server Error" });
    }
    return res.status(200).json({ message: books });
  } else if (req.method === "POST") {
    const { name, description, imgUrl } = req.body;

    const newBook = {
      name,
      description,
      imgUrl,
    };

    const res2 = await db.collection("books").insertOne(newBook)
    return res.status(201).json({ message: "Added", book: newBook });
  }
}
export default handler;
