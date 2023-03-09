
module.exports = [

    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'what is your ID?',
    },
    {
        type: 'list',
        name: 'job',
        message: 'what is your role in the team?',
        choices: ['manager','engineer','intern'],
        default:'manager'
       


    },
    {
        type: 'number',
        name: 'office',
        message:'What is your office number?',
        when:(answer)=>answer.job==='manager'
       


    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Give us your github URL:',
        when:(answer)=>answer.job==='engineer'
        

    },
    {
        type: 'input',
        name: 'school',
        message: "what is your school 's name?",
        when:(answer)=>answer.job==='intern'

    },
    {
        type: 'confirm',
        name: 'continue',
        message: "do you want to continue",
        
      

    }
];


 
