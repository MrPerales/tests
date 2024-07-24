const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config/config");

class MongoLib {
  constructor() {
    this.client = new MongoClient(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = config.dbName;
  }
  async connect() {
    if (!MongoLib.connection) {
      await this.client.connect();
      MongoLib.connection = this.client.db(this.dbName);
      return MongoLib.connection;
    }
    return MongoLib.connection;
  }

  async getAll(collection, query) {
    const db = await this.connect();
    // toArray() nos manda todo en un array
    return db.collection(collection).find(query).toArray();
  }
  async get(collection, id) {
    const db = await this.connect();
    return db.collection(collection).findOne({ _id: ObjectId(id) });
  }
  async create(collection, data) {
    const db = await this.connect();
    const resp = await db.collection(collection).insertOne(data);
    console.log("resp.insertedId:", resp.insertedId);
    return this.get(collection, resp.insertedId);
  }
  async update(collection, id, data) {
    const db = await this.connect();
    await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    return this.get(collection, id);
  }
  async delete(collection, id) {
    const db = await this.connect();
    return db.collection(collection).deleteOne({ _id: ObjectId(id) });
  }
}
module.exports = MongoLib;
