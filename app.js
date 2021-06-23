const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 2725

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})