import { afterEach, expect, test, vi } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

test('prints the application name', async () => {
  const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  await import('../src/index.js');

  expect(log).toHaveBeenCalledWith('app-template CLI');
});
