# Export

> SAMPLE REQUEST BODY - JSON

 ```shell
  {
  "exportSpecifications": [
    {
     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
      "format": "shp",
      "targetProjection": "EPSG:4326",
      "title":"Kanton_disem-Drawing"
    }
  ]
}
```

```ruby
{
  "exportSpecifications": [
    {
     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
      "format": "shp",
      "targetProjection": "EPSG:4326",
      "title":"Kanton_disem-Drawing"
    }
  ]
}
```


```python
{
  "exportSpecifications": [
    {
     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
      "format": "shp",
      "targetProjection": "EPSG:4326",
      "title":"Kanton_disem-Drawing"
    }
  ]
}
```

```php
{
  "exportSpecifications": [
    {
     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
      "format": "shp",
      "targetProjection": "EPSG:4326",
      "title":"Kanton_disem-Drawing"
    }
  ]
}
```

```go
{
  "exportSpecifications": [
    {
     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",
      "format": "shp",
      "targetProjection": "EPSG:4326",
      "title":"Kanton_disem-Drawing"
    }
  ]
}
```

###POST

`/dataset/export`



Exports one or more datasets as per export specifications

###MANDATORY HEADER


| Content-Type  | application/json |
|---------------|------------------|


> SAMPLE REQUEST

```shell
curl --request POST \
  --url https://dev-datahub.socialexplorer.com/geobuffer/dataset/export \
  --header 'accept-encoding: gzip, deflate, br' \
  --header 'content-type: application/json' \
  --data '{\n  "exportSpecifications": [\n    {\n     "datasetUuid": "18056e95-680c-4d57-9469-b6a27a6744ef",\n      "format": "shp",\n      "targetProjection": "EPSG:4326",\n      "title":"Kanton_disem-Drawing"\n    }\n  ]\n}'
  ```

  ```ruby
require 'uri'
require 'net/http'

url = URI("https://dev-datahub.socialexplorer.com/geobuffer/dataset/export")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["accept-encoding"] = 'gzip, deflate, br'
request["content-type"] = 'application/json'
request.body = "{\n  \"exportSpecifications\": [\n    {\n     \"datasetUuid\": \"18056e95-680c-4d57-9469-b6a27a6744ef\",\n      \"format\": \"shp\",\n      \"targetProjection\": \"EPSG:4326\",\n      \"title\":\"Kanton_disem-Drawing\"\n    }\n  ]\n}"

response = http.request(request)
puts response.read_body
```


```python
import requests

url = "https://dev-datahub.socialexplorer.com/geobuffer/dataset/export"

payload = "{\n  \"exportSpecifications\": [\n    {\n     \"datasetUuid\": \"18056e95-680c-4d57-9469-b6a27a6744ef\",\n      \"format\": \"shp\",\n      \"targetProjection\": \"EPSG:4326\",\n      \"title\":\"Kanton_disem-Drawing\"\n    }\n  ]\n}"
headers = {
    'accept-encoding': "gzip, deflate, br",
    'content-type': "application/json"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-datahub.socialexplorer.com/geobuffer/dataset/export",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n  \"exportSpecifications\": [\n    {\n     \"datasetUuid\": \"18056e95-680c-4d57-9469-b6a27a6744ef\",\n      \"format\": \"shp\",\n      \"targetProjection\": \"EPSG:4326\",\n      \"title\":\"Kanton_disem-Drawing\"\n    }\n  ]\n}",
  CURLOPT_HTTPHEADER => array(
    "accept-encoding: gzip, deflate, br",
    "content-type: application/json"
  ),
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
    "strings"
    "net/http"
    "io/ioutil"
)

func main() {

    url := "https://dev-datahub.socialexplorer.com/geobuffer/dataset/export"

    payload := strings.NewReader("{\n  \"exportSpecifications\": [\n    {\n     \"datasetUuid\": \"18056e95-680c-4d57-9469-b6a27a6744ef\",\n      \"format\": \"shp\",\n      \"targetProjection\": \"EPSG:4326\",\n      \"title\":\"Kanton_disem-Drawing\"\n    }\n  ]\n}")

    req, _ := http.NewRequest("POST", url, payload)

    req.Header.Add("accept-encoding", "gzip, deflate, br")
    req.Header.Add("content-type", "application/json")

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```

###BODY PARAMETERS

The request body is a JSON object containing the following properties.

| Name                                  | Type      | Required  | Description                   | Default value     | Allowed values            |
|-----------------------------------    |--------   |:--------: |-----------------------------  |---------------    |-------------------------- |
| exportSpecifications                  | Array     |   true    | Array export specifications; Collection of datasets   |       -           |             -             |
| --> exportSpecifications[datasetUuid]     | String    |   true    |              The unique identifier of the specified dataset                |       -           |             -             |
| --> exportSpecifications[format]          | String    |   true    |              Format of the specified dataset               |       -           | "shp" "kml" "geojson" "csv"  |

> SAMPLE RESPONSE

```shell
{
  "jobId": "40aebdb8-c754-11e6-aa90-d3fcdc13166c"
}
```

```ruby
{
  "jobId": "40aebdb8-c754-11e6-aa90-d3fcdc13166c"
}
```

```python
{
  "jobId": "40aebdb8-c754-11e6-aa90-d3fcdc13166c"
}
```

```php
{
  "jobId": "40aebdb8-c754-11e6-aa90-d3fcdc13166c"
}
```

```go
{
  "jobId": "40aebdb8-c754-11e6-aa90-d3fcdc13166c"
}
```