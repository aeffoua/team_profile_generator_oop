const EmployeeClass = require('./employee.js')
module. exports =class intern extends EmployeeClass{
    constructor(name, id,job, email,school){
        super(name, id,job, email)
        this.school= school
      
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return 'intern'
    }
    formatInfo(){
        return `
        <div class="card">
                <div class="cardheader">
                    <div class="name1">${this.name}</div>
                    <div class="job1">${this.job}</div>
                </div>
                <div class="list1">
                    <ul>
                        <li> ID:${this.id} </li>
                        <li> Emaiil: ${this.email}</li>
                        <li>github: ${this.school}</li>
                    </ul>
                </div>
            </div>
        `
    }
    
}