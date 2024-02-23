const CleanCSS = require('clean-css')

module.exports = (eleventyConfig) => {

    eleventyConfig.addFilter('cssMin', css => {
        return new CleanCSS({}).minify(css).styles;
    });

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addWatchTarget('./src/assets/')
    return {
        dir: {
            input:'src',
            output:'public',
            includes:'_includes',
        },
        markdownTemplateEngine: 'njk',
        cname: 'harpethharvest.com'
    }
}