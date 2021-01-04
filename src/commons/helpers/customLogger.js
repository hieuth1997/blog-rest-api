import morgan from 'morgan';
import chalk from 'chalk';
export default morgan((tokens, req, res) => {
  return `[${chalk.gray(tokens['date'](req, res))}] ${chalk.blue(
    tokens.method(req, res),
  )} ${colorizeStatusCode(res.statusCode)} ${chalk.green(
    tokens.url(req, res),
  )} ${chalk.red(tokens['response-time'](req, res), 'ms')}`;
});
/**
 * change color for status code
 *@param {number} statusCode
 */
const colorizeStatusCode = (statusCode) => {
  return statusCode >= 400
    ? chalk.red(statusCode)
    : statusCode >= 300
    ? chalk.greenBright(statusCode)
    : chalk.blue(statusCode);
};
