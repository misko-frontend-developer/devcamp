const logger = (req, res, next) => {
  req.hello = "Hello world";
  console.log("Run moddleware");
  next();
};

module.exports = logger;
