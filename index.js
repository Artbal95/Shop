const Express = require('express');
const path = require('path');
const app = Express();
const router = require('./router/router')

app.set('view engine', 'ejs');

app.use(Express.urlencoded({extended: true}));
app.use(Express.static(path.join(__dirname, 'public')));

app.use('/', router);


const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
})