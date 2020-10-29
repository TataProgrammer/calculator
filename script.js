

var x = +prompt('введите первое число');
var symbol = prompt('введите знак');
var y = +prompt('введите второе число');
  
  
if (symbol == '+'){
    alert('Ответ : ' + (x+y));
}else if (symbol == '-'){
    alert(' Ответ : ' + (x-y));
}else if (symbol == '*'){
    alert(' Ответ : ' + (x*y));
}else if (symbol == '/') {
    alert(' Ответ : ' + (x/y));
}else{
    alert('Ошибка')
}

//    switch (symbol) {
//          case '+' :
//            alert('Ответ : ' + (x+y));
//            break;
//          case '-':
//             alert('Ответ : ' + (x-y));
//             break;
//          case '*' :
//             alert('Ответ : ' + (x*y));
//             break;
//          case '/' :
//              alert('Ответ : ' + (x/y))   
//              break;
//          default:
//              alert('Ошибка')    
//    };

//    if (isNaN(x) && isNaN(y)) {
//     alert('Оба числа неверны');
// }else if (isNaN(x)) {
//  alert('Первое число неверно');
// }else if (isNaN(y)){
//     alert('Второе число неверно')
// };