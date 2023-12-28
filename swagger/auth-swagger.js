/**
 * @swagger
 *   tags:
 *  - name: "Auth"
 *    description: "Everything about User related data"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *      Auth:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type: string
 *                  description: user email id
 *              password:
 *                  type: string
 *                  description: user password
 *   
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *      tags:
 *       - Auth
 *      summary: Sign in a user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             properties:
 *              email:
 *                 type: string
 *                 description: user email
 *              password:
 *                 type: string
 *                 description: user password
 *      responses:
 *        200:
 *          description: The user loggedin successfully
 *          content:
 *            application/json:
 *              schema:
 *                properties:
 *                 message:
 *                  type: string
 *                  description: user message
 * 
 *        500:
 *          description: The user was problem created
 */
