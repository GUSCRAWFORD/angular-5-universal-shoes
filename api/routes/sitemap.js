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

/*

e.x.
GET http://localhost:4000/shoes/detail/baj1
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Blue Air Jordan</title><base href="/"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/x-icon" href="favicon.ico"><link href="styles.9c0ad738f18adc3d19ed.bundle.css" rel="stylesheet"><style ng-transition="seo-poc"></style><style ng-transition="seo-poc">p[_ngcontent-c1]{display:inline-block}</style><meta name="keywords" content="shoe,jordan,basketball"></head><body><app-root _nghost-c0="" ng-version="5.2.11">
<div _ngcontent-c0="" style="text-align:center">
  <h1 _ngcontent-c0="">
    Welcome to Shoes!
  </h1>
</div>
<h2 _ngcontent-c0="">Here are some links to help you start: </h2>
<ul _ngcontent-c0="">
  <li _ngcontent-c0="">
    <h2 _ngcontent-c0=""><a _ngcontent-c0="" href="/shoes/catalog">Shoe Catalog</a></h2>
  </li>
</ul>
<router-outlet _ngcontent-c0=""></router-outlet><app-detail _nghost-c1=""><img _ngcontent-c1="" alt="" style="max-width:250px;" src="https://www.flightclub.com/media/catalog/product/0/1/012597_1.jpg">
<p _ngcontent-c1="">
  Blue Air Jordan
</p>
</app-detail></app-root><script type="text/javascript" src="inline.bf47e1e63f780bc5f735.bundle.js"></script><script type="text/javascript" src="polyfills.4525a1efb8045a6cdc51.bundle.js"></script><script type="text/javascript" src="main.fb23a586605c5ee324f2.bundle.js"></script></body></html>
*/