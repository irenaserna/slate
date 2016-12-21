## POST /dataset/:jobId/complete-upload


Upload processing is fast but not immediate. Once an upload is created it takes time to finish. 

Service **complete-upload** starts dataset import and once it's completed it returns status code 200. 


**RESPONSE**

| Status code | Description           | Body                                             |
|-------------|-----------------------|--------------------------------------------------|
| 200         | OK                    | { "id": "fa58c086-ed1d-11e5-b357-2fe7d67b1893" } |
| 403         | User not authorized   | -                                                |
| 500         | Internal server error | Depends on the internal error that occurred.     |
