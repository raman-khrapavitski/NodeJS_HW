import Sequelize from 'sequelize';
const config = require("./config/config.json");

const databaseConfig = config.development;

const sequelize = new Sequelize(`${databaseConfig.dialect}://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`);

sequelize.authenticate()
    .then(() => {
        console.log(`Successfully conected to database ${databaseConfig.database}`);
    })
    .catch(error => {
        console.log(`Unable to conected to database ${databaseConfig.database}`);
        console.error(error);
    })

export default sequelize;
