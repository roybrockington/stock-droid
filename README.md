# Stock Droid

Simple applicaton for checking stock via SCV's 3rd party API powered by React, Redux and TypeScript.

## Installation

After cloning the repo run `npm install && npm run dev`. Product querys take the following JSON format:

```js
    {
        "productcode":"PR-ODUCT",
        "description":"Product Name",
        "availablestock":"0",
        "salesbaseprice":"124.17",
        "barcode":"852437001163" 
    }
```

- Unless running in a local environment with emulated SSL, a Cors plugin such as Moesif may be required to access the data stream.
