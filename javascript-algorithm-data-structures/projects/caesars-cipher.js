function rot13(str) {
  const asciiArr = str.split("").map((element) => element.charCodeAt(0));

  return asciiArr
    .map((code) => {
      if ((code >= 65 && code <= 77) || (code >= 97 && code <= 109)) {
        return String.fromCharCode(code + 13);
      } else if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122)) {
        return String.fromCharCode(code - 13);
      } else {
        return String.fromCharCode(code);
      }
    })
    .join("");
}

rot13("SERR PBQR PNZC");
