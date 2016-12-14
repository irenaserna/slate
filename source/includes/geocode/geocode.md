# Geocode

> To authorize, use this code:

> Search:

```shell
Service: http://geocoder.socialexplorer.com/search
```

> Example:

```shell
http://geocoder.socialexplorer.com/search?format=xml&bounded=0&limit=20&viewbox=40.944704,40.941397,-73.843510,-73.84024&boundingBox=0&geometry=0&query=50 Avenue NY
```

> Results:

```shell
<results query="50 Merriam Ave NY" time="2014/02/10 16:23:16">
  <result value="50 Merriam Ave, Bronxville, NY 10708" id="road_3869431_50" type="road" point="POINT (-73.84156728737041 40.94269616145988)"/>
  <result value="50 Merriam Ave, Bronx, NY 10452" id="road_3691560_50" type="road" point="POINT (-73.92578 40.839233)"/>
  <result value="50 Miriam Ave, Buffalo, NY 14219" id="road_3723689_50" type="road" point="POINT (-78.82635584789544 42.79788027263936)"/>
</results>
```


> Make sure to replace `meowmeowmeow` with your API key.

All results are in Well-Known Text form. Read more [here](https://en.wikipedia.org/wiki/Well-known_text).

**Parameters:**

1. query - Input query, e.g. 3514 SE 317th Ave Troutdale OR 97060 Multnomah
2. format - Return format [XML|JSON] - optional, default it XML
3. viewbox - Viewbox of map top,bottom,left,right - optional
4. bounded - Limit results to viewbox [1|0] - optional, default is 0
5. limit - Limit number of results [1..20] - optional, default is 5
6. geometry - Return geometry as WKT [1|0] - optional, default is 0
7. boundingBox - Return the bounding box [1|0] - optional, default is 0


**Types:**

* country
* state
* county
* usps
* place
* road
* postalCode

`Authorization: meowmeowmeow`