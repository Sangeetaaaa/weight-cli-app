const {Command, flags} = require('@oclif/command')
const exec = require('child_process').exec; 

class TpCommand extends Command {
  async run() {
    const {flags} = this.parse(TpCommand)
    let commit = flags.commit || ";>)"
    let remote = flags.remote 
    let cmd = `git init && git add . && git commit -m "${commit}" && git push -f origin master`
  
    if (remote) {
      cmd = `git init && git add . && git commit -m "${commit}" && git remote add origin ${remote} && git push -f origin master`
    }


exec(cmd, (error, stdout, stderr) => { 
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




TpCommand.flags = {
  commit: flags.string({char: 'm', description:'commit message'}),
  remote: flags.string({char: 'r', description:'add remote'}),
  help: flags.help({char: 'h'})
}


module.exports = TpCommand
