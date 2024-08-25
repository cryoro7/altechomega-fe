//Fungsi bash dan fish
function printNumbers(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
}

printNumbers(20);
// Fungsi kecil ke besar
function bubbleSortAsc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// Contoh penggunaan fungsi
let numbersAsc = [64, 25, 12, 22, 11];
console.log("Ascending:", bubbleSortAsc(numbersAsc));

// Fungsi Besar ke kecil
function bubbleSortDesc(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Tukar arr[j] dan arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Contoh penggunaan fungsi
let numbersDesc = [64, 25, 12, 22, 11];
console.log("Descending:", bubbleSortDesc(numbersDesc));

// Fungsi Reverse
function isPalindrome(str) {
  // Menghapus spasi dan mengubah string menjadi huruf kecil untuk memastikan perbandingan yang konsisten
  let cleanedStr = str.replace(/\s+/g, "").toLowerCase();

  // Membalikkan string
  let reversedStr = cleanedStr.split("").reverse().join("");

  // Membandingkan string yang telah dibalik dengan string yang asli
  return cleanedStr === reversedStr;
}

// Contoh penggunaan fungsi
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false
