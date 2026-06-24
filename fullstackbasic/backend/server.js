
import express from 'express';

const app = express();

app.get('/', async (req, res) => {
        res.send('server is ready')
});

app.get('/api/jokes', async (req, res) => {
    const jokes= [
        {
            id: 1,
            title: 'joke1',
            content: 'this is a joke1'
        },
        {
            id: 2,
            title: 'joke2',
            content: 'this is a joke2'
        },
        {
            id: 3,
            title: 'joke3',
            content: 'this is a joke3'
        },
        {
            id: 4,
            title: 'joke4',
            content: 'this is a joke4'
        },
        {
            id: 5,
            title: 'joke5',
            content: 'this is a joke5'
        }
    ];
    res.send(jokes);
})

const port= process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});
