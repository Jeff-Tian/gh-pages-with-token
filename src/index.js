#!/usr/bin/env node

import ghPages from 'gh-pages'
import gitRemoteOriginUrl from 'git-remote-origin-url'
import meow from 'meow'
import path from 'path'

export const cli = meow(`
  Usage
    $ gh-pages-with-token

  Options
    -d, --dist <dist>        Base directory for all source files
    -s, --src <src>          Pattern to select which files should be published
    -x, --silent             Do not output the repository url
    -b, --branch <branch>    Name of the branch you'll be pushing to
    -o, --remote <name>      The name of the remote
    -m, --message <message>  Commit message
    -t, --dotfiles           Include dotfiles
    -a, --add                Only add, and never remove existing files
    -n, --no-push            Commit only (with no push)
`, {
  alias: {
    d: 'dist',
    s: 'src',
    x: 'silent',
    b: 'branch',
    o: 'remote',
    m: 'message',
    t: 'dotfiles',
    a: 'add',
    n: 'no-push',
  },
  default: {
    src: '**/*',
    branch: 'gh-pages',
    remote: 'origin',
    message: 'Updates',
  },
})

export const spawnGhPages = url => {
  const repo = url.replace(/(\/\/)/, `$1${process.env.GH_TOKEN}@`)
  const { flags } = cli

  ghPages.publish(path.join(process.cwd(), flags.dist), {
    repo,
    silent: !!flags.silent,
    branch: flags.branch,
    src: flags.src,
    message: flags.message,
    dotfiles: !!flags.dotfiles,
    add: !!flags.add,
    remote: flags.remote,
    push: !flags.noPush,
    logger: message => {
      process.stderr.write(`${message}\n`)
    },
  }, publishErr => {
    if ( publishErr ) {
      process.stderr.write(`${publishErr.message}\n`)

      return process.exit(1)
    }

    process.stderr.write('Published\n')

    return process.exit(0)
  })
}

if ( !cli.input.length ) {
  gitRemoteOriginUrl().then(spawnGhPages)
}
