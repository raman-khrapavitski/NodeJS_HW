import sequelize from '../../../app/data/index';
import UserMongo from '../../../app/mongo/model/user';

const User = sequelize.import('../../../app/data/models/user');

module.exports = {
    getAllUsers: getAllUsers,
    deleteUserById: deleteUserById
};

function getAllUsers(request, response) {    
    User.findAll().then(users => {
        response.json(users);
    });
}

function deleteUserById(request, response) {
    UserMongo.findByIdAndRemove(request.params.id, function (error, user) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(user._id);
    });
}
