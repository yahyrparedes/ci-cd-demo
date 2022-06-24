describe( 'Middle test', function (){
    var date;
    before( function (done){
        done();
    })

    beforeEach( function(){
        date = new Date();
    })

    after( function (){
        console.log('Middle test done!')
    })

    afterEach( function (){
        console.log("The date is ", date)
    })

    it('Boleans basics',  function (done){
        if(false){
            throw new Error('Oh noo')
        }

        done();
    })

    describe('Test deep Calling', function (){
        before( function (){
            console.log("First calling deep")
        })
        it('should perform basic math', function (done) {
            if (1 +1 != 2){
                throw new Error('Oh no')
            }
            done();
        });


    })

})