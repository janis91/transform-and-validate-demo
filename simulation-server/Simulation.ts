import { json, urlencoded } from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as logger from 'morgan';

/**
 * Create Express server.
 */
const app = express();

const heroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
];

const invalidHeroes = [ ...heroes, { id: '21' } ];

/**
 * Express configuration.
 */
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(logger('dev', { skip: (req) => req.path === '/favicon.ico' }));

/**
 * API
 */
app.get('/api/heroes', (req, res) => {
        if (req.query.name !== undefined) {
                res.json(heroes.filter((h) => h.name.includes(req.query.name)));
        } else if (req.query.id !== undefined) {
                res.json(heroes.find((h) => h.id.toString() === req.params.id));
        } else {
                res.json(heroes);
        }
});
app.get('/api/heroes/:id', (req, res) => {
        res.json(heroes.find((h) => h.id.toString() === req.params.id));
});

app.get('/api/invalid-heroes', (req, res) => {
        res.json(invalidHeroes);
});
app.get('/api/invalid-heroes/:id', (req, res) => {
        res.json(invalidHeroes.find((h) => h.id.toString() === req.params.id));
});

export default app;
