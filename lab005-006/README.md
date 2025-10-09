# Todo API

Small Express-based Todo API for the 2025 Fall lab005.

## Requirements
- Node.js 18+
- npm
- (optional) MongoDB if you use the mongo-backed model

## Install
```gitBash
npm install
```

## Run
- Dev (with nodemon)
```gitBash
npm run dev
```
- Prod
```gitBash
npm start
```

## Environment
Create a `.env` (optional) with:
- MONGO_URI - MongoDB connection string (if using mongo model)
- PORT - port number (defaults to 3000)

## API (base: http://localhost:3000/api/todos)
- GET /api/todos
  - List todos. Query: `?completed=true|false`
  - Example: curl http://localhost:3000/api/todos
- GET /api/todos/:id
  - Get a single todo
- POST /api/todos
  - Create a todo
  - Body: JSON { "id": "<uuid>", "title": "Buy milk", "completed": false, ... }
- PUT /api/todos/:id
  - Partial update (updates provided fields)
  - Body: JSON with fields to update
- PATCH /api/todos/:id
  - Full replace (if implemented)
- DELETE /api/todos/:id
  - Delete a todo

## Schema
JSON Schema for todos is in:
- `schemas/todo.json`

Model uses `Constants.TODO_COLLECTIONS` and code lives in:
- `models/todo.model.js`
- `controllers/todo.controller.js`
- `services/todos.service.js`
- `lib/mongo.js` (mongo helper)

## Error handling
Controllers forward errors with `next(err)`; model methods log and rethrow. Add/enable global error middleware to return JSON errors.

## Notes
- The project contains a file-backed option and a mongo-backed option. Choose the driver in `models/todo.model.js` / `lib/mongo.js`.
- IDs use UUID strings. Ensure clients send or server generates them.

## Tests
Add tests (supertest + jest/mocha) in `test/` as needed.
