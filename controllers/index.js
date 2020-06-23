const apiRoot = (req, res) => {
  res.send({ message: "API Working...", path: "/" });
};

module.exports = {
  apiRoot: apiRoot,
};
