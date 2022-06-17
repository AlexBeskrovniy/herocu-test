import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/test', (req, res) => {
    res.render('test.ejs');
});

app.listen(PORT, () => {
	console.log('Server has started...');
});