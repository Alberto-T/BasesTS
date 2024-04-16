(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );
    
    //* Ejemplo uno
    // const printAvenger = ( avengers: Avengers ) => {
    //     console.log( avengers.vision );
    // }

    // printAvenger( avengers )

    //* Ejemplo dos

    const printAvenger = ( { ironman, ...resto }: Avengers ) => {
        console.log( ironman, resto );
    }

    // printAvenger( avengers )

    // const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];

    // const ironman = avengersArr[1];
    // console.log({ ironman });

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 1500];

    const [ capitan, ironman, numero ] = avengersArr;
    // console.log({ ironman, capitan });

})()