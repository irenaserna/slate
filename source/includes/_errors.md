# Errors

This is a list of Hypertext Transfer Protocol (HTTP) response status codes. 

<aside class="notice">The GEoBuffer API uses the following error codes:</aside>


Error Code | Meaning | Explanation
---------- | ------- | -----------
400 | Bad Request | The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
401 | Unauthorized | The request was a valid request, but the server is refusing to respond to it. Authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. 
403 | Forbidden | The request was a valid request, but the server is refusing to respond to it. The user might be logged in but does not have the necessary permissions for the resource.
404 | Not Found | The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible. 
405 | Method Not Allowed | A request method is not supported for the requested resource; for example, a GET request on a form which requires data to be presented via POST, or a PUT request on a read-only resource. 
406 | Not Acceptable | The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. 
410 | Gone | Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged.  
418 | I'm a teapot | This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee.[49] This HTTP status is used as an Easter egg in some websites, including Google.com.
429 | Too Many Requests | The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes. 
500 | Internal Server Error | A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. 
503 | Service Unavailable | The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.

















