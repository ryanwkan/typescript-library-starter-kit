# typescript-library-starter-kit

This starter kit contains a basic Typescript project for creating a Javascript library

# Prerequisites

Install NodeJs
``` 
brew install node
```

Install Typescript
``` 
npm install typescript -g
```
Install Typescript lint
```
npm install tslint
```

Install dependencies:
```
npm install
```
# Tests

Includes 
- Joi (https://github.com/hapijs/joi) for object schema validation and 
- Rosie (https://github.com/rosiejs/rosie) for test events generation

To run:
```
npm test
```
To check coverage:
```
npm run test:coverage-check
```

# Build Steps

This starter kit uses Rollup (https://rollupjs.org/guide/en) for module bundling

Build library. NOTE: Update test coverage requirements
```
npm run build
```

This will build the 

Publish library
```
npm publish

```
This will publish a CommonJS module and a ES module in the `./dist` directory

# Library Usage

CommonJS:
```
const Test = require('typescript-library-starter-kit').Test

Test.test(payload)
```

ES:
```
import { Test } from 'typescript-library-starter-kit'

Test.test(payload)
```


# License

This project is released under The Unlicense, your free to copy this and do what you like.