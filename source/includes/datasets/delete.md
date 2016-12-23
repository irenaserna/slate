##Delete a dataset

Deletes a dataset, including all features it contains.

###POST

`/dataset/:datasetUuid/delete`

> REQUEST BODY EXAMPLE

```
{
  "datasetUuid": "0b7f2695-59de-4be0-bb32-7b190c8f0bff"
}
```

###MANDATORY HEADER

| Content-Type  | application/json |
|---------------|------------------|


### REQUEST

> SAMPLE REQUEST

```shell
curl --request POST \
  --url https://dev-datahub.socialexplorer.com/geobuffer/dataset/0b7f2695-59de-4be0-bb32-7b190c8f0bff/delete \
  --header 'content-type: application/json' \
  --data '{\r\n  "datasetUuid": "0b7f2695-59de-4be0-bb32-7b190c8f0bff"\r\n}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://dev-datahub.socialexplorer.com/geobuffer/dataset/0b7f2695-59de-4be0-bb32-7b190c8f0bff/delete")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request.body = "{\r\n  \"datasetUuid\": \"0b7f2695-59de-4be0-bb32-7b190c8f0bff\"\r\n}"

response = http.request(request)
puts response.read_body
```


```python
import requests

url = "https://dev-datahub.socialexplorer.com/geobuffer/dataset/0b7f2695-59de-4be0-bb32-7b190c8f0bff/delete"

payload = "{\r\n  \"datasetUuid\": \"0b7f2695-59de-4be0-bb32-7b190c8f0bff\"\r\n}"
headers = {'content-type': 'application/json'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-datahub.socialexplorer.com/geobuffer/dataset/0b7f2695-59de-4be0-bb32-7b190c8f0bff/delete",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n  \"datasetUuid\": \"0b7f2695-59de-4be0-bb32-7b190c8f0bff\"\r\n}",
  CURLOPT_HTTPHEADER => array(
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

    url := "https://dev-datahub.socialexplorer.com/geobuffer/dataset/0b7f2695-59de-4be0-bb32-7b190c8f0bff/delete"

    payload := strings.NewReader("{\r\n  \"datasetUuid\": \"0b7f2695-59de-4be0-bb32-7b190c8f0bff\"\r\n}")

    req, _ := http.NewRequest("POST", url, payload)

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

| Name        | Type   | Required | Description               | Default value    | Allowed values |
|-------------|--------|:--------:|---------------------------|------------------|----------------|
| datasetUuid | String |   true   | Unique dataset identifier | No default value |    Any value   |


> RESPONSE BODY EXAMPLE

```
{
  "ok": true
}
```