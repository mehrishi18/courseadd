const express=require("express");
const app=express();
app.use(express.json());
// courselist=[{

    
//         "courseTitle":"React",
//         "courseDescription":"React Course",
//         "CourseDuration":"4 months",
//         "CourseDate":"2022-05-06",
//         "CourseVenue":"online"

//     }]

// app.get('/getcourses',function(req,res){
//     res.send(courselist);
// })

// app.post('/addcourse',function(req,res){
//     console.log(req.body);
//     courselist.push(req.body);
//     res.send(courselist);
// })
app.listen(3000);
