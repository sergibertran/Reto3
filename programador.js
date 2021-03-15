class Programador {

	constructor(object) {
        this.object = [
            {
                hora: "07:00",
                temperatura: 22
            },
            {
                hora: "08:30",
                temperatura: 18
            },
            {
                hora: "18:00",
                temperatura: 22
            },
            {
                hora: "23:00",
                temperatura: 20
            }
        ];  
        
        
    // Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();

// Crear planificación para todos los dias a las 18:00
const sched = later.parse.text('at 18:00');

// Crear un temporizador que escriba indefinidamente "hola"
// en los instantes planificados anteriormente:
later.setInterval(() => console.log('hola'), sched);


    }
    


}