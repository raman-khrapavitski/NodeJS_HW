import City from '../../../app/mongo/model/city';

module.exports = {
    addCity: addCity,
    getAllCities: getAllCities,
    getRandomCity: getRandomCity,
    getCityById: getCityById,
    updateCityById: updateCityById,
    deleteCityById: deleteCityById
};

function addCity(request, response) {
    const newCity = new City(request.body);
    newCity.save(function (error) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(newCity._id);
    });
}

function getAllCities(request, response) {
    City.find(function (error, cities) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(cities);
    });
}

function getRandomCity(request, response) {
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
}

function getCityById(request, response) {
    City.findById(request.params.id, function (error, city) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(city);
    });
}

function updateCityById(request, response) {
    City.findByIdAndUpdate(request.params.id, request.body, { new: true }, function (error, city) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(city);
    });
}

function deleteCityById(request, response) {
    City.findByIdAndRemove(request.params.id, function (error, city) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(city._id);
    });
}
