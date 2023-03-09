const questions = require('./src/questions.js')
const InquirerHelper= require('./src/inquirerHelper.js')


async function init(){
    let inquirerHelper= new InquirerHelper(questions)
    let fileName= 'test.html'
    inquirerHelper.startFile(fileName)
let wantToContinue= await inquirerHelper.buildResponse(fileName)
while(wantToContinue===true){
    wantToContinue= await inquirerHelper.buildResponse(fileName)
}
inquirerHelper.endFile(fileName)
}
init()
