import express from 'express'
import config from 'config'

const app = express()
const port = config.get('port')

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})