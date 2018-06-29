/*
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>

      <loc>http://www.example.com/</loc>

      <lastmod>2005-01-01</lastmod>

      <changefreq>monthly</changefreq>

      <priority>0.8</priority>

   </url>

</urlset>
https://www.sitemaps.org/protocol.html
*/
const js2xmlparser = require('js2xmlparser'),
    SEO_ENDPOINT = "http://localhost:4000";

var express = require('express');
var router = express.Router();
var shoes = require('../shoes');

router.get('/', function(req, res, next) {
    var dateFormatOptions = { mongth:'numeric', year:'numeric',day:'numeric'},
        formattedDate = (new Date()).toLocaleDateString('en-US', dateFormatOptions).replace(/\-/g,'-'),
        sitemapXml = js2xmlparser.parse(
            'urlset',
            {
                url:shoes.map(shoe=>{
                    return {
                                "loc":SEO_ENDPOINT+'/shoes/detail/'+shoe.id,
                                "lastmod":formattedDate,
                                "changefreq":"weekly",
                                "priority":1.0
                            }
                })
            }
        );
    res.set('Content-Type', 'text/xml');
    res.send(sitemapXml);
});

module.exports = router;
