(()=> {

    class Avenger {

        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor( name: string, team: string, realName?: string ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

// las propiedades staticas se pueden llamar de manera global llamando a la clase, pero no a la instancia y utilizando la propiedad
    const antman: Avenger = new Avenger('Antman', 'Capitan');
    console.log( antman );
    // console.log( Avenger.avgAge );



})()