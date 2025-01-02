// sitemap-builder.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

class XFTSitemapBuilder {
    constructor(baseUrl = 'https://xft-industry.vercel.app') {
        this.baseUrl = baseUrl.replace(/\/$/, '');
        this.directories = [];
    }

    async build() {
        try {
            // Read directory structures
            await this.readDirectories();
            await this.generateSitemap();
            console.log('XFT Industry sitemap generated successfully!');
        } catch (error) {
            console.error('Error building sitemap:', error);
        }
    }

    async readDirectories() {
        // Read the flat directory list
        const flatJson = fs.readFileSync('directory-flat.json', 'utf8');
        const directories = JSON.parse(flatJson);

        // Filter out non-directory items and special files
        this.directories = directories.filter(dir => {
            const skipItems = [
                'README.md',
                'directory-flat.json',
                'directory-list.json',
                'build.js',
                'package.json',
                'package-lock.json',
                'vercel.json',
                'index.html'
            ];
            return !skipItems.includes(dir);
        });
    }

    async generateSitemap() {
        const stream = new SitemapStream({ hostname: this.baseUrl });
        
        // Add root URL
        stream.write({
            url: '/',
            changefreq: 'weekly',
            priority: 1.0
        });

        // Add directory URLs
        for (const dir of this.directories) {
            stream.write({
                url: `/${dir}`,
                changefreq: 'weekly',
                priority: 0.8
            });
        }
        
        stream.end();

        // Convert stream to XML
        const data = await streamToPromise(stream);
        
        // Write sitemap
        fs.writeFileSync('public/sitemap.xml', data.toString());
        
        // Create robots.txt
        const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${this.baseUrl}/sitemap.xml`;
        fs.writeFileSync('public/robots.txt', robotsTxt);
    }
}

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

// Run the builder
const builder = new XFTSitemapBuilder();
builder.build();