import { MongoClient } from 'mongodb';

// Replace the uri string with your connection string.
const uri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@localhost:27017/?authSource=admin`;
const client = new MongoClient(uri);

export default client;
