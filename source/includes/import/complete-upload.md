## Complete an upload

###POST

`/dataset/:jobId/complete-upload`

> RESPONSE BODY EXAMPLE

```
{
    "jobId": "ce292946-c757-11e6-ade7-03f63e41b873"
}    
```  


Upload processing is fast but not immediate. Once an upload is created it takes time to finish. 

Service **complete-upload** starts dataset processing in backend and once it's completed it returns status code 200. 


**RESPONSE**

| Parameter | Description           |
|-------------|-----------------------|
| jobId         | The unique identifier of the created job |

