const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/';
const dbName = 'fruitsDB';

mongoose.connect(url + dbName)

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
    // assert.equal(3, result.result.n); 
    // assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}