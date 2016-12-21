# Import

The GeoBuffer Import API transforms geographic data into tilesets that can be used with maps and geographic applications. Given a wide variety of geospatial formats, it normalizes projections and generates tiles at multiple zoom levels to make data viewable on the web.

The upload workflow begins with a file and ends with a tileset, or if you have invalid data, an error.


**There are several steps included in the import process:**

1. Procedure **create-upload-url** creates a URL for upload the selected filed and creates a job that includes url with several parameters
2. Use an S3 Amazon client, to upload a file to S3 using given credentials
3. Create an upload using the staged file's URL
4. Complete upload using **complete-upload** procedure

Let's see the first step: 