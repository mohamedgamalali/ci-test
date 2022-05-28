// const {
//     expect
// } = require('expect');
const { expect } = require('expect');
const supertest = require('supertest');
const middleware = require('./middleware');
const app = middleware();

describe('api tests', () => {
    it('get /',async () => {
        const res = await supertest(app).get('/').expect(200);
        const body = JSON.parse(res.text);
        expect(body).toEqual({
            message:'you are in root'
        })
    });
});