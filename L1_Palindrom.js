// Для начал нужно проверить равенство двух строк. Для этого создадим функцию, в которой уберем у строки пробелы
// и переведем все символы в строчные символы.

function Palindrome(string) {
  // Очищение строки от пробелов и заглавных букв: 1
  let editedString = string.replaceAll(' ', '').toLowerCase();
  // Возвращаем результат сравнения исходной строки и перевернутой строки:
  return editedString === editedString.split('').reverse().join('');
}

// Создаем цикл для проверки совпадения символов с противоположных сторон:
function CycleForPalindrom(string) {
  // Очищаем строку от пробелов:
  let cleanedString = string.replaceAll(' ', '').toLowerCase();
  let length = cleanedString.length;
  //До половины строки идёт цикл, сравнивая символ на текущей позиции с символом на той же позиции, но с конца строки
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Если соответствующие символы не равны, значит строка не является палиндромом
    if (cleanedString[i] !== cleanedString[length - i - 1]) {
      return false;
    }
  }
  // Если каждая пара символов равна, значит строка является палиндромом.
  return true
}
