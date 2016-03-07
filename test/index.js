import { cli, spawnGhPages } from '../src'
import test from 'ava'

test('spawnGhPages', async t => {
  t.ok(typeof spawnGhPages === 'function', 'spawnGhPages is not a function')
  t.ok(spawnGhPages.length === 1, 'spawnGhPages does not take 1 argument')
})

test('cli', async t => {
  const expected = [
    'input',
    'flags',
    'pkg',
    'help',
    'showHelp',
  ]

  t.ok(typeof cli === 'object', 'cli is not an object')
  t.same(Object.keys(cli), expected, 'cli does not contain expected keys')
})
