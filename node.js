import express, { json, urlencoded } from 'express';
import students from './helper';
import { noEmail, noStudent } from './errors';

const student = new students();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/student',(_req,res)=>{

	res.send(student.showStudent);

})

app.post('/student',(req,res) =>{
	
	if(req.body.email) {
		student.createStudent(req.body);
		res.send('Student successfully added');
	}else {

		noEmail();
	}
})

app.put('/student/:searchBy/:value',(req,res) => {
	for(let i = 0; i < student.length; i++) {
		console.log(req.params.searchBy)
		if(student[i][req.params.searchBy] == req.params.value) {
			for (let key in req.body) {
				console.log(student[i].key)
				student[i][key] = req.body[key];
			}
			
		} 
		res.send (`Student's info is updated`);
	}
	noStudent();
})

app.delete('/student/:email',(req,res) => {
	console.log(req.params.email)
	for(let i = 0; i < student.length; i++) {

		console.log(student[i])
		if(student[i].email == req.params.email) {
			delete student[i];
			
		} 
	}
	res.send (`Student information is removed`);
})


app.listen(3000);