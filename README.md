# recruitment-backend-track-typescript
An evaluation exercise for candidates willing to test their back-end capabilities. Typescript language track

A TypeScript-based Invoice Management API built with Express.js, Prisma ORM, and PostgreSQL. This project provides a solution for managing users, tax profiles, invoices, and their relationships with CRUD operations, pagination, filtering, and automated API documentation.

## Features

- **RESTful API** with CRUD operations for Users, Tax Profiles, Invoices, and User-Invoice associations
- **MVC Architecture** with clear separation of concerns (Controllers, Business Logic, Repository Pattern)
- **OpenAPI/Swagger Documentation** automatically generated with TSOA
- **Database Management** with Prisma ORM and PostgreSQL
- **Pagination and Filtering** for all endpoints
- **Testing** with Jest (unit and integration tests), partial
- **Docker Support** with multi-service orchestration

## Technology Stack

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **API Documentation**: TSOA (OpenAPI/Swagger)
- **Testing**: Jest with Supertest
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (reverse proxy)

## Project Structure

```
src/
├── business/           # Business logic layer
├── repository/         # Data access layer
├── servlet/            # Controllers (API endpoints)
├── shared/
│   ├── dto/           # Data Transfer Objects
│   └── domainValues.ts # Enums and constants
├── tests/             # Test files
└── server.ts          # Application entry point
```

## Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose
- PostgreSQL (if running without Docker)

## Installation

### Option 1: Using Docker (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LorenzoBiasotti97/recruitment-backend-track-typescript.git
   cd recruitment-backend-track-typescript
   ```

2. **Start the application with Docker:**
   ```bash
   docker-compose up --build
   ```

   This will start:
   - Backend server on `http://localhost:3000`
   - PostgreSQL database on port `5432`
   - Nginx reverse proxy on port `80`

3. **Run database migrations:**
   ```bash
   docker-compose exec backend npx prisma migrate deploy
   ```

4. **Seed the database (optional):**
   ```bash
   docker-compose exec backend npm run db:seed
   ```

### Option 2: Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd recruitment-backend-track-typescript
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database configuration
   ```

3. **Start PostgreSQL database:**
   ```bash
   docker-compose up db -d
   ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate deploy
   ```

5. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

6. **Build and start the application:**
   ```bash
   npm run build
   npm run dev
   ```

## API Documentation

Once the application is running, you can access:

- **Swagger UI**: `http://localhost:3000/docs`
- **API Base URL**: `http://localhost:3000`

### Main Endpoints

#### Users
- `GET /users` - Get all users (deprecated, use POST /users/user-filter)
- `POST /users/user-filter` - Get filtered users with pagination
- `GET /users/{id}` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

#### Tax Profiles
- `GET /tax-profiles` - Get all tax profiles (deprecated)
- `POST /tax-profiles/taxprofile-filter` - Get filtered tax profiles with pagination
- `GET /tax-profiles/{id}` - Get tax profile by ID
- `POST /tax-profiles` - Create new tax profile
- `PUT /tax-profiles/{id}` - Update tax profile
- `DELETE /tax-profiles/{id}` - Delete tax profile

#### Invoices
- `GET /invoices` - Get all invoices (deprecated)
- `POST /invoices/invoice-filter` - Get filtered invoices with pagination
- `GET /invoices/{id}` - Get invoice by ID
- `POST /invoices` - Create new invoice
- `PUT /invoices/{id}` - Update invoice
- `DELETE /invoices/{id}` - Delete invoice

#### User-Invoice Associations
- `GET /user-invoices` - Get all associations (deprecated)
- `POST /user-invoices/userInvoice-filter` - Get filtered associations with pagination
- `GET /user-invoices/{id}` - Get association by ID
- `POST /user-invoices` - Create new association
- `PUT /user-invoices/{id}` - Update association
- `DELETE /user-invoices/{id}` - Delete association

### Pagination and Filtering

Filter endpoints support pagination and filtering

## Database Schema

The application uses the following main entities:

- **Users**: Store user information with roles (ADMIN, VIEWER)
- **Tax Profiles**: Tax configuration for users
- **Invoices**: Invoice records with payment status
- **User-Invoice Associations**: Many-to-many relationship tracking

## Testing

TODO manage database with file .env

### Test Database Setup

Tests use a separate database configured in `docker-compose.test.yml`:

```bash
# Start test database
docker-compose -f docker-compose.test.yml up -d

# install all dependencies
npm install

#create client Prisma
npx prisma generate

# Exec migration on test DB
$env:DATABASE_URL = "postgresql://user:password@localhost:5433/test_invoice_management"
npx prisma migrate deploy
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

```


## Development Commands

```bash
# Start development server
npm run dev

# Build TypeScript
npm run build

# Generate TSOA routes and OpenAPI spec
npm run tsoa:build

# Run database migrations
npx prisma migrate dev

# View database in Prisma Studio
npx prisma studio

# Seed database with sample data
npm run db:seed
```

## Environment Variables

Key environment variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/invoice_management"
TEST_DATABASE_URL="postgresql://user:password@localhost:5433/test_invoice_management"

# Application
NODE_ENV=development
PORT=3000
```

## Docker Services

- **backend**: Main application server
- **db**: PostgreSQL database with persistent volume
- **nginx**: Reverse proxy for production-like setup


## Author

Lorenzo Biasotti

## Repository

https://github.com/LorenzoBiasotti97/recruitment-backend-track-typescript
