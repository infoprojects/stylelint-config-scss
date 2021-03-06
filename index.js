'use strict';

module.exports = {
  extends: 'stylelint-config-recommended-scss',
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  reportDescriptionlessDisables: true,
  defaultSeverity: 'error',
  rules: {
    'no-descending-specificity': null,
    'number-leading-zero': 'always'
  }
};
