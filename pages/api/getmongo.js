import { MongoClient, ServerApiVersion } from "mongodb";
export default async function handler(req, res) {
  const addy = req.body;
  const uri = ""; //insert here mongodb uri
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db(""); //insert here the db name
  const yourCollection = db.collection(""); //insert here the collection name
  const yourData = await yourCollection.findOne({
    address: addy
  });

  client.close();

  res.status(200).json(yourData);
}