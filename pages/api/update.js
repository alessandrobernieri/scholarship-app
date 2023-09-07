import { MongoClient, ServerApiVersion } from "mongodb";
export default async function handler(req, res) {
  var ObjectId = require('mongodb').ObjectID;
  const uri = ""; //insert here mongodb uri
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const db = client.db(""); //insert here db name
  if (req.body.action==='Approve')
  {
    const froglist = await db
    .collection("") //insert here collection name
    .updateOne({
      _id: new ObjectId(req.body.id),
    },
    {$set: { status: 'approved'} });
  }
  client.close();

  return res.json({
    message: 'updated succesfully',
  });
}