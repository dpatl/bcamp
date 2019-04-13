const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User }  = require ('./user');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) { return res.status(400).send(error.details[0].message); }

    let user = await User.findOne({username: req.body.username}, function(err, resad){});
    if (!user) { return res.status(400).send('Incorrect username or password.'); }

    let pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) { return res.status(400).send('Incorrect username or password.'); }

    res.send(true);
});

function validate(user) {
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

module.exports = router;