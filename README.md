# Web Components Demo
This is just a demonstration of a very simple implementation of native Custom HTML Elements. When installed, adding the `<hello-world></hello-world>` to web page should load the content `<p>Hello World, this is so simple!</p>`

## Usage
To use this web component in your page, you should:

### 1. Install this repo as an npm package:
```
npm install git@github.com:qdonnellan/web-components-demo.git
npm run build
```

### 2. Add the output .js to your head:

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <script type="text/javascript" src="node_modules/web-components-demo/dist/bundle.js"></script>
    </head>
    ...
</html>
```

### 3. Add the web component where desired in the body of your HTML page:

```html
<body>
    <hello-world></hello-world>
</body>
```

Thus, a simplified, complete page that consumes this web component would look like:

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <script type="text/javascript" src="node_modules/web-components-demo/dist/bundle.js"></script>
    </head>
    <body>
        <hello-world></hello-world>
    </body>
</html>
```

## Using ES6 imports
If you're building a React app, you can use the following import statement

```js
import HelloWorld from 'web-components-demo';

...
```

Currently, just importing the file is sufficient to install the <hellow-world> element as it happens on script load.
