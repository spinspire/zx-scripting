# ZX Scripting Template + Example

_This repo is a template based on [This DEV article](https://dev.to/zauni/create-a-zx-nodejs-script-as-binary-with-pkg-5abf)._

## Description

This is a template for using javascript to create complex CLI tools / games that can be packaged into a single binary that can be run on most systems (**Even systems that dont have node!** ).

## How to Use

A simple example has already been included at [src/index.ts](./src/index.ts). To package your script simply:

`npm run build`

A script will be generated specifically for your system, to change what system the script is designed for change the package script according to [the pkg npm package](https://github.com/vercel/pkg#targets)
Once created you can run your script:

`./dist/start`

Happy scripting!
