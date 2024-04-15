(() => {

    const hero: string = 'Flash';

    function returnName() {
        return hero;
    }

    const activateBatSignal = ():string => {
        return 'Batiseñal activada!';
    }

    console.log( typeof activateBatSignal );

    const heroName = returnName();

})()