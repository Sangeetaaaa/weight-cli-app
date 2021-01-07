weight
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/weight.svg)](https://npmjs.org/package/weight)
[![Downloads/week](https://img.shields.io/npm/dw/weight.svg)](https://npmjs.org/package/weight)
[![License](https://img.shields.io/npm/l/weight.svg)](https://github.com/weight/weight/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g weight
$ weight COMMAND
running command...
$ weight (-v|--version|version)
weight/0.0.0 win32-x64 node-v12.19.0
$ weight --help [COMMAND]
USAGE
  $ weight COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`weight add WEIGHT`](#weight-add-weight)
* [`weight addRemote`](#weight-addremote)
* [`weight hello`](#weight-hello)
* [`weight help [COMMAND]`](#weight-help-command)
* [`weight show`](#weight-show)
* [`weight tp REMOTE`](#weight-tp-remote)

## `weight add WEIGHT`

Describe the command here

```
USAGE
  $ weight add WEIGHT

ARGUMENTS
  WEIGHT  current weight in kilograms; insert only the value, omit kg

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/add.js](https://github.com/weight/weight/blob/v0.0.0/src/commands/add.js)_

## `weight addRemote`

Describe the command here

```
USAGE
  $ weight addRemote

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/addRemote.js](https://github.com/weight/weight/blob/v0.0.0/src/commands/addRemote.js)_

## `weight hello`

Describe the command here

```
USAGE
  $ weight hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/weight/weight/blob/v0.0.0/src/commands/hello.js)_

## `weight help [COMMAND]`

display help for weight

```
USAGE
  $ weight help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `weight show`

Describe the command here

```
USAGE
  $ weight show

OPTIONS
  -c, --count=count  count of past records to be displayed
  -h, --help         show CLI help

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/show.js](https://github.com/weight/weight/blob/v0.0.0/src/commands/show.js)_

## `weight tp REMOTE`

weight tp will push your code to github after automatically adding and commiting it

```
USAGE
  $ weight tp REMOTE

ARGUMENTS
  REMOTE  Add a remote as an argument with weight tp
```

_See code: [src/commands/tp.js](https://github.com/weight/weight/blob/v0.0.0/src/commands/tp.js)_
<!-- commandsstop -->
