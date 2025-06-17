module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db, client) {
    await db.collection('peoples').updateMany({},
      {
        $set:
          {
            phone: "+79286111360",
            time_consultation : "90 минут",
            format_consultation : "Очно и онлайн"
          }

      });
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db, client) {
    await db.collection('peoples').deleteOne({"phone": "+79286111360" });
    await db.collection('peoples').deleteOne({"time_consultation" : "90 минут"});
    await db.collection('peoples').deleteOne({"format_consultation" : "Очно и онлайн "});
  }
};
