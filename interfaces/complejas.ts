(()=> {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client = {
        name: 'Alberto',
        edad: 23,
        address: {
            id: 2,
            zip: '882882s',
            city: 'Santiago'
        },
        getFullAddress( id:string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Marta',
        age: 50,
        address: {
            city: 'Madrid',
            id: 2334,
            zip: 'SF2354SA'
        },
        getFullAddress( id:string ) {
            return this.address.city;
        }
    }





})()