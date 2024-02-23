/* global jest, beforeEach, afterAll */

const process = require(`process`);

jest.retryTimes(2, {logErrorsBeforeRetry: true});

const OLD_ENV = process.env;
// To ensure we test the default behavior, we must remove these env vars
// in case the local machine already set these values.
const processEnv = Object.fromEntries(
  Object.entries(process.env).filter(
    ([key]) => key !== `FORCE_COLOR` && !key.startsWith(`COREPACK_`),
  ),
);

beforeEach(() => {
  process.env = {...processEnv};
});

afterAll(() => {
  process.env = OLD_ENV;
});
