# Geocode


> GET

```shell
http://geocoder.socialexplorer.com/search
```
```ruby
http://geocoder.socialexplorer.com/search
```
```python
http://geocoder.socialexplorer.com/search
```
```php
http://geocoder.socialexplorer.com/search
```
```go
http://geocoder.socialexplorer.com/search
```

> GeoCode example request:

```shell
http://geocoder.socialexplorer.com/search?format=xml&bounded=0&limit=4&viewbox=40.944704,40.941397,-73.843510,-73.84024&boundingBox=0&geometry=0&query=50 Avenue NY
```

```ruby
require 'uri'
require 'net/http'

url = URI("http://geocoder.socialexplorer.com/search?format=xml&bounded=0&limit=5&viewbox=40.944704%2C40.941397%2C-73.843510%2C-73.84024&boundingBox=0&geometry=0&query=50AvenueNY")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "http://geocoder.socialexplorer.com/search"

querystring = {"format":"xml","bounded":"0","limit":"5","viewbox":"40.944704,40.941397,-73.843510,-73.84024","boundingBox":"0","geometry":"0","query":"50AvenueNY"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```


```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://geocoder.socialexplorer.com/search?format=xml&bounded=0&limit=5&viewbox=40.944704%2C40.941397%2C-73.843510%2C-73.84024&boundingBox=0&geometry=0&query=50AvenueNY",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>
```

```go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "http://geocoder.socialexplorer.com/search?format=xml&bounded=0&limit=5&viewbox=40.944704%2C40.941397%2C-73.843510%2C-73.84024&boundingBox=0&geometry=0&query=50AvenueNY"

    req, _ := http.NewRequest("GET", url, nil)

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```

> Results:

```shell
<results query="50 Avenue NY" time="2016/12/14 15:15:35">
    <result value="50 Avenue, Hudson, NY 12534" id="road_3709861_50" type="road" point="POINT (-73.74201099999999 42.312731)"/>
    <result value="Avenue, Oneida County, NY" id="road_3773513" type="road" point="POINT (-75.378239 42.939237)"/>
    <result value="50 Ave A, New York, NY 10009" id="road_3769563_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
    <result value="50 Ave A, Ny, NY 10009" id="road_3769563_usps_7420_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
</results>
```


```ruby
<results query="50 Avenue NY" time="2016/12/14 15:15:35">
    <result value="50 Avenue, Hudson, NY 12534" id="road_3709861_50" type="road" point="POINT (-73.74201099999999 42.312731)"/>
    <result value="Avenue, Oneida County, NY" id="road_3773513" type="road" point="POINT (-75.378239 42.939237)"/>
    <result value="50 Ave A, New York, NY 10009" id="road_3769563_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
    <result value="50 Ave A, Ny, NY 10009" id="road_3769563_usps_7420_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
</results>
```

```python
<results query="50 Avenue NY" time="2016/12/14 15:15:35">
    <result value="50 Avenue, Hudson, NY 12534" id="road_3709861_50" type="road" point="POINT (-73.74201099999999 42.312731)"/>
    <result value="Avenue, Oneida County, NY" id="road_3773513" type="road" point="POINT (-75.378239 42.939237)"/>
    <result value="50 Ave A, New York, NY 10009" id="road_3769563_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
    <result value="50 Ave A, Ny, NY 10009" id="road_3769563_usps_7420_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
</results>
```


```php
<results query="50 Avenue NY" time="2016/12/14 15:15:35">
    <result value="50 Avenue, Hudson, NY 12534" id="road_3709861_50" type="road" point="POINT (-73.74201099999999 42.312731)"/>
    <result value="Avenue, Oneida County, NY" id="road_3773513" type="road" point="POINT (-75.378239 42.939237)"/>
    <result value="50 Ave A, New York, NY 10009" id="road_3769563_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
    <result value="50 Ave A, Ny, NY 10009" id="road_3769563_usps_7420_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
</results>
```

```go
<results query="50 Avenue NY" time="2016/12/14 15:15:35">
    <result value="50 Avenue, Hudson, NY 12534" id="road_3709861_50" type="road" point="POINT (-73.74201099999999 42.312731)"/>
    <result value="Avenue, Oneida County, NY" id="road_3773513" type="road" point="POINT (-75.378239 42.939237)"/>
    <result value="50 Ave A, New York, NY 10009" id="road_3769563_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
    <result value="50 Ave A, Ny, NY 10009" id="road_3769563_usps_7420_50" type="road" point="POINT (-73.98502942857142 40.72400328571428)"/>
</results>
```


> Make sure to replace `meowmeowmeow` with your API key.

All results are in Well-Known Text form. Read more [here](https://en.wikipedia.org/wiki/Well-known_text).

***

**Parameters:**


| ATTRIBUTE   | DESCRIPTION                                                      |
|-------------|------------------------------------------------------------------|
| query       | Input query, e.g. 3514 SE 317th Ave Troutdale OR 97060 Multnomah |
| format      | Return format [XML&#124;JSON] - optional, default it XML              |
| viewbox     | Viewbox of map top,bottom,left,right - optional                  |
| bounded     | Limit results to viewbox [1&#124;0] - optional, default is 0          |
| limit       | Limit number of results [1..20] - optional, default is 5         |
| geometry    | Return geometry as WKT [1&#124;0] - optional, default is 0            |
| boundingBox | Return the bounding box [1&#124;0] - optional, default is 0           |

___

**As a response you can get various element types**

* country
* state
* county
* usps
* place
* road
* postalCode

`Authorization: meowmeowmeow`