
// Validar dos numero que no sean iguales
describe('Basic Test', function () {

    it('Basic Math ', function (done) {
        // Validar dos numeros
        if (5 == 4) {
            throw  new Error('Oh Nouu.')
        }
        done();
    })

})