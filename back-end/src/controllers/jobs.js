const axios = require("axios");
const job = require("../schmea/job");

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

const fetchPreference = async (req, res) => {
  try {
    const response = await job.find({});
    console.log(response);
    // if (!response.data) res.status(200).json("No job present");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const addPreference = async (req, res) => {
  try {
    console.log(req.body, req.body.id);
    const response = await job.create({ id: req.body.id });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchData, fetchPreference, addPreference };
