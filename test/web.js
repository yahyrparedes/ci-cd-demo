
const request = require('supertest')
const app = require('../app')

describe( 'Test App Web', function (){

    before( function (){
        it('Server is nunning?', function (done){
            app.listen(function (err) {
                if (err){
                    return done(err)
                }
                done();
            })
        })
    })

    it('Ping server', function (done) {
        request(app)
            .get('/ping')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, function (err, res){
                if (err){
                    return done(err)
                }
                callStatus = res.body.pong
                console.log(callStatus)
                if(callStatus == true){
                    done()
                } else {
                    throw new Error('Oh noo')
                }

            })
    })

})