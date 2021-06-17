import express from "express"

const router = express.Router()

// if we are going to route url it will respond with hello world
router.route("/").get((req, res) => res.send("hello world"))

export default router