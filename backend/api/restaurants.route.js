import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

// if we are going to route url it will respond with hello world
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
// if we want to get the list of specific restaurant with the specific id
// and we also get list of all the reviews of that restaurants
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
.route("/review")
.post(ReviewsCtrl.apiPostReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

export default router