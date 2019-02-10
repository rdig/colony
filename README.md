# `colony`

A Colony Network terminal client

## Usage

_NOTE: This is still in the prototype phase, and the CLI might change dramatically_

Commands expected by the `colony` script are a combination of `<context>` and `<action>`.

### Available context(s)

| Context  | Description |
| ------------- | ------------- |
| `network`  | Execute actions in the context of a specific Colony |

### Available action(s)

| Action  | Description |
| ------------- | ------------- |
| `list` or `ls` or `l`  | List the entries in the current context |
| `count` or `c` | Count the entries in the current context |

### Example(s)

#### Count the _Total number of available colonies_:
```bash
colony network count
```

#### List all _colonies_:
```bash
colony network list
```

## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn watch`

Start the build process, and re-builds the bundle every time the files get changed

### `yarn lint` and `yarn lint:fix`

Lint the `.js` files and fix any potential errors
