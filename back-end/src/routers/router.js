const app = require("express");
const { fetchData } = require("../controllers/jobs");
const router = app.Router();

router.route("/").get(fetchData);

module.exports = router;
