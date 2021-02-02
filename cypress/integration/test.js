const { expect } = require("chai")

//Get Request 
describe('GET contacts', function(){

    it('GET - contacts', function(){
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/contacts',

        }).then((res) => {
            expect(res).to.have.property("status", 200)
            
               
        })
    })


})

//Create Contact POST Request 
it('Create Contact', function(){
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/contacts/',

       body: {
            "firstName": "John",
            "surname": "Smith",
            "addresses": [
              {
                "addressType": "HOME",
                "houseNumber": "214",
                "streetAddress": "Example Road",
                "city": "Example City",
                "postCode": "BS24 3SQ"
              }
            ]
        },


        headers : {
            'content-type' : 'application/json'
        }
    }).then((res) => {

        console.log(res.body.data);
        const { body } = res;
        expect(body).to.be.an('object');
        expect(res).to.have.property("status", 200)


    })


})



//Get Contacts with id
describe('GET Contact ID', function(){

    it('GET contacts with id', function(){
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/contacts/6016cadeab9102650409045b',

        }).then((res) => {
            expect(res).to.have.property("status", 200)
            
               
        })
    })


})



//Update Contact
it('Update Contacts', function(){
    cy.request({
        method: 'PUT',
        url: 'http://localhost:8080/api/contacts/6016cadeab9102650409045b ',

       body: {

           "id": '6015bfdaade1f52153a32693',
            "firstName": "Johnson",
            "surname": "Smith",
            "addresses": [
              {
                "addressType": "HOME",
                "houseNumber": "214",
                "streetAddress": "Example Road",
                "city": "Example City",
                "postCode": "BS24 3SQ"
              }
            ]
        },


        headers : {
            'content-type' : 'application/json'
        }
    }).then((res) => {

        console.log(res.body.data);
        const { body } = res;
        expect(body).to.be.an('object');
        expect(res).to.have.property("status", 200)


    })


})



//Delete Contact
describe('DELETE Contact', function(){

    it('DELETE id', function(){
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8080/api/contacts/6016cadeab9102650409045b',

        }).then((res) => {
            expect(res.status).equal(200);
            
               
        })
    })


})



