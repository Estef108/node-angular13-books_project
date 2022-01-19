const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const { check, validationResult } = require('express-validator');

const {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');


router.post('/register', [
    check('name')
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('password', 'Password should be between 8 to 20 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 8, max: 20 })
],
registerUser);

router.post('/login', loginUser);
router.post('/logout', [isAuth], logoutUser);
router.get('/user-profile/:id', [isAuth], getUserProfile);
router.put('/update-user/:id', [isAuth], updateUser);
router.delete('/delete-user/:id', [isAuth], deleteUser);

module.exports = router;