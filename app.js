const express = require('express')
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath))

app.listen(3001, function() {
    console.log("server funcionando");
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
