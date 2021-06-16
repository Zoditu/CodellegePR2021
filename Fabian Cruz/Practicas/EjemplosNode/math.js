module.exports = {
    SPGG: function(req, res) {
        const alumnos = ['Fabian Cruz', 'Felipe Garcia', 'Antonio Gonzales'];
        const periodo = "Primavera 2021";
        const maestros = ['Kevin Martin del Campo', 'Mariano Gutierrez'];

        function Horario(){
            var horario = [
                lunes = {
                    materia: 'Programación',
                    hora: '9:00 am a 12:00 pm'
                },
                martes = {
                    materia: 'Programación',
                    hora: '9:00 am a 12:00 pm'
                },
                miercoles = {
                    materia: 'Programación',
                    hora: '9:00 am a 12:00 pm'
                },
                jueves = {
                    materia: 'Programación',
                    hora: '9:00 am a 12:00 pm'
                },
                viernes = {
                    materia: 'Programación',
                    hora: '9:00 am a 11:00 pm',
                },
                viernes2 = {
                    materia: 'Sociales',
                    hora: '11:00 am a 12:00 pm'
                }
            ]

            return horario
        }

        function añadirAlumno(name) {
            alumnos.push(name);
        }
        
        function Mensaje(){
            console.log('Todos los días ponemos este mensaje');
        };
    }
};