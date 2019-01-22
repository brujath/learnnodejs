const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorHander = require('./controllers/errorController');

app.set('view engine', 'ejs');
app.set('views', 'views');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  errorHander.handleError(req, res, next);
});

app.listen(3000);
