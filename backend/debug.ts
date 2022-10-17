import books from './books';
import { join } from 'node:path/posix';
// import { AppDataSource } from './data-source';
import ocr from './ocr';
// import lac from './lac';
// import { LACResult } from '../types';

import { init } from './data-source';
import { get_article_id } from '../utils';
import { normalize } from './utils';
import { basename } from 'node:path';

(async () => {
  const ds = await init();
  const book = books.find(i => i.entity.id === 'a13a4008-5f3a-4f1d-8e0b-940a1c633cd5')!;
  const res = await book.parser(book.path, book.parser_option);
  console.log(res);

  debugger;
})();