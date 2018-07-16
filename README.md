# Just Rest Cookies #
Request interceptor for [Just-REST](https://www.npmjs.com/package/just-rest) package. [Example app](https://github.com/BorisKotlyarov/just-rest-example)

## Use

### install
```bash
npm i just-rest-cookies
```

### Connect with your app
```javascript
const {Modules, Server} = require('just-rest');

Modules.defineRequestInterceptor('just-rest-cookies');

new Server({Modules, port: process.env.PORT || 3002 });
```
or

```javascript
const {Modules, Server} = require('just-rest');
const jrCookies = require('just-rest-cookies');

Modules.defineRequestInterceptor(jrCookies);
new Server({Modules, port: process.env.PORT || 3002 });
```

### Sample module 
```javascript
module.exports = {
    GET: {
        '/': function(request, response){
            response.resp(request.cookies);
        }
    }
};
```