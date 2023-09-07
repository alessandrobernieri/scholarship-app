import { MongoClient, ServerApiVersion } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
  const data = req.body;
  const uri = ""; //insert here mongodb uri
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db(""); //insert here db name
  const yourCollection = db.collection(""); //insert here collection name
  const result = await yourCollection.insertOne(data);
  client.close();
  res.status(201).json({ message: "Data inserted successfully!" });
  }
}