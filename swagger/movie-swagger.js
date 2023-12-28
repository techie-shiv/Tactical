/**
 * @swagger
 *   tags:
 *  - name: "Movie"
 *    description: "Everything about Movie related data"
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *    JWT:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 *      bearerFormat: JWT
 *   schemas:
 *      Movie:
 *          type: object
 *          required:
 *              - title
 *              - image
 *              - publishing_year
 *          properties:
 *              title:
 *                  type: string
 *                  description: Movie title
 *              publishing_year:
 *                  type: string
 *                  description: Movie publishing year
 *              image:
 *                  type: file
 *                  description: Movie image
 */

/**
 * @swagger
 * /api/movies/:
 *   get:
 *     tags:
 *       - Movie
 *     summary: Add a new movie
 *     security:
 *     - JWT: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The movie added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/movies/:
 *   post:
 *     tags:
 *       - Movie
 *     summary: Add a new movie
 *     security:
 *     - JWT: []
 *     responses:
 *       200:
 *         description: The movie added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *      tags:
 *       - Movie
 *      summary: Get movie by id
 *      security:
 *      - JWT: []
 *      parameters:
 *      - in: path
 *        name: id
 *      schema:
 *          type: string
 *          required: true
 *          description: The movie id
 *      responses:
 *        200:
 *          description: The movie description by id
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movie'
 *        500:
 *          description: The user was problem created
 */

/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     tags:
 *       - Movie
 *     summary: Update movie by ID
 *     security:
 *       - JWT: [] # Replace with actual security requirements
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The movie ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Updated movie details
 *         schema:
 *           $ref: '#/definitions/Movie'
 *       400:
 *         description: Invalid input, e.g., malformed request
 *       401:
 *         description: Unauthorized, missing or invalid credentials
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */
