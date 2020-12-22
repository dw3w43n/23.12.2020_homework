//1.Տրված է խարը զանգված առանձնացնել լինկերը

var links = ["https://www.xyz.com/", "abc", "def", "http://www.ghi/"];
links = links.filter((value) => {
  return value.startsWith("http");
});
console.log(links);

//2.Տրված է խարը զանգված առանձնացնել տարրերը և գրել համապատասխան տեգերում:

var mixed = ["image/01.jpg", "https://www.abc.com/", "someText_1", "image/02.jpg", "https://www.def.com/", "someText_2"];

for (var i = 0; i < mixed.length; i++) {

  if (mixed[i].endsWith(".jpg")) {
    document.write(`<img src="${mixed[i]}"><br>`);
    continue;
  }
  if (mixed[i].startsWith("http")) {
    document.write(`<a href="${mixed[i]}">${mixed[i]}</a><br>`);
    continue;
  }
  document.write(`<span>${mixed[i]}</span><br>`);
}

//3.Տրված է տող: Հաշվել քանի սինվոլ կա առաջին և նախավերջին 'x'-երի միջև:

var str = "The FoX is iN tHe bOx";
var count = str.toLowerCase().lastIndexOf("x") - str.toLowerCase().indexOf("x") - 1;
console.log(count);

//4.Տրված ե նախադասություն բոլոր բառերի առաջին տառերը դարձնել մեծատառ և կապույտ գույնի:
var str_1 = "capitalize all the first letters";
var cap = str_1.split(" ");
cap = cap.map(value => {
  /*string.fontcolor("blue"); Устарело! https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor */
  return `<span style="color:blue">${value[0].toUpperCase()}</span>` + value.slice(1);
});
str_1 = cap.join(" ");
document.write(`<p>${str_1}</p>`);

//5.Տրված է խառը զանգված մեջից առանձնացնել link-երը, ինչպես նաև link-երի անուննետը
var mixed_1 = [`<a href="https://www.google.com/">Google</a>`, `<a href="https://www.amazon.com/">Amazon</a>`, `<a href="https://www.ebay.com/">Ebay</a>`];
var links_1 = [], linkNames = [], from, to;
for (var i = 0; i < mixed_1.length; i++) {
  from = mixed_1[i].indexOf(`http`);
  to = mixed_1[i].indexOf(`"`, from);
  links_1.push(mixed_1[i].substring(from, to));

  from = mixed_1[i].indexOf(`>`);
  to = mixed_1[i].indexOf(`<`, from);
  linkNames.push(mixed_1[i].substring(from + 1, to));
}
console.log(links_1);
console.log(linkNames);

//6.Տրված է զանգված նախավերջին դիրքւմ ավելացնել 3 տար:
var arr = ["a", "b", "c", "d"];
arr.splice(arr.length - 1, 0, "e", "f", "g");
console.log(arr);

//7.Տրված է տող առանդնացնել ‘yan’ –ով վերջացող բառերը:

var yan = "Tumanyan Bakunc Abovyan Metsarenc Isahakyan Raffi Matevosyan";
var yanArr = yan.split(" ");
yanArr = yanArr.filter(value => value.endsWith("yan"));
console.log(yanArr);