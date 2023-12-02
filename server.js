import express from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"
import router from "./router/routes.js";
const app = express()

let corsOptions = {
    origin : ['https://todo-client-mqxn4q5g2q-as.a.run.app','http://localhost:3000'],
    credentials : true
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT || 2000

app.use('/api', router)


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})