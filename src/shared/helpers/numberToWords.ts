const numbersToWords: Record<number, string> = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
};

export function convertNumberToWords(number: number) {
  if (number in numbersToWords) return numbersToWords[number];

  let words = '';

  if (number >= 100) {
    words += convertNumberToWords(Math.floor(number / 100)) + ' hundred';
    number %= 100;
  }

  if (number > 0) {
    if (words !== '') words += ' and ';

    if (number < 20) {
      words += numbersToWords[number];
    } else {
      words += numbersToWords[Math.floor(number / 10) * 10];
      if (number % 10 > 0) {
        words += '-' + numbersToWords[number % 10];
      }
    }
  }

  return words;
}
