## Create upload URL

####POST

`https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url`

### REQUEST

> REQUEST BODY EXAMPLE

```
{
  "jobType": 5,
  "ownerId": 1,
  "fileName": "states.zip",
  "contentType": "application/zip",
  "tags": "['tag1', 'tag2']",
  "createTagsFromFolders": "true if every folder name in the file path should be a tag. false by default"
}
```

> SAMPLE REQUEST

```shell
curl --request POST \
  --url https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url \
  --header 'auth-session-dev: LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D' \
  --header 'authorization: LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D' \
  --header 'content-type: application/json' \
  --data '{\r\n  "jobType": 13,\r\n  "ownerId": 1,\r\n  "fileName": "states.zip",\r\n  "contentType": "application/zip",\r\n  "tags": "['\''tag1'\'', '\''tag2'\'']",\r\n  "createTagsFromFolders": "true if every folder name in the file path should be a tag. false by default"\r\n}'
```

```ruby
require 'uri'
require 'net/http'

url = URI("https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'
request["auth-session-dev"] = 'LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D'
request["authorization"] = 'LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D'
request.body = "{\r\n  \"jobType\": 13,\r\n  \"ownerId\": 1,\r\n  \"fileName\": \"states.zip\",\r\n  \"contentType\": \"application/zip\",\r\n  \"tags\": \"['tag1', 'tag2']\",\r\n  \"createTagsFromFolders\": \"true if every folder name in the file path should be a tag. false by default\"\r\n}"

response = http.request(request)
puts response.read_body
```


```python
import requests

url = "https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url"

payload = "{\r\n  \"jobType\": 13,\r\n  \"ownerId\": 1,\r\n  \"fileName\": \"states.zip\",\r\n  \"contentType\": \"application/zip\",\r\n  \"tags\": \"['tag1', 'tag2']\",\r\n  \"createTagsFromFolders\": \"true if every folder name in the file path should be a tag. false by default\"\r\n}"
headers = {
    'content-type': "application/json",
    'auth-session-dev': "LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D",
    'authorization': "LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n  \"jobType\": 13,\r\n  \"ownerId\": 1,\r\n  \"fileName\": \"states.zip\",\r\n  \"contentType\": \"application/zip\",\r\n  \"tags\": \"['tag1', 'tag2']\",\r\n  \"createTagsFromFolders\": \"true if every folder name in the file path should be a tag. false by default\"\r\n}",
  CURLOPT_HTTPHEADER => array(
    "auth-session-dev: LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D",
    "authorization: LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D",
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

    url := "https://dev-datahub.socialexplorer.com/geobuffer/dataset/create-upload-url"

    payload := strings.NewReader("{\r\n  \"jobType\": 13,\r\n  \"ownerId\": 1,\r\n  \"fileName\": \"states.zip\",\r\n  \"contentType\": \"application/zip\",\r\n  \"tags\": \"['tag1', 'tag2']\",\r\n  \"createTagsFromFolders\": \"true if every folder name in the file path should be a tag. false by default\"\r\n}")

    req, _ := http.NewRequest("POST", url, payload)

    req.Header.Add("content-type", "application/json")
    req.Header.Add("auth-session-dev", "LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D")
    req.Header.Add("authorization", "LURCcy1mWVZuLVlocXhCdEtONTVnck9sUTdRdmw0azRpb0RCZ0Y1THxqd1g1RkE4cTVNZjRIZWdURTdQYmItOV9PR3FGNzdFOGF1cXFqOHZ5SHpZPQ%3D%3D")

    res, _ := http.DefaultClient.Do(req)

    defer res.Body.Close()
    body, _ := ioutil.ReadAll(res.Body)

    fmt.Println(res)
    fmt.Println(string(body))

}
```

The request body is a JSON object containing the following properties:

#####BODY PARAMETERS

| Name                    | Type     | Required | Description    | Default value    | Allowed values |
|-------------------------|----------|----------|----------------|------------------|----------------|
| jobType                 |  Integer |   true   | No description | No default value |       13       |
| ownerId                 |  Integer |   true   | No description | No default value |    Any value   |
| fileName                |  String  |   true   | No description | No default value |    Any value   |
| contentType             |  String  |   true   | No description | No default value |    Any value   |
| sourceProjectionForFile |   Hash   |   false  | No description | No default value |    Any value   |
| encodingForFile         |   Hash   |   false  | No description | No default value |    Any value   |
| sourceProjection        |  String  |   false  | No description | No default value |    Any value   |
| collectionsUuids        | [String] |   false  | No description | No default value |    Any value   |
| ignoredFiles            | [String] |   false  | No description | No default value |    Any value   |


### RESPONSE

> RESPONSE BODY EXAMPLE

```
{
  "jobId": "ce292946-c757-11e6-ade7-03f63e41b873",
  "url": "http://s3.amazonaws.com/datahub-workers-jobs-development/226/ce292946-c757-11e6-ade7-03f63e41b873/Kanton_disem-Drawing.zip",
  "signedUrl": "https://datahub-workers-jobs-development.s3.amazonaws.com/226/ce292946-c757-11e6-ade7-03f63e41b873/Kanton_disem-Drawing.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJN3IU7FMIXRK4JKQ%2F20161221%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20161221T082921Z&X-Amz-Expires=100&X-Amz-SignedHeaders=content-type%3Bhost&x-amz-acl=public-read&X-Amz-Signature=fdab163e67714704ff1ccd3fc576c7620efd69e1101c4c13e633ebc393c0edab"
}    
```  

####RESPONSE PARAMETERS

| Status code | Description           | Body       |
|-------------|-----------------------|------------|
| 200         |           Ok          | Body       |
| 400         |      Bad request      | Body       |
| 403         |  User not authorized  | Body       |
| 500         | Internal server error | Body       |

Response incude URL which is already encoded, so there is no need to be encoded again.

Given URL lasts short period of time (5 minutes or less). Every job should be started within this period of time.
