function Student(first,last){
    this.first=first;
    this.last=last;
    this.courses=[];
}

Student.prototype.name = function ()
{return `${this.first} ${this.last}`;}

Student.prototype.enroll = function(Course){
    if (!this.courses.includes(Course)){
        this.courses.push(Course);
        Course.students.push(this);
        return `${this.first} is now enrolled in ${Course.name}`;
    }
}

Student.prototype.courseLoad= function(){
    let courseLoad = {};

    this.courses.forEach(course=>{
        let dept = course.department;
        // if the dept key exist, then the val is the value of the key, if dept doesn't exist, then set the val to 0
        courseLoad[dept]=courseLoad[dept]||0;
        courseLoad[dept] += course.credits;
    });
    return courseLoad;
}

function Course(name,department,credits){
    this.name=name;
    this.department=department;
    this.credits=credits;
    this.students=[];
}

Course.prototype.addStudent= function(Student){
    Student.enroll(this);
}

student1=new Student('Eric','Thompson');
console.log(student1.name());

course1=new Course('Eng 101','English',4);
course2=new Course('Eng 201','English',4);

console.log(student1.enroll(course1));
console.log(student1.enroll(course2));
console.log(student1.courseLoad())