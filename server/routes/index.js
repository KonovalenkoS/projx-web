// IMPORTS //
var router = require('express').Router();
var path = require('path');

// ROUTES //
router.get('/*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../client/views/index.html'));
});

module.exports = router;
