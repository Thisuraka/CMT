const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const eventController = require('../controllers/event')
const {authenticateJWT} = require('../middleware');

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage})

router.route('/')
    .get(catchAsync(eventController.index))
    .post(upload.array('image'),catchAsync(eventController.store));

router.route('/:id')
    .get(catchAsync(eventController.show))
    .put(authenticateJWT,upload.array('image'),catchAsync(eventController.update))
    .delete(authenticateJWT,catchAsync(eventController.delete));

router.post('/:id/approve',authenticateJWT,catchAsync(eventController.approve));

module.exports = router;