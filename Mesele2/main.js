// Cümlə dəişgənimizi yaradırıq, v mətnimizi ora yazırıq

const sentence =
  "Bu məsələdə, biz cümlədəki sözlərin sayını oyrənmək üçün olan, bir code yazmalıyıq.";

// ",", " ", "." görə string-i sözlərə bölüb array-ə cevirdim,sora aldiğım array-in uzunluğunu console-a saldım

const getWordsLength = (string) => {
  const words = string.split(/[ ,.]+/);
  return words.length;
};

console.log(getWordsLength(sentence));
