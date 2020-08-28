# Snippets

## Below is a list of all available snippets and the triggers of each one. The ⇥ means the TAB key

### Import and export

***imp→*** _imports entire module_ `import fs from 'fs';`
***imn→*** _imports entire module without module name_ `import 'animate.css'`
***imd→*** _imports only a portion of the module using destructing_ `import {rename} from 'fs';`
***ime→*** _imports everything as alias from the module_ `import * as localAlias from 'fs';`
***ima→*** _imports only a portion of the module as alias_ `import { rename as localRename } from 'fs';`
***rqr→*** _require package_ `require('');`
***req→*** _require package to const_ `const packageName = require('packageName');`
***mde→*** _default module.exports_ `module.exports = {};`
***env→*** _exports name variable_ `export const nameVariable = localVariable;`
***enf→*** _exports name function_ `export const log = (parameter) => { console.log(parameter);};`
***edf→*** _exports default function_ `export default function fileName (parameter){ console.log(parameter);};`
***ecl→*** _exports default class_ `export default class Calculator { };`
***ece→*** _exports default class by extending a base one_ `export default class Calculator extends BaseClass { };`

### Class helpers

***con→*** _adds default constructor in the class_ `constructor() {}`
***met→*** _creates a method inside a class_ `add() {}`
***pge→*** _creates a getter property_ `get propertyName() {return value;}`
***pse→*** _creates a setter property_ `set propertyName(value) {}`

### Various methods

***fre→*** _forEach loop in ES6 syntax_ `array.forEach(currentItem => {})`
***fof→*** _for ... of loop_ `for(const item of object) {}`
***fin→*** _for ... in loop_ `for(const item in object) {}`
***anfn→*** _creates an anonymous function_ `(params) => {}`
***nfn→*** _creates a named function_ `const add = (params) => {}`
***dob→*** _destructing object syntax_ `const {rename} = fs`
***dar→*** _destructing array syntax_ `const [first, second] = [1,2]`
***sti→*** _set interval helper method_ `setInterval(() => {});`
***sto→*** _set timeout helper method_ `setTimeout(() => {});`
***prom→*** _creates a new Promise_ `return new Promise((resolve, reject) => {});`
***thenc→*** _adds then and catch declaration to a promise_ `.then((res) => {}).catch((err) => {});`

### Console methods

***cas→*** _console alert method_ `console.assert(expression, object)`
***ccl→*** _console clear_ `console.clear()`
***cco→*** _console count_ `console.count(label)`
***cdb→*** _console debug_ `console.debug(object)`
***cdi→*** _console dir_ `console.dir`
***cer→*** _console error_ `console.error(object)`
***cgr→*** _console group_ `console.group(label)`
***cge→*** _console groupEnd_ `console.groupEnd()`
***clg→*** _console log_ `console.log(object)`
***clo→*** _console log object with name_ `console.log('object :>> ', object);`
***ctr→*** _console trace_ `console.trace(object)`
***cwa→*** _console warn_ `console.warn`
***cin→*** _console info_ `console.info`
***clt→*** _console table_ `console.table`
***cti→*** _console time_ `console.time`
***cte→*** _console timeEnd_ `console.timeEnd`
