import { Router } from 'express';
const appRouter = Router();
import * as MovieController from '../Controllers/MovieController.js';
import { addMovie as _addMovie } from '../Validators/movie.validators.js';
import { upload } from '../utils/commonFun.js'
import { JwtVerification} from './utils/commonFun.js'
const cpUpload = upload.single('image')

appRouter.get('/', JwtVerification, (req, res) => {
    MovieController.getMovies(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.get('/:id', JwtVerification, (req, res) => {
    MovieController.getMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.post('/', JwtVerification, _addMovie, cpUpload, (req, res) => {
    MovieController.addMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.put('/:id', JwtVerification, cpUpload, (req, res) => {
    MovieController.updateMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.delete('/:id', JwtVerification, (req, res) => {
    MovieController.deleteMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});


// Export the Router
export default appRouter;