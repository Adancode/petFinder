var express = require('express');
var adminRouter = express.Router();

var router = function(nav) {
    adminRouter.route('/addPets')
        .get(function(req, res) {

        });
    return adminRouter;
};

module.exports = router;