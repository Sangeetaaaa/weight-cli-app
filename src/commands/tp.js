const {Command, flags} = require('@oclif/command')
const exec = require('child_process').exec; 
var cmd=require('node-cmd'); 
const process = require('process'); 
// const file = require('./my.bat')
// const fixPath = require('fix-path');
// fixPath();


class TpCommand extends Command {
  async run() {
    const {flags} = this.parse(TpCommand)
  

exec(`touch sangeeta.txt`, (error, stdout, stderr) => { 
  if (error) { 
    console.error(`exec error: ${error}`); 
    return; 
  } 
  console.log(`stdout: No. of directories = ${stdout}`); 
  if (stderr!= "") 
  console.error(`stderr: ${stderr}`); 
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
