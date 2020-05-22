ESLint rule [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)'s auto-fix doesn't work when you have an unassigned import. This is an example of that.

See `index.ts`, specifically the following line:

```typescript
import {writeFileSync} from 'fs'; // this line is out of order but --fix can't fix it
```

Running `npm test` (which runs `eslint . --ext .ts --fix`) does not fix the ordering. Here is the output of `npm test`:

```
index.ts
  4:1  error  `fs` import should occur before import of `./another-thing`  import/order

✖ 1 problem (1 error, 0 warnings)
```