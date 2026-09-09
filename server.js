const e=require("express")
const app=e()
app.use(e.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/smgoih")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((E)=>{
    console.log(`error is ${E}`)
})
const studentSchema= new mongoose.Schema({
    name:"String",
    age:"Number",
    course:"String"
})
const Student=mongoose.model("Students",studentSchema)

app.post("/post",(req,res)=>{
    const s=new Student({
        name:req.body.name,
        age:req.body.age,
        course:req.body.course
    })
    s.save()
    res.send("saved succeffully")
})
const port=9001
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
