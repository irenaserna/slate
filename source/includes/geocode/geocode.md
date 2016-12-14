# Geocode

> To authorize, use this code:


```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

```erlang
nestoSasvimNovo();

a sada spektakl
```


> Make sure to replace `meowmeowmeow` with your API key.

Geocode uses API keys to allow access to the API. You can register a new Geocode API key at our [developer portal](http://example.com/developers).

Geocode expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`