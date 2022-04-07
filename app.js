
const express = require('express');
const app = express();

const tasks=require('./routes/tasks');
const connectDB=require('./db/connect')
const port =3000;

require('dotenv').config()

app.use(express.static('public'));

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log('server is running'));
    }
    catch(error){
        console.log(error);
    }
}
// middleware 

start()
app.use(express.json())


// routes
// app.get('/hello',(req,res)=>{
//     res.send("task manager");
// });

app.use('/api/v1/tasks',tasks);



// app.get('/api/v1/tasks')       - get all the tasks
// app.post('/api/v1/tasks/)      - create a new task
// app.get('/api/v1/tasks/:id')   - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') -delete task



