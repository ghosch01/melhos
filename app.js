const express = require('express');

const app = express();

app.set('view engine', 'pug')
app.set('views', './src/views')
app.use(express.static("src"));


app.get('/', (req, res) => {
    res.render('index', { title: 'Home'})
})
app.listen(4000, ()=>{
    console.log("Server listening on port 4000")
})
