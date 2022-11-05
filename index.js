import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Iniciamos express
const app = express();

import { typeDefs as TableroMetodologiaTypeDefs, resolver as TableroMetodologiaResolvers } from './graphql/Tablero_metodologia.js';
import { typeDefs as ContenidoColumnasTypeDefs, resolver as ContenidoColumnasResolvers } from './graphql/Contenido_columnas.js';
import { typeDefs as ProyectoTypeDefs, resolver as ProyectoResolvers } from './graphql/Proyecto.js';
import { typeDefs as TicketTypeDefs, resolver as TicketResolvers } from './graphql/Ticket.js';
import { typeDefs as UsuarioTypeDefs, resolver as UsuarioResolvers } from './graphql/Usuario.js';
import { typeDefs as PrioridadTypeDefs, resolver as PrioridadResolvers } from './graphql/Prioridad.js';

app.set('port', process.env.PORT || 4000);

const Query = `
    scalar DateTime
`;

const schema = makeExecutableSchema({
    typeDefs: [
        Query,
        TableroMetodologiaTypeDefs,
        ContenidoColumnasTypeDefs,
        ProyectoTypeDefs,
        TicketTypeDefs,
        UsuarioTypeDefs,
        PrioridadTypeDefs,
    ],
    resolvers: [
        TableroMetodologiaResolvers,
        ContenidoColumnasResolvers,
        ProyectoResolvers,
        TicketResolvers,
        UsuarioResolvers,
        PrioridadResolvers,
    ]
});

async function start() {

    const apolloServer = new ApolloServer({
        schema,
        csrfPrevention: true,
        cache: 'bounded'
    })

    // La funcion "start()" inicializa las funciones de apollo
    await apolloServer.start()

    // 
    apolloServer.applyMiddleware({ app })

    app.use('*', (req, res) => res.status(404).send('Not found'))

    // Configuración tipica de servidor express
    app.listen(app.get('port'), () => {
        console.log(`🚀 Servidor listo en http://localhost:${app.get('port')}/graphql`)
    })
}

start();