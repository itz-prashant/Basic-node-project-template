const express=  require('express')

const {serverConfig, Logger} = require('./config')
const apiroutes = require('./routes')

const app = express()

app.use("/api", apiroutes)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started sucessfully on Port : ${serverConfig.PORT}`);
    Logger.info("Sucessfully started server", {})
})

