import {stringUtils} from '@utils';

test('capitalizeFirstLetter', () => {
  // escribir test
  stringUtils.capitalizeFirstLetter('Ana maria'); // Ana Maria
  stringUtils.capitalizeFirstLetter('ANA MARIA'); // Ana Maria
  stringUtils.capitalizeFirstLetter('maria'); // Maria

  const nombre = stringUtils.capitalizeFirstLetter('Ana maria');

  expect(nombre).toBe('Ana Maria');
});
