import { UserBusiness } from '../business/userBusiness';
import { PrismaUserRepository } from '../repository/prismaUserRepository';
import { validUserInsertDto, validAdminUserInsertDto } from './fixtures/userFixtures';
import { cleanDatabase, prisma } from './setup';

describe('UserBusiness', () => {
  let userBusiness: UserBusiness;
  let userRepository: PrismaUserRepository;

  beforeEach(async () => {
    await cleanDatabase();
    userRepository = new PrismaUserRepository();
    userBusiness = new UserBusiness(userRepository);
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const result = await userBusiness.create(validUserInsertDto);

      expect(result).toBeDefined();
      expect(result.firstName).toBe(validUserInsertDto.firstName);
      expect(result.lastName).toBe(validUserInsertDto.lastName);
      expect(result.email).toBe(validUserInsertDto.email);
      expect(result.role).toBe(validUserInsertDto.role);
      expect(result.id).toBeDefined();
    });

    it('should throw error for duplicate email', async () => {
      await userBusiness.create(validUserInsertDto); 
      
      await expect(
        userBusiness.create(validUserInsertDto)
      ).rejects.toThrow();
    });
  });

  describe('findById', () => {
    it('should return user when found', async () => {
      const created = await userBusiness.create(validUserInsertDto);
      const found = await userBusiness.findById(BigInt(created.id!));

      expect(found).toBeDefined();
      expect(found!.id).toBe(created.id);
      expect(found!.email).toBe(created.email);
    });

    it('should return null when user not found', async () => {
      const found = await userBusiness.findById(BigInt(999));
      expect(found).toBeNull();
    });
  });

  describe('findAllFilter', () => {
    beforeEach(async () => {
      await userBusiness.create(validUserInsertDto);
      await userBusiness.create(validAdminUserInsertDto);
    });

    it('should return paginated results', async () => {
      const result = await userBusiness.findAllFilter({}, 1, 10);

      expect(result.data).toHaveLength(2);
      expect(result.pagination.total).toBe(2);
      expect(result.pagination.page).toBe(1);
      expect(result.pagination.pageSize).toBe(10);
      expect(result.pagination.totalPages).toBe(1);
    });

    it('should filter by firstName', async () => {
      const result = await userBusiness.findAllFilter({
        firstName: 'Mario'
      }, 1, 10);

      expect(result.data).toHaveLength(1);
      expect(result.data[0].firstName).toBe('Mario');
    });

    it('should handle pagination correctly', async () => {
      const result = await userBusiness.findAllFilter({}, 1, 1);

      expect(result.data).toHaveLength(1);
      expect(result.pagination.totalPages).toBe(2);
    });
  });

  describe('update', () => {
    it('should update user successfully', async () => {
      const created = await userBusiness.create(validUserInsertDto);
      
      const updateData = {
        id: created.id!,
        firstName: 'Updated',
        lastName: created.lastName,
        email: created.email,
        password: 'password123',
        role: created.role
      };

      const updated = await userBusiness.update(updateData);

      expect(updated.firstName).toBe('Updated');
      expect(updated.id).toBe(created.id);
    });
  });

  describe('delete', () => {
    it('should delete user successfully', async () => {
      const created = await userBusiness.create(validUserInsertDto);
      
      await expect(
        userBusiness.delete(BigInt(created.id!))
      ).resolves.not.toThrow();

      const found = await userBusiness.findById(BigInt(created.id!));
      expect(found).toBeNull();
    });
  });
});