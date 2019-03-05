import program from 'commander'
import { validateOnDefinitions, validateFileExtension, validateOnFileExist } from './validator'
import readline from 'readline'
import fs from 'fs'
import csv from 'csvtojson'

var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const commands = {
    reverse(str) {
        reader.question("Please enter the text: ", function (data) {
            console.log(`Reversed data: ${data.split('').reverse().join('')}`);
            reader.close();
        });
    },
    transform(str) {
        reader.question("Please enter the text: ", function (data) {
            console.log(`Uppered case data: ${data.toUpperCase()}`);
            reader.close();
        });
    },
    outputFile(filePath) {
        validateOnDefinitions(filePath);
        validateOnFileExist(filePath);
        fs.createReadStream(filePath)
            .on('error', handleIOError)
            .pipe(process.stdout);
    },
    convertFromFile(filePath) {
        validateOnDefinitions(filePath);
        validateOnFileExist(filePath);
        validateFileExtension(filePath);
        fs.createReadStream(filePath)
            .on('error', handleIOError)
            .pipe(csv())
            .pipe(process.stdout);
    },
    convertToFile(filePath) {
        validateOnDefinitions(filePath);
        validateOnFileExist(filePath);
        validateFileExtension(filePath);
        fs.createReadStream(filePath)
            .on('error', handleIOError)
            .pipe(csv())
            .pipe(fs.createWriteStream(filePath.replace(/(.*)\.csv$/, '$1.json')));
    },
    cssBundler(path) {
        validateOnDefinitions(path);
        validateOnFileExist(path);
        fs.readdir(path, (error, files) => {
            if (error) {
                handleIOError(error);
            }
            const writerStream = fs.createWriteStream(path + 'bundle.css');
            const cssFiles = files.filter(file => file.endsWith('.css') && file !== 'bundle.css')
                                        .map(fileName => path + fileName);            
            function wrireStream() {
              var css = cssFiles.shift();
              if (css) {               
                fs.createReadStream(currentCss)
                .on('end', startWritingNextStream)
                .pipe(cssBundleWriterStream, {end: false});
              } else {               
                writerStream.write(`
                  .ngmp18 {
                    background-color: #fff;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    position: relative;
                  }
            
                  .ngmp18__hw3 {
                    color: #333;
                  }
            
                  .ngmp18__hw3--t7 {
                    font-weight: bold;
                  }`);
                writerStream.end();
              }
            }      
            wrireStream();
        });
    }
}

function handleIOError(error) {
    console.error("Iccurred an error during working with files", error.message);
    process.exit(1);
}

function checkArgs(args) {
    const firstArg = args[2];
    if (!firstArg) {
        args[2] = '--help';
    } else if (['-a', '--action'].includes(firstArg)) {
        args.forEach((element, index, array) => {
            if (['-h', '--help'].includes(element)) {
                array[index] = '';
            }
        });
    }
}

program
    .version('1.0.0', '-v, --version')
    .option('-a, --action <action>', 'Function to run: <reverse|transform|outputFile|convertFromFile|convertToFile|cssBundler>',
        /^(reverse|transform|outputFile|convertFromFile|convertToFile|cssBundler)$/i)
    .option('-f, --file <filePath>', 'Full file name to pass to the functions outputFile|convertFromFile|convertToFile|cssBundler')
    .option('-p, --path <dirPath>', 'Full pass to directory to the function cssBundler');

checkArgs(process.argv);

program.parse(process.argv);

commands[program.action](program.file || program.path)
