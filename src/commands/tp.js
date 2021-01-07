const {Command, flags} = require('@oclif/command')
const exec = require('child_process').exec; 
var cmd=require('node-cmd'); 
const process = require('process'); 


class TpCommand extends Command {
  async run() {
    const {flags} = this.parse(TpCommand)
  
   let commitmsg = ';>'

exec(`git init && git add . && git commit -m "${commitmsg}" && git push -f origin master`, (error, stdout, stderr) => { 
  if (error) { 
    console.error(`exc error: ${error}`); 
    return; 
  } 
  console.log(` ${stdout} Your code has been pushed :>)`); 
  if (stderr!= "") 
  console.error(`stderr: ${stderr}`); 
}); 
  }
}

TpCommand.description = `weight tp will push your code to github after automatically adding and commiting it`

// TpCommand.args = {
//   remoteName: arg.string({char: 'rn', description: 'add your remote'}),
// }

module.exports = TpCommand
