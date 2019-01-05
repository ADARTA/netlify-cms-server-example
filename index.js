const express = require('express')
const fsMiddleware = require('netlify-cms-backend-fs/dist/fs')
const app = express()
const port = 3000
const host = 'localhost'

app.use(express.static('example')) // root of our site
app.use('/cms/dist', express.static('./node_modules/netlify-cms/dist'))
app.use('/fs/dist', express.static('./node_modules/netlify-cms-backend-fs/dist'))

fsMiddleware(app) // sets up the /api proxy paths

app.listen(port, () => console.log(
    `
    Server listening at http://${host}:${port}/
    API listening at http://${host}:${port}/api
    CMS listening at http://${host}:${port}/admin
    `
))
