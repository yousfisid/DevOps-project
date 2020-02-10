const { expect } = require('chai')
const configure = require('../src/configure')
const path = require('path')

describe('Configure', ()=> {
  it('load default json configuration file', ()=> {
    config = configure()
    expect(config.users.db_dir).to.equal(path.join(__dirname, '../db'))
  })
})
