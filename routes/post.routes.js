const router = require("express").Router();
const postController = require("../controllers/post.controller");
const { upload } = require("../utils/upload");

router.get("/", postController.readPosts);
router.post("/", upload, postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.put("/like/:id", postController.likePost);
router.put("/unlike/:id", postController.unlikePost);

// Comments

router.put("/comment/:id", postController.commentPost);
router.put("/edit-comment/:id", postController.editCommentPost);
router.put("/delete-comment/:id", postController.deleteCommentPost);

module.exports = router;
