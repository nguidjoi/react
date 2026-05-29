import 'colors';
import {writeFileSync} from 'node:fs'

console.log( 'Main Started'.green );

writeFileSync(Math.random().toString() ,'');

