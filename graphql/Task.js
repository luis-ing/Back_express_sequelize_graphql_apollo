import { gql } from 'apollo-server-express';
import { Task } from '../models/Task.js';

export const typeDefs = gql`
    type Query {
        hello: String
        getTasks: [task]
    }

    type task {
        id: ID!
        name: String
        done: Int
        projectId: Int
    }
`;

export const resolver = {
    Query: {
        hello: () => 'Hello world',
        getTasks: async () => {
            try {
                const tasks = await Task.findAll();
                console.log(tasks)
                return tasks;
            } catch (error) {
                console.log(error);
            }
        }
    },
};
