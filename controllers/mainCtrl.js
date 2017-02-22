var user = require('../user.js')

module.exports = {
    getName: function(req, res, next) {
         res.status(200).json(user.name)
    },
    getLocation: function (req, res, next) {
         res.status(200).json(user.location)
    },
    getOccupations: function(req, res, next) {
         res.status(200).json(user.occupations)
    },
    getLatestOccupations: function(req, res, next) {
         res.status(200).json(user.occupations[user.occupations.length - 1])
    },
    getHobbies: function(req, res,next) {
        res.status(200).json(user.hobbies)
    },
    getHobbiesType: function(req, res, next) {
        var hobby = user.hobbies.filter(
            function(value) {
                return (value.type === req.params.type)
            }
        );
        res.status(200).json(hobby);
    },
    getFamily: function(req, res, next) {
        res.status(200).json(user.family)
    },
    getFamilyByGender: function(req, res, next) {
        var fam = user.family.filter(
            function(value){
                return (value.gender === req.params.gender)
            }
        )
        res.status(200).json(fam)
    },
    getRestaurants: function(req, res, next) {
        res.status(200).json(user.restaurants)
    }
}