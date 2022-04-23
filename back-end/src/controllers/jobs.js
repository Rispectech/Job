const axios = require("axios");

const BasicUrl = "https://remotive.com/api/remote-jobs?limit=";

const fetchData = async (req, res) => {
  try {
    const response = await axios(BasicUrl + 100);
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ type: "Undefined", msg: "Something went wrong ..." });
  }
};

module.exports = { fetchData };
