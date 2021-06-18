import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

// if we are going to route url it will respond with hello world
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

router
.route("/review")
.post(ReviewsCtrl.apiPostReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

export default router