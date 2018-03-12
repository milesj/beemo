# TypeScript Driver

Provides [TypeScript](https://github.com/microsoft/typescript) support.

## Usage

In your configuration module, install the driver and TypeScript. Create a file at
`configs/typescript.js` in which to house your TypeScript configuration.

In your consuming project, enable the driver by adding `typescript` to your `drivers` config.

```json
{
  "beemo": {
    "module": "@<username>/build-tool-config",
    "drivers": ["typescript"]
  }
}
```