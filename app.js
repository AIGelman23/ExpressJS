
const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({
  layoutsDir: 'views/layouts', 
  defaultLayout: 'main-layout', 
  extname: 'hbs'})); // express handlebars unlike pug is not built in
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes); // router object being exported
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
 // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}); 


app.listen(3000); 
