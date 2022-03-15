/* 2)Crear un array con varios nombres de videojuegos, imprimir todos los
videojuegos menos los videojuegos con el nombre de "mario"
*/
let videojuegos = ["Elden Ring", "Mario Party 8", "NBA 2K21", "New super mario bros", "League of legends"];
let videojuegoResult = videojuegos.filter(string => !string.toLowerCase().includes("mario"));
console.log(videojuegoResult);
