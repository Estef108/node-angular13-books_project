const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const httpStatusCode = require('../../utils/httpStatusCode');
const { validationResult } = require('express-validator');

//Registro de usuario -- Sign up
const registerUser = async (req, res, next) => {
    try {
        // const errors = validationResult(req);
        const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
            return `[${param}]: ${msg}`;
          };
          const result = validationResult(req).formatWith(errorFormatter);
          if (!result.isEmpty()) {
            return res.status(422).json({ errors: result.array() });
          }

        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.favBooks = [];
        const userDb = await newUser.save();
        res.json({
            status: 201,
            message: httpStatusCode[201],
            data: null,
        })
    } catch (error) {
        next(error);
    }
}

//Inicio de sesión de usuario -- Sign-in/login
const loginUser = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email })
        if (!userInfo) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    email: userInfo.email,
                },
                "longer-secret-is-better",
                {
                    expiresIn: 3600000,  //1h
                }
            );
            // return res.json({
            //     status: 200,
            //     message: httpStatusCode[200],
            //     data: { user: userInfo, token: token },
            // })
            res.status(200).json({
                token: token,
                expiresIn: 3600000, //1h
                data: { user: userInfo }
            })
            
        } else {
            return res.json({
                status: 400,
                message: httpStatusCode[400],
                data: null,
            });
        }
    } catch (error) {
        next(error);
    }
}

//Cierre de sesión de usuario
const logoutUser = (req, res, next) => {
    try {
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            token: null,
        });
    } catch (error) {
        next(error);
    }
}


//Obtener perfil de usuario
const getUserProfile = async (req, res, next) => {
    try {
        const userId = req. params.id;
        const user = await User.findById(userId);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { userId: user._id, email: user.email }
        })
    } catch (error) {
        next(error);
    }
}

//Actualizar perfil usuario
const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, {
            $set: req.body
        }, { new: true });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: "User successfully updated!"
        })
    }
    catch (error) {
        next(error);
    }
}

//Eliminar usuario
const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: "User sucessfully deleted"
        })
    } catch (error) {
        next(error);
    }
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUser,
    deleteUser
}