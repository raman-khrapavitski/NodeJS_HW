import  customServer  from './custom-server';
import fs from 'fs';

const message = 'Hello world';

function importSync(filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf8' }).toString().replace(/{message}/, message);
}

customServer('text/html', importSync('./index.html'));
