import colors from 'colors';

function hokkaido(str) {
  if ( str.match(/(北海道|ほっかいどう|hokkaido)/i) ) {
    return colors.rainbow('でっかいどー！！！');
  } else {
    return 'でっかくないどう...';
  }
}

module.exports = hokkaido;
export default hokkaido;
