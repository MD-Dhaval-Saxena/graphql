import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema.js";
import { connectDB } from "./database/database.js";
import { User } from "./models/userModal.js";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.mongoUri;
connectDB(mongoURI);
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => "Hello World",
            users: async () => {
                const users = await User.find();
                return users;
            },
        },
    },
});
startStandaloneServer(server, {
    listen: {
        port,
    },
})
    .then(() => {
    console.log("server is running on: ", port + " in " + envMode + " Mode");
})
    .catch((err) => {
    console.log(err);
});
// const app = express();
//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev'))
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });
// your routes here
// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found'
//   });
// });
// app.use(errorMiddleware);
// app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
