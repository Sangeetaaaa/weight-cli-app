const {Command, flags} = require('@oclif/command')

class AddRemoteCommand extends Command {
  async run() {
    const {flags} = this.parse(AddRemoteCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\DELL\\Documents\\Web Dev Projects\\weight\\weight\\src\\commands\\addRemote.js`)
  }
}

AddRemoteCommand.description = `Describe the command here
...
Extra documentation goes here
`

AddRemoteCommand.args = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AddRemoteCommand
