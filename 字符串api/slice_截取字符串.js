/*
slice: 选取两个指定索引之间的字符串,两个参数时遵循含头不含尾的原则，返回新选取的字符串,不会改变原本的字符串。
*/
var str = "dream-starts-with-lighting-matches";
var newStr1 = str.slice();//没有参数代表选取所有字符
var newStr2 = str.slice(5);//一个参数代表开始位置，选取从索引5开始开始到结束字符
var newStr3 = str.slice(5,10); //选取索引5到索引10之间的字符，不包括索引10
console.log(newStr1)//dream-starts-with-lighting-matches
console.log(newStr2);//-starts-with-lighting-matches
console.log(newStr3);//-star