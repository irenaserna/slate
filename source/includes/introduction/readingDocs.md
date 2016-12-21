## Reading this Documentation


This documentation is structured by API, which is a group of related functionality like Geocode or Imports, and then by endpoint, which is a specific method within that API that performs one action and is located at a specific URL.

Each endpoint in this documentation is described using several parts:


The HTTP method: includes GET, POST, PUT, PATCH, DELETE
The path: for instance, /geocode/v5/{mode}/{query}.json
URL parameters: these are the parts of the endpoint path wrapped in brackets, like {mode} in this example.
Query parameters: contained in a table with an Option header, these are added to the query string part of the request.
A token scope, if one is required.
All URLs referenced in the documentation have the base path https://api.geobuffer.com. This base path goes before the endpoint path. 


Query parameters are added to the end of the URL with query string encoding. If you wanted to add the country query parameter to that Geocode request, you'd the query string ?country=us to the end of the URL.

All endpoints require an access token?, which is provided as a query parameter. 

The next section covers how you get and use access tokens.