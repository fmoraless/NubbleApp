import {dateUtils} from '@utils';
import {sub, formatISO} from 'date-fns';

const MOCKED_NOW = 1732984496;
describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should be displayed in seconds if less than 1 minute ago', () => {
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });

    test('otro test', () => {
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });
  });
});
