import { UserRole } from "../../shared/domainValues";
import { UserInsertDto } from "../../shared/dto/userInsertDTO";


export const validUserInsertDto: UserInsertDto = {
  firstName: 'Mario',
  lastName: 'Rossi',
  email: 'mario.rossi@test.com',
  password: 'password123',
  role: UserRole.VIEWER
};

export const validAdminUserInsertDto: UserInsertDto = {
  firstName: 'Admin',
  lastName: 'User',
  email: 'admin@test.com',
  password: 'admin123',
  role: UserRole.ADMIN
};

export const invalidUserInsertDto = {
  firstName: '',
  lastName: 'Rossi',
  email: 'invalid-email',
  password: '123', // Password troppo corta
  role: 'INVALID_ROLE'
};