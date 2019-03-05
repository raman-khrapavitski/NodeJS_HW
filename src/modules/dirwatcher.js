import EventEmitter from 'events'
import fs from 'fs'

export default class DirWatcher extends EventEmitter {

    constructor(path, delay) {
        super();
        this.allFiles = new Array();
        this.watch(path, delay);
    }

    watch(path, delay) {
        setInterval(() => {
            fs.readdir(path, (error, files) => {
                if (error) {
                    console.log(error);
                    throw new Error();
                } else {
                    if (!this.allFiles.length) {                        
                        files.forEach(element => {
                            this.allFiles.push(element);
                        });                        
                        this.emit("change", this.allFiles.map(filename => `${path}/${filename}`));
                    } else {                        
                        const tempArray = new Array();
                        files.forEach(element => {
                            tempArray.push(element)
                        });
                        let diff = tempArray.filter(x => !this.allFiles.includes(x));
                        this.allFiles = this.allFiles.concat(diff)                    
                        this.emit("change", diff.map(filename => `${path}/${filename}`));
                    }
                }
            });
        }, delay);
    }
}
