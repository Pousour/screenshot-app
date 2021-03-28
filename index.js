const express = require('express')
const app = express()
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({}))
const screenshot = require('./screenshot')

//app.get('/', (req, res) => res.status(200).json({ status: 'ok' }))

app.get('/screenshot', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const buffer = await screenshot(url)
    res.setHeader('Content-Disposition', 'attachment; filename="screenshot.png"')
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  })()
})

app.post('/api', (request, response) => {
  console.log(request.body)
})

 
