const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 3000

app.listen(PORT, () => {
    console.log('Server listening on PORT', PORT)
})

app.use('/api/emps', require('./routes/empRouter'))