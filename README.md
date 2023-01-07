# Food Court Evaluation Task API

## TASK

You are building a backend API for a meal management application that allows users to create, read, update, and delete meal addons. The API should also allow users to create categories for these addons.
The API should have the following endpoints:

- POST /brands/:brandId/addons: Create a new meal addon for the specified brand.
- GET /brands/:brandId/addons: Retrieve a list of all meal addons for the specified brand.
- GET /brands/:brandId/addons/:addonId: Retrieve a single meal addon by its ID for the specified brand.
- PATCH /brands/:brandId/addons/:addonId: Update a single meal addon by its ID for the specified brand.
- DELETE /brands/:brandId/addons/:addonId: Delete a single meal addon by its ID for the specified brand.
- POST /brands/:brandId/addon-categories: Create a new category for meal addons for the specified
  brand.

## Technologies Used

- NodeJS >= v16
- NestJS & Typescript
- Postgresql >=14
- ObjectionJS and KnexJs

## Getting started

- clone the repo locally
- install all dependencies
- copy the contents of the `.env.sample` file to a `.env` file and update the env variables accordingly
- start the dev server locally with the command `yarn start:dev`

## Note

- A swagger documentation that shows all available endpoints is generated automatically and is accessible via the `/swagger` endpoint.
- Since the `brands/*` endpoints are protected you'd have to register a user with the role of ADMIN and login to access them. There is a `/auth/register` and `/auth/login` to provide authentication ervices.
- The deployed version can be accessed via [https://food-court-api.onrender.com] and the swagger doc [https://food-court-api.onrender.com/swagger]
