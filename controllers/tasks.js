const Task=require('../models/models')
const asyncWrapper=require('../middleware/async')
const {createCustomError}=require('../errors/customs-error')
const getAllTasks= asyncWrapper(async(req,res)=>{
        const tasks=await Task.find({}) 
        res.status(200).json({tasks})    
    })
const createTask=asyncWrapper(async(req,res)=>{
        const task=await Task.create(req.body)
        task.save()
        res.status(201).json({task})
    })
const getTask=asyncWrapper(async(req,res,next)=>{
        const{id:taskID}=req.params  
        const task= await Task.findOne({_id:taskID}) 
        res.status(200).json({task})
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,))
        }
    })
const updateTask=asyncWrapper(async(req,res)=>{
        const {id:taskID}=req.params;

        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true})
        res.status(200).json({id:taskID,data:req.body})
})
const deleteTAsk=asyncWrapper(async(req,res)=>{ 
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({
            _id:taskID
        })
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,))
        }})

module.exports={
    getAllTasks,
    createTask, 
    getTask,
    updateTask,
    deleteTAsk
}