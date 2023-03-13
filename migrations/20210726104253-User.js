module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db
      .collection("users")
      .updateOne(
        { email: "shami.nns@gmail.com" },
        { $set: { name: "User Waheeb" } }
      );
    await db
      .collection("users")
      .updateOne(
        { email: "shami.nns@gmail.com" },
        { $set: { isDeleted: false } }
      );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db
      .collection("users")
      .updateOne({ email: "shami.nns@gmail.com" }, { $set: { name: "def" } });
    await db
      .collection("users")
      .updateOne(
        { email: "shami.nns@gmail.com" },
        { $set: { isDeleted: false } }
      );
  },
};
