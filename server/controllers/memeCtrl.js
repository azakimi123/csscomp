module.exports = {
  getMeme: async (req, res) => {
    const db = req.app.get('db');


    const meme = await db.meme.get_meme();
    res.status(200).send(meme);
  }
}