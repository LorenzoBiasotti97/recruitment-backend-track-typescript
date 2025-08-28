import request from 'supertest';
import express from 'express';
import { validUserInsertDto } from '../fixtures/userFixtures';
import { cleanDatabase } from '../setup';
import { RegisterRoutes } from '../../routes/routes';

const app = express();
app.use(express.json());
RegisterRoutes(app);

describe('User Controller Integration Tests', () => {
  beforeEach(async () => {
    await cleanDatabase();
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/users')
        .send(validUserInsertDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.firstName).toBe(validUserInsertDto.firstName);
      expect(response.body.email).toBe(validUserInsertDto.email);
    });

    it('should return 500 for invalid data', async () => {
      const invalidData = { ...validUserInsertDto, email: 'invalid-email' };
      
      await request(app)
        .post('/users')
        .send(invalidData)
        .expect(500);
    });
  });

  describe('GET /users/:id', () => {
    it('should return user by id', async () => {
      const createResponse = await request(app)
        .post('/users')
        .send(validUserInsertDto);

      const userId = createResponse.body.id;

      const response = await request(app)
        .get(`/users/${userId}`)
        .expect(200);

      expect(response.body.id).toBe(userId);
      expect(response.body.email).toBe(validUserInsertDto.email);
    });

    it('should return 404 for non-existent user', async () => {
      await request(app)
        .get('/users/999')
        .expect(404);
    });
  });

  describe('POST /users/user-filter', () => {
    beforeEach(async () => {
      await request(app).post('/users').send(validUserInsertDto);
    });

    it('should return filtered users with pagination', async () => {
      const response = await request(app)
        .post('/users/user-filter?page=1&pageSize=10')
        .send({ firstName: 'Mario' })
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.pagination.total).toBe(1);
    });
  });
});