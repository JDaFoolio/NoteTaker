const router = require('express').Router();
const noteRoutes = require('./note-routes.js');

router.use('/notes', noteRoutes);

module.exports = router;