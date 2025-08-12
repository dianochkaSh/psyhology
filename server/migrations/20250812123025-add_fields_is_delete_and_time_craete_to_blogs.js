module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('blogs').updateMany({},
      {
        $set:
          {
            create_time: new Date(),
            is_deleted : false,
          }

      });
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('blogs').deleteOne({"create_time": new Date() });
    await db.collection('blogs').deleteOne({"is_deleted" : false});
  }
};
