const Express = require('express')
const app = Express()
const PORT = process.env.PORT || 3015

app.get('/', (req, res) => {
  res.json({
    success: true,
    msg: 'hello there'
  })
})

app.listen(PORT, () => {
  console.log('Server is up and running on port', PORT)
})