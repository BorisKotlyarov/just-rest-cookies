# Just Rest Cookies #

Global middleware for [Just-REST](https://www.npmjs.com/package/just-rest) package. [Example app](https://github.com/BorisKotlyarov/just-rest-example)

## Use
```javascript
module.exports = {
    GET: {
        '/': function(request, response){
            response.resp(request.cookies);
        }
    }
};
```
### install
```bash
npm i just-rest-cookies --save
```

### Connect with your app
```javascript
const {Modules, Server} = require('just-rest');

Modules.defineGlobalMiddleware('just-rest-cookies');

new Server({Modules, port: process.env.PORT || 3002 });
```
or

```javascript
const {Modules, Server} = require('just-rest');
const jrCookies = require('just-rest-cookies');

Modules.defineGlobalMiddleware(jrCookies);
new Server({Modules, port: process.env.PORT || 3002 });
```

If you don't want set cookies middleware globally, set it locally 

```javascript
//server
const {Modules, Server} = require('just-rest');

new Server({Modules, port: process.env.PORT || 3002 });
```

```javascript
//module
const jrCookies = require('just-rest-cookies');

module.exports = {
    GET: {
        '/': [
            jrCookies,
            function(request, response){
                response.resp(request.cookies);
            }
        ]
    }
};
```