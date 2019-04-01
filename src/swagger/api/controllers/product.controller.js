import sequelize from '../../../app/data/index';
import ProductMongo from '../../../app/mongo/model/product';

const Product = sequelize.import('../../../app/data/models/product');
const Review = sequelize.import('../../../app/data/models/review');

module.exports = {
    addProduct: addProduct,
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    deleteProductById: deleteProductById,
    getReviewsByProductId: getReviewsByProductId
};

function addProduct(request, response) {
    let newProduct = request.body;
    Product.create(newProduct).then(() => {
        console.log(`Proudct with id - ${newProduct.guid} created`);
        response.json(newProduct.guid);
    })
}

function getAllProducts(request, response) {
    Product.findAll().then(products => {
        console.log(`Founded products - ${products}`)
        response.json(products);
    });
}

function getProductById(request, response) {
    Product.findByPk(request.params.productId).then(product => {
        console.log(`Founded product - ${product}`)
        response.json(product);
    });
}

function deleteProductById(request, response) {
    ProductMongo.findByIdAndRemove(request.params.id, function (error, product) {
        if (error) {
            console.log('Occured an error');
            console.log(error);
            response.status(500).json(error);
        }
        response.json(product._id);
    });
}

function getReviewsByProductId(request, response) {
    console.log("Cookies: ", request.parsedCookies);
    console.log("Query: ", request.parsedQuery);
    Review.findAll({ where: { productId: request.params.productId } }).then(reviews => {
        console.log(`Founded reviews - ${reviews}`)
        response.json(reviews);
    });
}
