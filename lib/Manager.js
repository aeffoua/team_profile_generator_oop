const EmployeeClass= require('./Employee.js')
module.exports= class Manager extends EmployeeClass{
    constructor(id,name,job, email,office){
        super(id,name,job, email)
        this.office= office
        
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
                    <li>github: ${this.office}</li>
                </ul>
            </div>
        </div>
    `
}
}
