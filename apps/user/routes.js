const express = require("express");
const router = express.Router();

const { root } = require("./controllers");

router.get("/", root);

module.exports = router;
