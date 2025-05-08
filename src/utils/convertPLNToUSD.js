export const convertPLNToUSD = (PLN) => {

  if (typeof PLN === 'undefined' || typeof PLN === 'string') return NaN;
  else if (typeof PLN !== 'number') return 'Error';

  const PLNtoUSD = PLN > 0 ? PLN / 3.5 : 0;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}