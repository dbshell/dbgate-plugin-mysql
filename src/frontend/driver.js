const { driverBase } = require('dbgate-tools');
const Dumper = require('./Dumper');

/** @type {import('dbgate-types').SqlDialect} */
const dialect = {
  rangeSelect: true,
  stringEscapeChar: '\\',
  fallbackDataType: 'longtext',
  quoteIdentifier(s) {
    return '`' + s + '`';
  },
};


/** @type {import('dbgate-types').EngineDriver} */
const driver = {
  ...driverBase,
  dumperClass: Dumper,
  dialect,
  engine: 'mysql@dbgate-plugin-mysql',
  title: 'MySQL / MariaDB',
};

module.exports = driver;
