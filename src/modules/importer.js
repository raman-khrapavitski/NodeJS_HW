import cvs from 'csvtojson'
import fs from 'fs'
import csvsync from 'csvsync'

export default class Importer {

    constructor(dirwatcher) {
        dirwatcher.on("change", files => {
            files.forEach(element => {
                console.log(element)
                this.import(element).then(data => {
                    console.log(`File ${element}: ${data}`)
                })
            });
        });
    }

    import(filePath) {
        return cvs().fromFile(filePath);
    }

    importSync(filePath) {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        return csvsync.parse(data);
    }
}
