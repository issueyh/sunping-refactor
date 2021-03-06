const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 2725

app.engine('hbs', exphbs({ 
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: 'views/partials'
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`The Express server is running on http://localhost:${port}`)
})