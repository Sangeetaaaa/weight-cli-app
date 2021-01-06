const {Command, flags} = require('@oclif/command')
const { execFile } = require('child_process'); 
// const fixPath = require('fix-path');
// fixPath();

let cmd = 'cd ..'

class TpCommand extends Command {
  async run() {
    const {flags} = this.parse(TpCommand)
// exec('cd c/Users/DELL/Documents/Web\ Dev\ Projects/weight/', (error, stdout, stderr) => {
  const child = execFile('node', ['my.txt'],  
        (error, stdout, stderr) => { 
  if (error) { 
    throw error; 
  } 
  console.log(stdout); 
});   
  }
}

TpCommand.description = `Describe the command here
...
Extra documentation goes here
`

TpCommand.flags = {
  name: flags.string({char: 't', description: 'name to print'}),
}

module.exports = TpCommand
