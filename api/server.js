const express = require('express')
const app = express()
app.use(express.json())
const path = require('path')

app.use('/api/v1/test', (req, res, next) => {
    res.status(200).json({ name: 'John Doe', message: 'Hello World' });
});

app.use(express.static('client'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})