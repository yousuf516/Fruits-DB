const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 9,
      review: "Like it cold and fresh"
    }, 
    {
      name: "Orange",
      score: 7,
      review: "Sour but good"
    }, 
    {
      name: "Banana",
      score: 8.5,
      review: "Also like it cold and fresh"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n); 
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}