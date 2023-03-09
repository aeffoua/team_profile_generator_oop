module.exports= class Employee {
    constructor(id,name, job, email){
        this.name=name
        this.job= job
        this.email= email
        this.id=id
        
    }



// const jill= new Employee('jill',007,'jill@gmail')
// console.log(jill)

getName(){
    return this._name
}
getId(){
    return this.id
}
getEmail(){
    return this.email
}

// getRole(){
//     return this.role
// }
}