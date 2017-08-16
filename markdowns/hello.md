# Hello world connector

Here is the traditional hello world code, but for a connector!

@[Hello konnector!]({ "stubs": ["hello.js", "konnector-dev-config.json"], "command": "node_modules/.bin/cozy-konnector-standalone hello.js" })

If you run it, you will see the hello world message in the standard output as a JSON string. The
cozy stack can interpret those messages and this will be useful later.

If you want to run this connector outside tech.io, this is not hard either provided you have nodejs
6 or better installed (even on windows) :

Create a directory, then run :

```sh
npm init
npm install cozy-konnector-libs
```

Create an `index.js` file in this directory and put code of the connector in it.
Then run :

```sh
node_modules/.bin/cozy-konnector-standalone
```

Your hello world konnector should work!

## The BaseKonnector

This connector does not do much, but it is the occasion to learn about the features of the
BaseKonnector:

- Every connector must inherit from the BaseKonnector
- It fetches the information about the linked account in the cozy (or in ./konnector-dev-config.json in standalone mode)
- It calls the function passed as argument in its constructor with an object argument containing
  all the parameters for the connector (none is needed this time) after doing all the previous steps
  and waits for a promise as a return value

You can change the "fields" value in konnector-dev-config.json and see what is passed as first argument in
the init function.

## The log function

You can also see the log function in this example which is able to output json when run in
production, to let the cozy stack interpret its output and can output colored text in development
and standalone modes. The first parameter is the `type` of the log message. It can be `info`,
`error`
, `warning` or `debug` and there is a color associated to each type. The second parameter is the item
we want to log and it can be of any type which can be JSON.stringified. And there is a third
parameter which is optional and can be a label to the log, which must be a string.
