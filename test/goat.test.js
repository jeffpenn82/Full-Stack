const request = require('supertest');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'goats.db');

beforeAll(() => {
  // remove DB to start fresh
  if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
});

const app = require('../index');

describe('Goat API', () => {
  test('creates, reads, updates, deletes a goat', async () => {
    const createRes = await request(app).post('/api/goats').send({ name: 'Billy', age: 3, breed: 'Nubian' });
    expect(createRes.status).toBe(201);
    expect(createRes.body).toHaveProperty('id');

    const id = createRes.body.id;

    const getRes = await request(app).get(`/api/goats/${id}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body.name).toBe('Billy');

    const listRes = await request(app).get('/api/goats');
    expect(listRes.status).toBe(200);
    expect(listRes.body.items.length).toBeGreaterThan(0);

    const updateRes = await request(app).put(`/api/goats/${id}`).send({ age: 4 });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.age).toBe(4);

    const deleteRes = await request(app).delete(`/api/goats/${id}`);
    expect(deleteRes.status).toBe(204);

    const getAfter = await request(app).get(`/api/goats/${id}`);
    expect(getAfter.status).toBe(404);
  }, 20000);
});
