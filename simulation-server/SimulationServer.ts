import { createServer } from 'http';
import app from './Simulation';

/**
 * Create HTTP server.
 */
const port = '3000';
app.set('port', port);
const server = createServer(app);
server.listen(app.get('port'), () => {
    console.log('Simulation server listening on port ' + app.get('port'));
});
