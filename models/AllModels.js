import { Tablero_metodologia } from './Tablero_metodologia.js';
import { Contenido_columnas } from './Contenido_columnas.js';
import { Proyecto } from './Proyecto.js';
import { Tickets } from './Ticket.js';

const db = {};
const JoinTables = () => {
    db['Tablero_metodologia'] = Tablero_metodologia;
    db['Contenido_columnas'] = Contenido_columnas;
    db['Proyecto'] = Proyecto;
    db['Tickets'] = Tickets;
}

JoinTables();

export default db;
