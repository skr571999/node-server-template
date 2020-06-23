const express = require("express");
const router = express.Router();

const { apiRoot } = require("./../controllers");

router.get("/", apiRoot);

module.exports = router;
