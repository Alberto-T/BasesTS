(()=> {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor( private name: string,
            private team: string,
            public realName?: string,
            avgAge: number = 35, 
        ) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
            Avenger.avgAge = avgAge;
        }

    }

// las propiedades staticas se pueden llamar de manera global llamando a la clase, pero no a la instancia y utilizando la propiedad
    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log( antman );
    // console.log( Avenger.avgAge );
    console.log(Avenger.avgAge);



})()