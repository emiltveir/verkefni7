/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    if (str === "")
      return "";
    const allt = str.split(" ");
    let lengsta ="";
    for(let orð of allt) {
      if(orð.length > lengsta.length) {
        lengsta = orð;
      }
    }
    return lengsta;
   } else {
  return null;
}
}
console.assert(isString('halló heimur!') === true, 'longest: string, "heimur!" ');
console.assert(isString("") === true, 'longest: ekki string, " "');
console.assert(isString(1) === false, 'longest: ekki string, "null"');
console.assert(isString("baka kaka") === true, 'longest: string, "baka"');


function shortest(str) {
  if(isString(str)) {
    if (str === "")
      return "";
    const allt = str.split(" ");
    let stutt = allt[0];
    for(let orð of allt) {
      if(orð.length < stutt.length) {
        stutt = orð;
      }
    }
    return stutt;
    } else {
      return null;
    }
  }
console.assert(isString('halló heimur!') === true, 'shortest: string, "halló" ');
console.assert(isString("") === true, 'shortest: ekki string, " "');
console.assert(isString(1) === false, 'shortest: ekki string, "null"');
console.assert(isString("baka kaka") === true, 'shortest: string, "baka"');


function reverse(str) {
    if (isString(str)) {
      const split = str.split("");
      const reversed = split.reverse();
      return reversed.join("");
    }
    return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);

console.assert (
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str)
    return str.toLowerCase() === reversed.toLowerCase()
  }  
    return false;
}
console.assert(palindrome("halló") === false, "palindrome: strengur, false")
console.assert(palindrome("hah") === true, "palindrome: strengur, true")
console.assert(palindrome("") === false, "palindrome: ekki strengur, false")


function vowels(str) {
  if (isString(str)) {
    let fjoldi = 0;
    for (let orð of str) {
      if ("aAeEiIoOuUyYáÁéÉýÝúÚíÍóÓöÖæÆ".includes(orð)) {
        fjoldi++;
      }
    }
    return fjoldi;
   }
  return 0;
  }
console.assert(isString('halló heimur!'), 'vowels: "6"');
console.assert(isString(""), 'vowels: "0"');





function consonants(str) {
  if (isString(str)) {
    let fjoldi = 0;
    for (let orð of str) {
      if ("bBdDðÐfFgGhHjJkKlLmMnNpPrRsStTvVxXþÞ".includes(orð)) {
        fjoldi++;
      }
    }
    return fjoldi;
   }
  return 0;
}
console.assert(isString('halló heimur!'), 'consonants: "5" ');
console.assert(isString(""), 'consonants:  "0"');


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  
}
