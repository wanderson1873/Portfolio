const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

// Rota
server.get("/", function(req, res) {
    const about = {
        avatar_url: 'https://avatars2.githubusercontent.com/u/65118827?s=460&u=7c508a738d926eb0f20fdef0502bd2aab874f51c&v=4',
        name: 'Wanderson Oliveira',
        role: 'Web Developer',
        description: 'Estudante da <a href="https://origamid.com" target="_black">Origamid</a> e da <a href="https://rockseat.com.br" target="_black">Rockseat</a>. Futuro Desenvolvedor Full-Steack.',
        links: [
            {name: 'GitHub', url: 'https://github.com/wanderson1873'},
            {name: 'Twitter', url: 'https://twitter.com/wanderson1873'},
            {name: 'Linkedin', url: 'https://www.linkedin.com/in/wanderson1873/'}
        ]
    }

    return res.render("about", { about })
})

// Rota
server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { itens: videos })
})

// starting server
server.listen(5000, function() {
    console.log("server is running!!")
})