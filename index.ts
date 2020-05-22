import {output} from './another-thing';

import './thing';
import {writeFileSync} from 'fs'; // this line is out of order but --fix can't fix it

writeFileSync(0, output);
