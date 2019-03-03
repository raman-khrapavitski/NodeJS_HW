export function validateOnDefinitions(filePath) {
    if (!filePath) {
        console.log(`File path - ${filePath} is undefined!`);
        process.exit(1);
    }
}

export function validateFileExtension(filePath) {
    var regex = new RegExp('.+(\.csv)$', 'i');
    if (!regex.test(filePath)) {
        console.log(`File path - ${filePath} doesn't valid!`);
        process.exit(1);
    }
}

export function validateOnFileExist(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File - ${filePath} doesn't exist!`);
        process.exit(1);
    }
}
