function Reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  const ToLowerCase = (str) => {
    let updated = "";
    const [upp_start, upp_end, low_start] = "AZa"
      .split("")
      .map((x) => x.charCodeAt(0));
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt(0);
      const diff =
        charCode >= upp_start && charCode <= upp_end ? low_start - upp_start : 0;
      updated = updated + String.fromCharCode(charCode + diff);
    }
    return updated;
  };
  let Combine = function (text) {
    text = text.trim();
    let newstring = "";
    for (const char of text) {
      newstring += char === " " ? "" : char;
    }
    return newstring;
  };
  function Palindrome(string) {
    let smallString = ToLowerCase(string);
    let finalString = Combine(smallString);
    let reversed = Reverse(finalString);
    if (reversed === finalString) {
      return true;
    } else {
      return false;
    }
  }
  console.log(Palindrome("Sator Arepo tenet opera rotas"));
  