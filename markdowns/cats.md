# Save the cats!

Now lets do something better for the world, we will save the best kitten in the world... At least
kitten pictures!
This connector will fetch the 10 best kitten pictures directly in the current directory.

@[Save the cats!]({ "stubs": ["cats.js"], "command": "node_modules/.bin/cozy-konnector-standalone cats.js" })

Try to change the code to save some other kind of pictures.

## The saveFiles function

The only goal of this function is to save some given files in a given folder.

The list of files is given as an array of object in the first parameter of the function which can
have the following attributes :

- fileurl: This is the url of the file which can be of any type. This attribute is mandatory or
  this item will be ignored
- filename : This is the final file name. This attribute is optional and as default value, the
  file name will be "smartly" guessed by the function. Use this attribute if the guess is not smart
  enough for you.

The final folder path is given as second parameter of the saveFiles function. This path is relative
to the main path given by the cozy-collect application to the connector. If the connector is run
in standalone mode, the main path is the path of the connector.

There is also a third parameter, which is the options object. This options object can only have one
attribute at the moment, which is `timeout` and this option can be interesting if your connector
needs to fetch a lot of files and if the the stack does not give enough time to your connector to
fetch it all. It could happen that the connector is stopped right in the middle of the download of
the file and the file will be broken. With the `timeout` option, the saveFiles function will check
if the timeout is passed right after downloading each file and then will be sure to be stopped
cleanly if the timeout is not too long. And since it is really fast to check that a file has
already been downloaded, on the next run of the connector, it will be able to download some more
files, and so on. The timeout is given as a timestamp. If you want the timeout to be in 10s just
give it `Date.now() + 10*1000`. You can try it ne the previous code.

## A final exercise

You can set the search keyword as a parameter to the connector. Just set it as "keyword" in the
konnector-dev-config.json file, fetch it and use it in the connector. The connector will be ready
to be added to the list of cozy connectors as "Qwant Images" for example!
