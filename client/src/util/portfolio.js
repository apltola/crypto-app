export function getCurrencySymbol(currency) {
  switch (currency) {
    case 'eur':
      return '€';
    case 'usd':
      return '$';
    default:
      return '';
  }
}

export function formatNumber(p) {
  let val = p.toString();
  val = val.replace('.', ',');
  if (val.split(',')[0].length >= 4) {
    const splitted = val.split(',');
    const start = splitted[0];
    const end = splitted[1];
    let slicePoint = start.length - 3;
    val = `${start.slice(0, slicePoint)} ${start.slice(
      slicePoint,
      start.length
    )},${end}`;
  }

  return val;
}
