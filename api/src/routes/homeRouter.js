const express = require("express");
const router = express.Router();

router.get("/", async (req, resp) => {
  resp.send("HOME PAGE api working....");
});

module.exports = router;
