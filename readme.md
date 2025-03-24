# Project de Selection Simplon | CDA

## Technical Specifications

- **Environment:** Node.js, Express, TypeScript, Sequelize & SQLite
- **Documentation:** Swagger
- **Deployment:** Render.com

## API Deployment

The API is deployed and accessible at:

🔗 [Live API URL](https://projet-de-selection-simplon-back-1.onrender.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pierre-MarieMarchio/Projet-de-selection-Simplon-Back.git
   cd Projet-de-selection-Simplon-Back
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file at the root of the project.
   - Use the provided `ex.env` as a reference.

4. Start the development server:
   ```bash
   npm run dev
   ```

The API should now be running at http://localhost:<YOUR_PORT>/.

### Build and Production Setup

## Build the Project

To compile the TypeScript code into JavaScript, run:

```bash
npm run build
```

This will generate a dist/ directory containing the compiled files.

## Start in Production Mode

After building the project, you can start the production server with:

```bash
npm run start
```

The API will run using the compiled JavaScript files from dist/.

## Environment Variables in Production

Ensure that your .env file is correctly set up in your production environment. If using Render, configure the environment variables in the Render dashboard.

## API Endpoints

### Get All Jokes

```http
GET /api/v1/blagues/
```

**Response:**

```json
[
  {
    "id": "5a54429e-1528-459a-bd78-0b0f4d5bbec3",
    "question": "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
    "response": "Parce que sinon ils tombent dans le bateau."
  }
]
```

### Get a Joke by ID

```http
GET /api/v1/blagues/{id}
```

### Add a New Joke

```http
POST /api/v1/blagues/
```

**Request Body:**

```json
{
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
  "response": "Parce que sinon ils tombent dans le bateau."
}
```

### Update a Joke

```http
PUT /api/v1/blagues/{id}
```

**Request Body:**

```json
{
  "id": "5a54429e-1528-459a-bd78-0b0f4d5bbec3",
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
  "response": "Parce que sinon ils tombent dans le bateau."
}
```

### Delete a Joke

```http
DELETE /api/v1/blagues/{id}
```

**Request Body:**

```json
{
  "id": "5a54429e-1528-459a-bd78-0b0f4d5bbec3",
  "question": "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
  "response": "Parce que sinon ils tombent dans le bateau."
}
```

## API Documentation

The API documentation is available via Swagger at:

🔗 [Swagger Docs](https://projet-de-selection-simplon-back-1.onrender.com/api-docs/V1)

## Deployment

To deploy the API on Render:

1. Push your code to a GitHub repository.
2. Connect the repository to Render.
3. Set up environment variables in Render.
4. Deploy the service.

---

🚀 Happy coding!
