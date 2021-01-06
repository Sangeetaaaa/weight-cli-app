const {Command, flags} = require('@oclif/command')
const Weight = require('../api/weight')
const weight = new Weight()

class ShowCommand extends Command {
  async run() {
    const {flags} = this.parse(ShowCommand)
    let count = flags.count
    const record = weight.show(parseInt(count))
    for(let i = record.length - 1; i >= 0; i--) {
      this.log(`Date: ${record[i].date}, Weight: ${record[i].weight}`)
    }
  }
}

ShowCommand.description = `Describe the command here
...
Extra documentation goes here
`

ShowCommand.flags = {
  count: flags.string({char: 'c', description:'count of past records to be displayed'}),
  help: flags.help({char: 'h'})
}

module.exports = ShowCommand
