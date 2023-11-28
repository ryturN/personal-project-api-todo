import express from "express"
import path from "path"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();


app.use(cookieParser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3032

app.use("/api", (req,res)=>{
    return res.status(202).json({
        status: 'success',
        message: 'connected!'
    })
})


app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})