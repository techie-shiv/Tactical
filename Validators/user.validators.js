import { check, validationResult } from 'express-validator'

export const login = [
    check('email')
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email must be valid'),
    check('password')
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errorValidation = validationResult(req)
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                message: errorValidation.array()[0].msg
            })

        }
        next()
    },

]