var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

// Build the post string from an object
var post_data = querystring.stringify({
    "jobType": 13,
    "ownerId": 226,
    "fileName": "Kanton_disem-Drawing.zip",
    "contentType": "application/x-zip-compressed",
    "collectionsUuids": [],
    "ignoredFiles": [],
    "sourceProjectionForFile": {
        "Kanton_disem Drawing/Kanton_disem-Drawing.shp":"EPSG:4326"
    },
    "encodingForFile": {}
});

var post_options = {
  host: 'dev-datahub.socialexplorer.com',
  port: '80',
  path: '/geobuffer/dataset/create-upload-url',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(post_data),
      'Cookie': 'auth-session-dev=V2h2MUtmcXFCNERZRW1fX1Z0MHB2NUt5WHBldEtnR2pPazlIU2ZqaXxkcTRDdUpGS2R5MEZ6Z3BwejY1bU50RV9adVExODZnZG9aR2M2TzVCQWpzPQ%3D%3D',
      'Origin': 'https://dev.geobuffer.com'
  }
};

// Set up the request
var post_req = http.request(post_options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
  });
});

// post the data
post_req.write(post_data);
post_req.end();