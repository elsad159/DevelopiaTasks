// Uzunluğu 1000 olan array yaratdım 
const arr = new Array(1000);

// Burda isə mən hər bir index-i 1-100 araliğına random rəqəmlərlə doldurum

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * 100) + 1;
}

// Hər rəqəmnən neçe ədəd olduğunu tapmaq üçün uzunluqu 100 olan və dəyərləri 0-a bərabər olan array yaratdım 

const count = new Array(100).fill(0);

// Əqər bir dəyərdən birdən artıq tapıbsa sayını artırsın

for (let i = 0; i < arr.length; i++) {
  count[arr[i] - 1]++;
}
// Aldığım nəticəni console-a elave elədim

for (let i = 0; i< count.length; i++){
    console.log(`${i+1} -dan ${count[i]} dene`)
}

