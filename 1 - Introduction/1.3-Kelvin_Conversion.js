//Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

//Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.


//declarando uma variável constante
const kelvin = 293;
//celsius é 273 graus menor que Kelvin
const celsius = kelvin - 273;
//fahrenheit vai ser alterado posteriormente
let fahrenheit = celsius * (9/5) + 32;

//arredondando o número pra menor dezena próxima
fahrenheit = Math.floor(fahrenheit);
