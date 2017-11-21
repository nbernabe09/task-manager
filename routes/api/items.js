const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
  .post(itemsController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(itemsController.findByUserId)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;
