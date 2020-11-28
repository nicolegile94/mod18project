const router = require('express').Router();
const { 
    getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought)
  .post(createThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)


router
  .route('/:thoughtId/reaction')
  .post(createReaction)

router
  .route('/:thoughtId/reaction/:reactionId')
  .delete(deleteReaction);

  module.exports = router;