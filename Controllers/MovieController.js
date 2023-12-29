// Models File
import Movie from '../Models/Movie.js';

export function getMovies(req) {
    return new Promise((resolve, reject) => {
        const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
        const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
        const skip = (page - 1) * limit;
        Movie.find().skip(skip).limit(limit).then(async (data) => {
            const totalCount = await Movie.countDocuments();
            const totalPage = Math.ceil(totalCount / limit);
            resolve({
                data,
                page,
                limit,
                totalPage,
                totalCount
            });
        }).catch(err => {
            reject(err);
        })
    });
}

export function getMovie(req) {
    return new Promise((resolve, reject) => {
        Movie.findOne({ _id: req.params.id }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
}

export function addMovie(req) {
    return new Promise((resolve, reject) => {
        const movie = new Movie({
            user_id: req.authBody._id,
            title: req.body.title,
            publishing_year: req.body.publishing_year,
            image: req.file.path,
        });
        movie.save().then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
}

export function updateMovie(req) {
    return new Promise((resolve, reject) => {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
}

export function deleteMovie(req) {
    return new Promise((resolve, reject) => {
        Movie.findOneAndDelete({ _id: req.params.id }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
}