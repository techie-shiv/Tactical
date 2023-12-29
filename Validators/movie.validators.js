import { check, validationResult } from 'express-validator'

export const addMovie = [
    check('title')
        .isEmpty()
        .withMessage('Title is required'),
    check('publishing_year')
        .isEmpty()
        .withMessage('Publishing Year is required'),
    check('image')
        .isEmpty()
        .withMessage('Image is required'),

    (req, res, next) => {
        const errorValidation = validationResult(req)
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                message: errorValidation.array()[0].msg
            })

        }
        next()
    }
]
