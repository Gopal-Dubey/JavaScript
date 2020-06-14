function vowel()
{
  var str='aeiou';
  var str=str.replace(/a/gi, "1");
  var str=str.replace(/e/gi, "2");
  var str=str.replace(/i/gi, "3");
  var str=str.replace(/o/gi, "4");
  var str=str.replace(/u/gi, "5");
 
  return str;
}
console.log(vowel());