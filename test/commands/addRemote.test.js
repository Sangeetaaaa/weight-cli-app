const {expect, test} = require('@oclif/test')

describe('addRemote', () => {
  test
  .stdout()
  .command(['addRemote'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['addRemote', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
