### File system backend server example for netlify-cms-backend-fs

This example uses a static set of files and no build tools.

**_Warning:_** This is **_ONLY_** an example and **_NOT_** a recommendation to run a Netlify CMS server on your backend. It should only be used in a controlled environment (file corruption can be real) by someone who is familiar with the netlify-cms project and is familiar with running an express server locally. The horrors of a deleted file without a backup can ruin someones day.

Definitely familiarize yourself with the [`netlify-cms-backend-fs`][1] library before playing around with setting up this example.

Now that you are afraid 😱 to try this example, it can be easy to setup yourself. The example creates an Express server and uses the [`netlify-cms-backend-fs`][1] middleware. The example config and files are the same as the `netlify-cms` dev-test setup, only this example uses the `file-system` backend.

```bash
yarn or npm install
yarn server or npm run-script server
```

The middleware will output where your paths for reading and writing will come from

    netlify-cms-backend-fs (version: x.x.x)
    Root path is <root path>\netlify-cms-server-example
    Site path is <root path>\netlify-cms-server-example

Also let's you know where the endpoints are for the server

    Server listening at http://localhost:3000/
    API listening at http://localhost:3000/api
    CMS listening at http://localhost:3000/admin

### Add script and register in your CMS page

If you want to run your own server script, you could do the following on the CMS Page

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My CMS</title>
  </head>
  <body>
    <!-- Include the scripts that builds the page and powers Netlify CMS -->
  <script>
    /**
     * Global flag to initialize the CMS manually after registering backend and widgets.
     * In most cases, the CMS will render prior to the backend script load which could cause errors.
     * This will make sure the backend is registered prior to the loading of the CMS.
     */
    CMS_MANUAL_INIT = true; 
  </script>
    <script src="https://unpkg.com/netlify-cms@latest/dist/netlify-cms.js"></script>
    <script src="https://unpkg.com/netlify-cms-backend-fs@latest/dist/index.js"/>
    <script>
      CMS.registerBackend("file-system", FileSystemBackendClass)
      initCMS(); // Manually starts the CMS on the page after the registration of the backend
    </script>
  </body>
</html>
```

**_NOTE:_** If you have a CORS issue, because you are running the backend on a different port or location, see
this [issue and cors solution] by @Benos. Thanks for the heads up @Benos 😀.

[1]: https://github.com/ADARTA/netlify-cms-components/tree/master/packages/netlify-cms-backend-fs
[2]: https://github.com/ADARTA/netlify-cms-components/issues/7#issuecomment-462206937
