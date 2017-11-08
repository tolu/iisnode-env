# iisnode-env

`iisnode-env` is a zero-dependency module that loads environment variables from the `appSettings`-section of a `web.config` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env). 
Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.

When hosting a node app on [`iisnode`](https://github.com/tjanczuk/iisnode) (for instance in an [Azure WebApp](https://blogs.msdn.microsoft.com/hanuk/2012/05/04/top-benefits-of-running-node-js-on-windows-azure/)), `iisnode` automatically provides `appSettings` from `web.config` via `process.env`.

As such `iisnode-env` does nothing if `process.env.IISNODE_VERSION` is defined and aims only to simplify the move between running an app inside and outside of `iisnode`.

## Install

```
npm i -S iisnode-env
```

## Usage
As early as possible in your application, require and configure iisnode-env
```
require('iisnode-env').config();

// or use the alias
require('iisnode-env').load();
```

The module will do nothing if ´process.env.IISNODE_VERSION´ is defined.
In that case iisnode will have already loaded the variables.



## Credits
Inspired by
* https://github.com/motdotla/dotenv

