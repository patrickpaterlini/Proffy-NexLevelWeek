// Servidor
const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses,
    pageTeacherRegister,
    saveClasses 
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar arquivos estáticos (css, scripts, imagens)
server

// receber os dados do req.body
.use(express.urlencoded({ extended: true }))

// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/teacher-register", pageTeacherRegister)
.post("/save-classes", saveClasses)

// start do servidor
.listen(5500)