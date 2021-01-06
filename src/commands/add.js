const {Command, flags} = require('@oclif/command')
const Weight = require('../api/weight')
const weight = new Weight()

class AddCommand extends Command {
  async run() {
    const {args} = this.parse(AddCommand)
    weight.add(args.weight)
    this.log(`new weight ${args.weight} kg added`)
   }
}

AddCommand.description = `Describe the command here
...
Extra documentation goes here
`
// When someone is passing an argument it checks for this below things and displays it when needed
AddCommand.args = [{
  name: "weight",
  description: "current weight in kilograms; insert only the value, omit kg",
  required: true
}]

module.exports = AddCommand

