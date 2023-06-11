import { strict as assert } from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

import { BookService } from '../../src/services/book.service';

Given('que quiero aprender sobre tdd', function () {
  this.service = new BookService()
});

When('escribo {string} en el sistema', function (string: string) {
  this.result = this.service.find(string);
  return this.result
});

Then('el sistema me debe retornar una lista de los mejores libros relacionados', function () {
  assert.deepStrictEqual(this.result, [{ name: 'clean tdd' }])
});
