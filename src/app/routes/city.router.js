import express from 'express';
import City from '../mongo/model/city';

const router = express.Router();

router.route('/')
    .get(function (request, response) {
        City.find(function (error, cities) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(cities);
        });
    })
    .post(function (request, response) {
        const newCity = new City(request.body);
        newCity.save(function (error) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(newCity._id);
        });
    });

router.route('/:id')
    .get(function (request, response) {
        City.findById(request.params.id, function (error, city) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(city);
        });
    })
    .put(function (request, response) {
        City.findByIdAndUpdate(request.params.id, request.body, { new: true }, function (error, city) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(city);
        });
    })
    .delete(function (request, response) {
        City.findByIdAndRemove(request.params.id, function (error, city) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            response.json(city._id);
        });
    });

router.route('/random')
    .get(function (request, response) {
        City.count().exec(function (error, count) {
            if (error) {
                console.log('Occured an error');
                console.log(error);
                response.status(500).json(error);
            }
            let random = Math.floor(Math.random() * count);

            City.findOne().skip(random).exec(function (error, result) {
                if (error) {
                    console.log('Occured an error');
                    console.log(error);
                    response.status(500).json(error);
                }
                response.json(result);
            });
        });
    });

export default router;
