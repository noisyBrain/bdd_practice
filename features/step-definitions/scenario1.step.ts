import { Given, When, Then } from '@cucumber/cucumber';

Given('que quiero aprender sobre {string}', function (string: any) {
 return string
});

When('escribo {string} en el sistema', function (string: any) {
 return string;
});

Then('el sistema me debe retornar una lista de los mejores libros relacionados', function () {
 return 'pending';
});
