const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url)
  const pathname = parsedUrl.pathname
  const parsedQuery = qs.parse(parsedUrl.query)
  if (pathname === '/api') {
    const data = { fruits: ['apple', 'banana', 'orange'] }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/javascript')
    res.end(`${parsedQuery.cb}(${JSON.stringify(data)})`)
  } else {
    res.statusCode = 404
    res.end('page not found')
  }
})

server.listen('3000', 'localhost', () => {
  console.log('JSONP demo server running at port 3000')
})