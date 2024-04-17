"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Alberto',
        edad: 23,
        address: {
            id: 2,
            zip: '882882s',
            city: 'Santiago'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Marta',
        age: 50,
        address: {
            city: 'Madrid',
            id: 2334,
            zip: 'SF2354SA'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = () => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map