


const resolvers = {
    Query: {
        hello: () => 'Hello world',
        allClasification: () => {
            return prisma.clasificacion.findMany();
        },
        allUsuario: () => {
            return prisma.usuario.findMany();
        },
        allPrioridad: () => {
            return prisma.prioridad_tareas.findMany()
        },
        allTareas: () => {
            return prisma.tareas.findMany({
                include: {
                    clasificacion: true,
                    prioridad_tareas: true,
                }
            })
        }
    },

    Mutation: {
        addUsuario: async (root, arg) => {
            console.log(arg);
            const insert_usuario = await prisma.usuario.create({
                data: arg//{ nombre_usuario: 'arg', contrasena: '12345a' }, //funciona 
            })
            return insert_usuario;
        },
        updateUsuario: async (_, { idusuario, data }) => {
            const { nombre, apellidos, alias,contrasena, estatus_activo } = data;
            console.log("idusuario= ", idusuario, "data= ", nombre);

            const upd_user = await prisma.usuario.update({
                where: { idusuario: parseInt(idusuario) },
                data: { nombre, apellidos, alias, contrasena , estatus_activo }
            })
            return upd_user;
        }
    }
};

module.exports = resolvers;