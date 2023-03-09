const inquirer = require('inquirer')
const fs = require('fs')
const Engineer= require('../lib/Engineer')
const Manager= require('../lib/Manager')
const Intern= require('../lib/Intern')
module.exports = class InquirerHelper {
    constructor(questions) {
        this.questions = questions

    }
    getQuestions() {
        return this.questions
    }
    async buildResponse(fileName) {
        let prompt = inquirer.createPromptModule()
        let responses = await prompt(this.questions)
        let isContinue= responses.continue
        delete responses.continue
        switch (responses.job){
            case 'manager':
                let manager= new Manager(responses.id, responses.name, responses.job, responses.email, responses.office)
                this.writeHtml(fileName,manager.formatInfo())

                break;
            case 'engineer':
                let engineer= new Engineer(responses.id, responses.name, responses.job, responses.email, responses.github)
                this.writeHtml(fileName,engineer.formatInfo())

                 break;

            case 'intern':
                let intern= new Intern(responses.id, responses.name, responses.job, responses.email, responses.school)
                this.writeHtml(fileName,intern.formatInfo())
                break;
            default:
                console.log('there is not case for this kind of employee')
                break;
        }
        
        return isContinue
    }
    writeHtml(fileName, employeeInfo) {
        try {
            let isFileExist= fs.existsSync(fileName)
            if (isFileExist) {
               let fileData= fs.readFileSync(fileName)
               fileData+='\n'+ employeeInfo
               fs.writeFileSync(fileName,fileData) 
            }
            else{
                
                fs.writeFileSync(fileName,employeeInfo)  
            }

        } catch (error) {
            console.log(error.message)

        }
    }
    writeHtmlHead(){
        return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .header { 
        margin-bottom: 1em;
        background-color: crimson;
        color: white;
        display: flex;

    }
    .title{
        text-align:center;
        margin-left:auto;
        margin-right:auto;
    }

    .container {
        display: flex;
    }

    .card {
        box-shadow: 5px 5px 5px black;
        margin-right: 20px;
    }

    .cardheader {

        background-color: rgb(11, 118, 218);
    }

    /* .name1{
    background-color: rgb(11, 118, 218);
} */
</style>

<body>
    <div class="header">
        <h1 class='title'> My Team</h1>
    </div>
    <div class="container">
    <br>
        `
    }
    writeHtmlFooter(){
        return `
        </div>


        </body>
        
        </html>
        `
    }
    endFile(fileName){
        let fileData= fs.readFileSync(fileName)
               fileData+='\n'+ this.writeHtmlFooter() 
         fs.writeFileSync(fileName,fileData)  
    }
    startFile(fileName){
        fs.writeFileSync(fileName,this.writeHtmlHead())  
    }
}
