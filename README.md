# Goat API

A small Express + SQLite REST API for managing goats.

Quick start:

1. Install dependencies:

```powershell
npm install
```

2. Run in development:

```powershell
npm run dev
```

3. Run tests:

```powershell
npm test
```

API endpoints:

- `GET /api/goats` - list goats (query: page, limit, name)
- `GET /api/goats/:id` - get goat
- `POST /api/goats` - create goat
- `PUT /api/goats/:id` - update goat
- `DELETE /api/goats/:id` - delete goat
