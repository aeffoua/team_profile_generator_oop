const EmployeeClass= require('./Employee.js')
module.exports= class Engineer extends EmployeeClass{
    constructor(id,name,job, email,github){
        super(id,name,job, email)
        this.github= github
        
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
                    <li>github: ${this.github}</li>
                </ul>
            </div>
        </div>
    `
}
}
