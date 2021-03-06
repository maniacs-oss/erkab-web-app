const matcher = require('../../lib/matcher');

function receivedRequest(req, res) {
    var userType = 'Rider';
    if (req.body.userType !== "Rider") {
        userType = 'Driver';
    }

    console.log(req.body);

    var ride = {
        userType: userType,
        area: req.body.area,
        points: req.body.points,
        date: req.body.date,
        time: req.body.time,
        userId: req.user._id,
        timeStamp: new Date(),
        gender: req.user.gender,
        genderPreference: req.body.driverPref
    };
    matcher.matchQuery(ride, function (result) {
        console.log("Match found!");
        if (result) {
            res.redirect('/profile');
        } else {
            res.redirect('/dashboard');
        }
    });
}

module.exports = {
    receivedRequest: receivedRequest
};