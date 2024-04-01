const express = require('express');
const router = express.Router();
const session = require('express-session');
const Review = require('../models/user');

router.use(session({
    secret: 'O6XtuL7VrLoHMkeM',
    resave: true,
    saveUninitialized: true
}));

router.get('/', (req, res, next) => {
    return res.render('index.ejs');
});

router.post('/', (req, res, next) => {
    let feedbackInfo = req.body;

    if (!feedbackInfo.feedback) {
        res.status(400).json({ message: "Feedback cannot be empty" });
    } else {
        let newFeedback = new Review({
            email: feedbackInfo.email,
            username: feedbackInfo.username,
            feedback: feedbackInfo.feedback
        });

        newFeedback.save((err, savedFeedback) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "An error occurred while saving feedback" });
            } else {
                res.status(200).json({ message: "Thank you for your feedback" });
                
            }
        });
    }
});

module.exports = router;
