import { Router } from 'express';
const appRouter = Router();
import * as MovieController from '../Controllers/MovieController.js';
import { addMovie as _addMovie } from '../Validators/movie.validators.js';
import { upload } from '../utils/commonFun.js'
const cpUpload = upload.single('image')

appRouter.get('/', (req, res) => {
    MovieController.getMovies(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.get('/:id', (req, res) => {
    MovieController.getMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.post('/', _addMovie, cpUpload, (req, res) => {
    MovieController.addMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.put('/:id', cpUpload, (req, res) => {
    MovieController.updateMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});

appRouter.delete('/:id', (req, res) => {
    MovieController.deleteMovie(req).then((data) => {
        res.status(200).send(data)
    }).catch(err => res.status(500).send(err))
});


// Export the Router
export default appRouter;