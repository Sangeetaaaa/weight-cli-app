const {Command, flags} = require('@oclif/command')
const exec = require('child_process').exec;


class TpCommand extends Command {
  async run() {
    const {flags} = this.parse(TpCommand)
  

exec(`git init && git add . && git commit -m "The Intial Commit" && git push -f origin master`, (error, stdout, stderr) => { 
  if (error) { 
    console.error(`exc error: ${error}`); 
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
module.exports = TpCommand
