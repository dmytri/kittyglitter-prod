;(function () {
const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const contentful = require('contentful-metalsmith');

Metalsmith(__dirname)
  .source('src')
  .destination('build')
  .use(contentful({
    space_id : process.env.CONTENTFUL_SPACE_ID,
    access_token : process.env.CONTENTFUL_ACCESS_TOKEN
  }))
  .use(layouts({
    engine: 'mustache',
  }))    
  .use(markdown())
  .build(function(err) {
    if (err) throw err
    else console.log("DONE")
  })
}())

