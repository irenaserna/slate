##Dataset properties


> SAMPLE REQUEST

```shell
curl --request GET \
  --url https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
```

```python
import requests

url = "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef"

response = requests.request("GET", url)

print(response.text)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef",
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

    url := "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef"

    req, _ := http.NewRequest("GET", url, nil)

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```

> RESPONSE BODY EXAMPLE

```
{
  "dataset": {
    "createdAt": "2016-12-19T15:02:11.101765408Z",
    "updatedAt": "2016-12-19T15:02:11.101765408Z",
    "title": "Kanton_disem-Drawing",
    "tags": [],
    "isDefault": true,
    "defaultGeoRefColumnUuid": "cb236b17-0510-4bfa-a866-5edb18e3d3bd",
    "vintage": null,
    "description": null,
    "uuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
    "tiles": {
      "geoLayerId": 10752,
      "projection": "EPSG:3857",
      "dataLayerId": 0,
      "featureType": 4,
      "extent": {
        "xmin": 15.7335,
        "ymin": 45.2308,
        "xmax": 19.0554,
        "ymax": 42.6022
      },
      "thumbnailUrl": "https://s3.amazonaws.com/geobuffer-development/datasets/18056e95-680c-4d57-9469-b6a27a6744ef/EPSG:3857/tilethumbnail.png",
      "dataTilesDirty": null
    },
    "featureType": 4,
    "geoRefColumns": null,
    "numberOfRecords": 10,
    "ownerId": 226,
    "isPublic": false,
    "readOnly": false,
    "collections": []
  },
  "columns": [
    {
      "uuid": "a04504c5-e1a4-4258-9975-1dd14319bd26",
      "title": "ID",
      "type": 0,
      "properties": null,
      "dirty": null
    },
    {
      "uuid": "cb236b17-0510-4bfa-a866-5edb18e3d3bd",
      "title": "18a5ca2b-248c-44d6-bb63-26afa5644259",
      "type": 10,
      "properties": null,
      "dirty": null
    },
    {
      "uuid": "c1070bf0-184e-4362-89d9-87a68cd32139",
      "title": "ID",
      "type": 1,
      "properties": {
        "min": 6345,
        "max": 6354,
        "avg": 6349.5,
        "sum": 63495,
        "discreteValues": [
          6352,
          6353,
          6354,
          6345,
          6346,
          6347,
          6348,
          6349,
          6350,
          6351
        ]
      },
      "dirty": false
    },
    {
      "uuid": "dbd5112d-5b7c-4f5f-8ddb-8f56894fa9c9",
      "title": "SHAPE_AREA",
      "type": 1,
      "properties": {
        "min": 0,
        "max": 501736448,
        "avg": 108422191.5,
        "sum": 1084221915,
        "discreteValues": [
          0,
          126880605,
          320903026,
          134701836,
          501736448
        ]
      },
      "dirty": false
    }
  ]
}
```

####GET

`/dataset/:datasetUuid`

This GET method returns properties about the specified dataset. It also includes columns with columns properties.

Each dataset contains the following properties:

| Property                | Description                      |
|-------------------------|----------------------------------|
| createdAt               | Date and time of creation        |
| updatedAt               | Date and time of update          |
| title                   | Title of dataset                 |
| tags                    |    -                             |
| isDefault               |    -                             |
| defaultGeoRefColumnUuid | Default Column ID                |
| vintage                 |                                  |
| description             | Description of the dataset       |
| uuid                    | Unique dataset identifier        |
| tiles                   | Collection of parameters         |
| featureType             |    -                             |
| geoRefColumns           |    -                             |
| numberOfRecords         | Number of records in the dataset |
| ownerId                 | Owner of the dataset             |
| isPublic                | Is dataset public or private     |
| readOnly                | Is dataset read only             |
| collections             |    -                             |



