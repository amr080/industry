const fs = require('fs');
const path = require('path');

function scanDirectory(dir, basePath = '') {
    try {
        const items = fs.readdirSync(dir);
        const structure = [];
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const relativePath = path.join(basePath, item);
            
            if (fs.statSync(fullPath).isDirectory() && 
                !item.startsWith('.') && 
                !['node_modules', 'dist'].includes(item)) {
                
                structure.push({
                    path: '/' + relativePath.replace(/\\/g, '/') + '/',
                    type: 'directory',
                    name: item,
                    children: scanDirectory(fullPath, relativePath)
                });
            }
        }
        return structure;
        
    } catch (error) {
        console.error(`Error scanning ${dir}:`, error);
        return [];
    }
}

function writeOutput(structure) {
    try {
        fs.writeFileSync('directory-list.json', JSON.stringify(structure, null, 2));
        fs.writeFileSync('directory-flat.json', 
            JSON.stringify(structure.map(item => item.path), null, 2));
        return true;
    } catch (error) {
        console.error('Error writing output:', error);
        return false;
    }
}

function build() {
    console.log('Starting build...');
    const structure = scanDirectory('.');
    if (writeOutput(structure)) {
        console.log('Build successful');
        process.exit(0);
    } else {
        console.log('Build failed');
        process.exit(1);
    }
}

build();