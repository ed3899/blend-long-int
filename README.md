
# Getting Started

## Prerequisites

You will need:

- Docker
- node 18.19.0

## Environment Variables

The environment variables are in the .env file

## Running the application

1. To get started install the node modules

```shell
npm ci
```

2. Start the database

```shell
docker compose up -d
```

3. Start the server in development mode for hot-reloading

```shell
npm run dev
```

## Testing

To run the tests

```shell
npm test
```

## Requirements

### Section One

Design a notary management API.

A User should be able to:

- Create a notary
- Update a notary
- Delete a notary
- Search for a notary
  - Email
  - First Name
  - Last Name
  - Phone Number

A notary is unique by email.

The tests should pass
