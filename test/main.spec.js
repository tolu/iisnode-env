const fs = require('fs')
const path = require('path')
const assert = require('assert')
const iisnodeEnv = require('../lib/main')

const filePath = path.join(__dirname, 'web.config')

assert.ok(iisnodeEnv.config instanceof Function)
assert.ok(iisnodeEnv.parse instanceof Function)

const config = iisnodeEnv.parse(fs.readFileSync(filePath, { encoding: 'utf8' }))
assert.ok(config instanceof Object)

assert.equal(config.Settings_string, 'https://sub.host.net')
assert.equal(config.Settings_bool, 'false')
assert.equal(config.Settings_number, '10e3')

assert.equal(typeof process.env.Settings_string, 'undefined')
assert.equal(typeof process.env.Settings_bool, 'undefined')
assert.equal(typeof process.env.Settings_number, 'undefined')

iisnodeEnv.load({ path: filePath })
assert.equal(process.env.Settings_string, 'https://sub.host.net')
assert.equal(process.env.Settings_bool, 'false')
assert.equal(process.env.Settings_number, '10e3')

console.log('\nTest finished without errors!\n')
