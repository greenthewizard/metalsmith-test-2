const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');

metalsmith(__dirname)
    .metadata({
        site: {
            name: 'Test Blog',
            description: 'My test blog.'
        }
    })
    .source('./src')
    .destination('./build')
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        default: 'article.hbs',
        pattern: "**/*.html"
    }))
    .build(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Test Blog Built!');
        }
    });