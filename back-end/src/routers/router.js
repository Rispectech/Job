const app = require("express");
const { fetchData, fetchPreference, addPreference } = require("../controllers/jobs");
const router = app.Router();

router.route("/").get(fetchData);
router.route("/preference").get(fetchPreference);
router.route("/preference/add").post(addPreference);

module.exports = router;
