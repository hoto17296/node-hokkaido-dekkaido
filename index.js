function hokkaido(str) {
  if ( str.match(/(北海道|ほっかいどう|hokkaido)/i) ) {
    return 'でっかいどー！！！';
  } else {
    return 'でっかくないどう...';
  }
}

module.exports = hokkaido;
