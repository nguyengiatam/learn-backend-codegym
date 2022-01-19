const assert = require('assert');
const request = require('supertest');
const app = require('../src/index');

describe('Kiểm tra post API', () => {
    it('test weather', async () => {
        const res = await request(app)
                                .post('/find/weather')
                                .send({'name':'Ha Noi'});
        assert.equal(res.status,200);
    })

    it('test wind', async () => {
        const res = await request(app)
                                .post('/find/wind')
                                .send({'name':'Ha Noi'});
        assert.equal(res.status,200);
    })

    it('test temperature', async () => {
        const res = await request(app)
                                .post('/find/temperature')
                                .send({'name':'Ha Noi'});
        assert.equal(res.status,200);
    })
})