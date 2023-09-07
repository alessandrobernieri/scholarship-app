import { MongoClient, ServerApiVersion } from "mongodb";
export default async function handler(req, res) {
  const uri = ""; //db url
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db(""); //db name
  const scholarship = await db
    .collection("") //collection name
    .find({})
    .sort({twitter : -1})
    .toArray();
  //const yourData = await yourCollection.find().toArray();
  
  client.close();

  res.status(200).json(scholarship);
}
