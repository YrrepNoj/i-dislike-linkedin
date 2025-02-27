# i-dislike-linkedin

Make browsing LinkedIn a little more enjoyable by adding a dislike button that no one will ever know you clicked.

## Usage Notes
HMR during development in Manifest V3 requires Chromium version >= 110.0.5480.0.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Project Setup

```sh
npm install

npm run build      # Build the chrome extension into the '/dist' directory
# OR
npm run watch      # Build the chrome extension into the '/dist' dir and rebuild when local updates occur
```

After building the project, [install the unpacked extension in chrome://extensions](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)
