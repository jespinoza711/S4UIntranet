var express = require('express')
var config = require('./config')
var marko =  require('marko')
var app = express()

//view Engine Marko
app.engine('marko',function(filepPath,options,callback){
	marko.load(filepPath).render(options,function(err,output){
		callback(null,output)
	})
})

app.set('views',__dirname + '/views')
app.set('view engine','marko')
//end view Engine


app.get('/',function(req,res){
	res.render('hola',{ name:'julio' })
})

app.get('/user',function(req,res){
	res.render('usuario/user',null)
})


app.listen(config.port,function(){
	console.log("Escuchando")
})