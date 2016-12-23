##Edit Cell

####POST

`/dataset/:datasetUuid/cell-edit`

> REQUEST BODY EXAMPLE

```
{
    "columnUuid":"bb3fb84c-c6fe-45e5-a800-02345ff11ddc",
    "rowUuid":"592b215a-c5fc-11e6-8a75-17c5ca740c80",
    "newValue":"HERCEGovacki-NERETVANSKI KANTON",
    "oldValue":"HERCEG-NERETVANSKI KANTON"
}
```

### REQUEST

> SAMPLE REQUEST

```shell
curl --request POST \
  --url https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef/cell-edit \
  --header 'content-type: application/json' \
  --data '{\n   "columnUuid":"bb3fb84c-c6fe-45e5-a800-02345ff11ddc",\n  "rowUuid":"592b215a-c5fc-11e6-8a75-17c5ca740c80",\n "newValue":"HERCEGovacki-NERETVANSKI KANTON",\n "oldValue":"HERCEG-NERETVANSKI KANTON"\n}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef/cell-edit")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request.body = "{\n\t\"columnUuid\":\"bb3fb84c-c6fe-45e5-a800-02345ff11ddc\",\n\t\"rowUuid\":\"592b215a-c5fc-11e6-8a75-17c5ca740c80\",\n\t\"newValue\":\"HERCEGovacki-NERETVANSKI KANTON\",\n\t\"oldValue\":\"HERCEG-NERETVANSKI KANTON\"\n}"

response = http.request(request)
puts response.read_body
```


```python
import requests

url = "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef/cell-edit"

payload = "{\n\t\"columnUuid\":\"bb3fb84c-c6fe-45e5-a800-02345ff11ddc\",\n\t\"rowUuid\":\"592b215a-c5fc-11e6-8a75-17c5ca740c80\",\n\t\"newValue\":\"HERCEGovacki-NERETVANSKI KANTON\",\n\t\"oldValue\":\"HERCEG-NERETVANSKI KANTON\"\n}"
headers = {'content-type': 'application/json'}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef/cell-edit",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"columnUuid\":\"bb3fb84c-c6fe-45e5-a800-02345ff11ddc\",\n\t\"rowUuid\":\"592b215a-c5fc-11e6-8a75-17c5ca740c80\",\n\t\"newValue\":\"HERCEGovacki-NERETVANSKI KANTON\",\n\t\"oldValue\":\"HERCEG-NERETVANSKI KANTON\"\n}",
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

    url := "https://dev-datahub.socialexplorer.com/geobuffer/dataset/18056e95-680c-4d57-9469-b6a27a6744ef/cell-edit"

    payload := strings.NewReader("{\n\t\"columnUuid\":\"bb3fb84c-c6fe-45e5-a800-02345ff11ddc\",\n\t\"rowUuid\":\"592b215a-c5fc-11e6-8a75-17c5ca740c80\",\n\t\"newValue\":\"HERCEGovacki-NERETVANSKI KANTON\",\n\t\"oldValue\":\"HERCEG-NERETVANSKI KANTON\"\n}")

    req, _ := http.NewRequest("POST", url, payload)

    req.Header.Add("content-type", "application/json")

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```

The request body is a JSON object containing the following properties:

#####BODY PARAMETERS

| Name       |  Type  | Required |        Description       |   Default value  | Allowed values |
|------------|:------:|:--------:|:------------------------:|:----------------:|:--------------:|
| columnUuid | String |   true   | Unique column identifier | No default value |    Any value   |
| rowUuid    | String |   true   |   Unique row identifier  | No default value |    Any value   |
| newValue   | String |   true   |      New cell value      | No default value |    Any value   |
| oldValue   | String |   true   |      Old cell value      | No default value |    Any value   |

### RESPONSE

Response corresponds to a GEoBuffer API error codes.