const fs = require('fs')
const path = require('path')


const weightFile = path.join(__dirname, "weightTracker", "weights.json")

// __dirname + "/" + weightFile + "/" + weights.json

class Weight {



    constructor(){  
        this.weights = []
        let content = fs.readFileSync(weightFile, {encoding: 'utf-8'})
        if (content){
            this.weights = JSON.parse(content)
        }
    }


    add(weight) {
        let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        let newWeight = {
            date: date,
            weight: weight
        }
        newWeight = JSON.stringify(newWeight)
        this.weights.push(newWeight)
        this.saveWeight()
    }


    show(count) {
        let len = this.weights.length
        if (count && len>count){
            return this.weights.slice(len - count, len)
        }
        return this.weights
    }





    saveWeight() {
        if (!fs.existsSync(path.dirname(weightFile))){
            fs.mkdirSync(path.dirname(weightFile))
        }
        const records = JSON.stringify(this.weights)
        fs.writeFileSync(weightFile, records, {encoding: 'utf-8'})
    }
}


module.exports = Weight