const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(cors())

const rappers = {
    'kanye west': {
        'age': 44,
        'birthName': 'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia, US',
    },

    'eminem': {
        'age': 48,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri, US'
    },
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper' : {
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthLocation': 'Chicago, Illinois, US'
    }
}

// Routes
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
    res.render('home');
})


app.get('/api/rappers/:rapperName', (req, res)=>{
    const rapperName = req.params.rapperName.toLowerCase()
    console.log(rapperName)

    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    }
    else {
        const unknown = {
            'age': 'unknown',
            'birthName': 'unknown',
            'birthLocation': 'unknown'
        }
        res.json(unknown)
    }
    
})

app.get('/api/:rapper', (req, res)=>{
    const unknown = {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    res.json(unknown)
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})