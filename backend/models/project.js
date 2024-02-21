const {getDb} = require('../utils/database');
const {ObjectId} = require('mongodb');

class Project {
   constructor(title, primaryUrl, figma, githubRepo, additional1, additional2, additional3) {
      this.title = title;
      this.primaryUrl = primaryUrl;
      this.figma = figma;
      this.githubRepo = githubRepo;
      this.additional1 = additional1;
      this.additional2 = additional2;
      this.additional3 = additional3;
   }

   async save(id) {
      const db = getDb();
      let res;
      if(id) {
         res = await db.collection('projects').updateOne({_id: ObjectId.createFromHexString(id)},{$set: this});
      }
      else {
         res = await db.collection('projects').insertOne(this);
      }
      return res;
   }

   static async fetchAll() {
      const db = getDb();
      return await db.collection('projects').find().toArray();
   }

   static async findById(id) {
      const db = getDb();
      return await db.collection('projects').findOne({_id: ObjectId.createFromHexString(id)});
   }

   static async deleteById(id) {
      const db = getDb();
      return await db.collection('projects').deleteOne({_id: ObjectId.createFromHexString(id)});
   }
}

module.exports = Project;