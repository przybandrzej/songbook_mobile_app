/*
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SongbookApi);
  }
}(this, function(expect, SongbookApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SongbookApi.GuitarCordResourceApi();
  });

  describe('(package)', function() {
    describe('GuitarCordResourceApi', function() {
      describe('getAllGuitarCordsUsingGET', function() {
        it('should call getAllGuitarCordsUsingGET successfully', function(done) {
          // TODO: uncomment getAllGuitarCordsUsingGET call and complete the assertions
          /*

          instance.getAllGuitarCordsUsingGET(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SongbookApi.GuitarCordDTO);
              expect(data.content).to.be.a('string');
              // expect(data.content).to.be("");
              expect(data.id).to.be.a('number');
              // expect(data.id).to.be("0");
              expect(data.position).to.be.a('number');
              // expect(data.position).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getGuitarCordByIdUsingGET', function() {
        it('should call getGuitarCordByIdUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getGuitarCordByIdUsingGET call and complete the assertions
          /*
          var id = 789;

          instance.getGuitarCordByIdUsingGET(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.GuitarCordDTO);
            expect(data.content).to.be.a('string');
            // expect(data.content).to.be("");
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be("0");
            expect(data.position).to.be.a('number');
            // expect(data.position).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateGuitarCordUsingPUT', function() {
        it('should call updateGuitarCordUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updateGuitarCordUsingPUT call and complete the assertions
          /*
          var guitarCordDTO = new SongbookApi.GuitarCordDTO();
          guitarCordDTO.content = "";
          guitarCordDTO.id = "0";
          guitarCordDTO.position = 0;

          instance.updateGuitarCordUsingPUT(guitarCordDTO, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SongbookApi.GuitarCordDTO);
            expect(data.content).to.be.a('string');
            // expect(data.content).to.be("");
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be("0");
            expect(data.position).to.be.a('number');
            // expect(data.position).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
