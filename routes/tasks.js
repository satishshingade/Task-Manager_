const express = require('express');
const router=express.Router();

const {getAllTasks,createTask,getTask,updateTask, deleteTask}=require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask);
// router.route('/').get((req,res)=>{
//     res.send('all items');                // this is pat of controllers
// })


router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports=router;