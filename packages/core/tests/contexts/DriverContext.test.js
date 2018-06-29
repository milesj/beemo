import DriverContext from '../../src/contexts/DriverContext';
import Driver from '../../src/Driver';

describe('Context', () => {
  let context;

  beforeEach(() => {
    context = new DriverContext({}, new Driver());
  });

  describe('constructor()', () => {
    it('sets args', () => {
      context = new DriverContext({ foo: true }, {});

      expect(context.args).toEqual({ foo: true });
    });

    it('sets driver', () => {
      const driver = new Driver();
      driver.name = 'bar';

      context = new DriverContext({}, driver);

      expect(context.primaryDriver).toBe(driver);
      expect(context.driverName).toBe('bar');
    });
  });

  describe('addDriverDependency()', () => {
    it('adds a driver', () => {
      expect(context.drivers).toEqual([]);

      const driver = new Driver();

      context.addDriverDependency(driver);

      expect(context.drivers).toEqual([driver]);
    });

    it('errors when not a driver', () => {
      expect(() => {
        context.addDriverDependency(true);
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('findConfigByName()', () => {
    it('returns nothing if not found', () => {
      expect(context.findConfigByName('foo.js')).toBeUndefined();
    });

    it('returns path if found', () => {
      context.configPaths.push('/some/path/foo.js');

      expect(context.findConfigByName('foo.js')).toBe('/some/path/foo.js');
    });

    it('only checks file name', () => {
      context.configPaths.push('/some/path/foo.js/other/file.js');

      expect(context.findConfigByName('foo.js')).toBeUndefined();
    });
  });
});
