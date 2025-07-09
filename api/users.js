const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

//GET all users
router.get("/", async (req, res) => {
  try {
    const result = await User.findAll();
    res.send(result);
  } catch (error) {
    res.status(501).send("Not Implemented");
  }
});

//GET a single user by id
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await User.findByPk(id);
    res.send(result);
  } catch (error) {
    res.status(501).send("Not Implemented");
  }
});

//PATCH a user by id
router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const result = await User.findByPk(id);
    await result.update(body);
    res.send("user updated");
  } catch (error) {
    res.status(501).send("Not Implemented");
  }
});

//DELETE a user by id
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await User.findByPk(id);
    await result.destroy();
  } catch (error) {
    res.status(501).send("Not Implemented");
  }
});

//POST a user
router.post("/", async (req, res) => {
  try {
    await User.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(501).send("Not Implemented");
  }
});

module.exports = router;
