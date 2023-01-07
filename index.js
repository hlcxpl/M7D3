const express = require('express')
const app = express()
const cors = require('cors')
const { verPost, agregarPost } = require('./consultas')


app.listen(3000, console.log('Servidor Ensendido'));
app.use(cors())
app.use(express.json())

app.get('/posts', async (req, res) => {
    const posts = await verPost();
    res.json(posts)
})

app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion } = req.body
    await agregarPost(titulo, img, descripcion);
    res.send('Post Agregado')
})
