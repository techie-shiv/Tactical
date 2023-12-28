# Tactical Edge - Movie Management API

Tactical Edge is a Node.js and Express.js-based API designed for managing movies, offering user authentication using JWT tokens. Users can perform CRUD operations (Create, Read, Update, Delete) on movies after successful authentication.

## Features

- User authentication via JWT tokens
- Endpoints for managing movies:
  - Add a new movie
  - Update an existing movie
  - Retrieve details of all movies
- Token-based authentication for secure endpoints

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/techie-shiv/Tactical.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd tactical-edge
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Run Database Seeder**
    ```bash
    node .\utils\dbSeeder.js
    ```
5. **Set up environment variables:**
    - Create a .env file based on the provided .env.example file.
    - Update the variables with your own values, such as database credentials and JWT secret.
6. **Start the server:**
    ```bash
    npm start
    ```
## Endpoints
- ### Authentication
    - `POST /api/auth/login`
        - Description: Authenticates user and generates a JWT token
        - Request Body: `{ "email": "user@example.com", "password": "password123" }`
        - Response: `{ "token": "<generated_JWT_token>" }`
- ### Movies
    - `GET /api/movies`
        - Description: Retrieves details of all movies
        - Authorization Header: `<JWT_token>`
    - `POST /api/movies`
        - Description: Adds a new movie
        - Request Body: `{ "title": "Movie Title", "director": "Director Name", "year": "Release Year" }`
        - Authorization Header: `<JWT_token>`
    - `PUT /api/movies/:id`
        - Description: Updates an existing movie by ID
        - Request Body: `{ "title": "New Title", "director": "New Director", "year": "New Year" }`
        - Authorization Header: `<JWT_token>`

## Technologies Used
- Node.js
- Express.js
- JSON Web Tokens (JWT)
- MongoDB 
- Additional libraries/modules for validation, encryption, etc.