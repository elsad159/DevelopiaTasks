const sentence =
  "Verilmiş istənilən cümlənin daxilindəən çox istifadə olunan simvolu tapan proqram yazmaq.";

const maxUsedSymbol = (string) => {
  // Strinqdəki hər simvolu yadda saxlamaq üçün chartCount obyekti yaratdım

  const charCount = {};

  // Hər simvoldan nıgıdır varsa sayını artırdım

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Sayı çox olan simvolu qaytardım console-a elave etdim
  return Object.entries(charCount)
    .map((let) => let)
    .sort((a, b) => b[1] - a[1])[0];
};

console.log(maxUsedSymbol(sentence));
