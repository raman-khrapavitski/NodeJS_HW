const config = require("./config/configs.json");

console.log(config.name);

import { User, Product } from './models/models'

new User();
new Product();

import DirWatcher from './modules/dirwatcher';
import Importer from './modules/importer';

const dirwatcher = new DirWatcher('./src/data', 3000);

new Importer(dirwatcher);
