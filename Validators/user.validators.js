import { check, validationResult } from 'express-validator'



export const login = [
    check('email')
        .exists()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email must be valid'),
    check('password')
        .exists()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]