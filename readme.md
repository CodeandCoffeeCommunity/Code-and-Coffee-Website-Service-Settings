![Code and Coffee Logo](./readme/code-and-coffee-logo.png)

# Code and Coffee Service Settings

A repo to manage the settings of the Code and Coffee Service.  
  
Includes a validation system to ensure that the settings are always valid and to reduce the change of errors caused by misconfiguration.

To update the settings see Updating Settings Workflow in [workflow.md](./workflow.md).

For a description of all the settings see [settings.md](./settings/settings.md).

## Technologies

**_[NodeJS](https://nodejs.org/en)_** - Used to run javascript that does the settings validations.  
**_[Typescript](https://www.typescriptlang.org/)_** - Adds typing to the code to make it easier to read and maintain.  
**_[TS-Node](https://www.npmjs.com/package/ts-node)_** - Used to run typescript code in node without having to transpile.  
**_[prettier](https://prettier.io/)_** - Used to organize the code to make it easier to read and maintain.  
**_[ESLint](https://eslint.org/)_** - Used to enforce code standards to make it easier to read and maintain.  
**_[React](https://reactjs.org/)_** - Used to build the web components. Makes it easier to build interactive and reactive components.  
**_[GitHub Actions](https://github.com/features/actions)_** - The server that runs the validation code.  
**_[GitHub](https://github.com)_** - Used to store the code and manage the project.  
**_[JSON Type Definition](https://jsontypedef.com/)_** - Used to create schemas for the settings to validate against.  
**_[ajv](https://ajv.js.org/)_** - Used to validate the settings against the schemas.

## Directories

### [Settings](./settings)

**./settings**

Directory containing the settings for the Code and Coffee Service.

### [Schemas](./schemas)

**./schemas**

Directory containing the schemas for the settings.

### [Readme Resources](./readme)

**./readme**

All the resources that are used in the readme.md file.

### [Github Configuration](./.github)

**./readme**

Configuration for the github repo, mainly the automatic workflow that triggers validation on commit.