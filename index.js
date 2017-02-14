module.exports = {
  correct: function correct (ssmlString, locale) {
    var and;
    // TODO: utlize a better solution for localization
    if (locale === 'de-DE') {
      and = 'und';
    } else {
      and = 'and';
    }
    return ssmlString.replace(/&/g, and).replace(/\*/g, '');
  }
};
