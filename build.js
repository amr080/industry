const fs = require('fs');
const path = require('path');

function scanDirectory(dir, basePath = '') {
    let structure = [];
    
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        
        if (fs.statSync(fullPath).isDirectory() && 
            !item.startsWith('.') && 
            !['node_modules'].includes(item)) {
            
            // Add directory
            structure.push({
                path: '/' + relativePath.replace(/\\/g, '/') + '/',
                type: 'directory',
                children: scanDirectory(fullPath, relativePath)
            });
        }
    });
    
    return structure;
}

function writeOutput(structure) {
    // Write full structure
    fs.writeFileSync('directory-list.json', JSON.stringify(structure, null, 2));
    
    // Write flattened version for top-level navigation
    const flatList = structure.map(item => item.path);
    fs.writeFileSync('directory-flat.json', JSON.stringify(flatList, null, 2));
    
    console.log('Directory structure updated');
}

function build() {
    console.log('Starting build process...');
    const structure = scanDirectory('.');
    writeOutput(structure);
    console.log('Build completed successfully!');
}

build();