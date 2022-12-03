export default petMess = async (req, res) => {
  res.statusCode = 200;

  // /pets/1?name=tom
  res.json({ query: req.query });
};
