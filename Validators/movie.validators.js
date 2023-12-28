import { check, validationResult } from 'express-validator'

export const addMovie = [
    check('title')
        .exists()
        .withMessage('Title is required'),
    check('publishing_year')
        .exists()
        .withMessage('Publishing Year is required'),
    check('image')
        .exists()
        .withMessage('Image is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() })
        }
        next()
    }
]
