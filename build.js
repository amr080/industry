const fs = require('fs');
const path = require('path');

// Get all directories in the current folder
function getDirectories() {
    return fs.readdirSync('.')
        .filter(file => {
            try {
                return fs.statSync(file).isDirectory() &&
                    !file.startsWith('.') && // Exclude hidden directories
                    !['node_modules'].includes(file); // Exclude specific directories
            } catch (err) {
                return false;
            }
        })
        .map(dir => `/${dir}/`);
}

// Write directories to JSON file
function writeDirectoryList(directories) {
    const jsonContent = JSON.stringify(directories, null, 2);
    fs.writeFileSync('directory-list.json', jsonContent);
    console.log('Directory list updated:', directories);
}

// Main build process
function build() {
    console.log('Starting build process...');
    const directories = getDirectories();
    writeDirectoryList(directories);
    console.log('Build completed successfully!');
}

// Run build
build();
