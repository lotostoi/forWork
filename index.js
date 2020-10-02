const path = require('path')
const fs = require('fs')

const fileForWrite = path.join(__dirname, '/files/new.log')

const files = fs.readdirSync(path.join(__dirname, 'files'))

fs.writeFileSync(fileForWrite, '')


for (let f of files) {

    if (f !== 'new.log') {
        let text = fs.readFileSync(path.join(__dirname, `/files/${f}`), { encoding: "utf8" })
        let newFiel = text.split('\n').filter((el, i) => i === 0 || i % (60) === 0).join('\n')
        fs.appendFileSync(fileForWrite, `${newFiel}`);
    }
}


let text = fs.readFileSync(fileForWrite, { encoding: "utf8" })

let newString = text.replace(/\r\r/, '\r').split('\n').filter(s=>s!=='\r').join('\n') 


fs.writeFileSync(fileForWrite, newString)



