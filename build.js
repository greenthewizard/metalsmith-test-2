const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const inplace = require('metalsmith-in-place');
const handlebars = require('handlebars');

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
    .use(inplace({
        engine: 'handlebars',
        default: 'article.html',
        pattern: "**/*.html"
    }))
    .build(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Test Blog Built!');
        }
    });