# Eeden
> A marketplace for dreams

## Tech stack
Weʻve built this app using:
- **React** for building the front-end User-Interface (UI)
- HTML and CSS (via [sass](https://sass-lang.com))
- **Express** as the Server
- **Bookshelf.js** as your ORM for the **Postgresql** Datastore.
- **Docker** for containerization

## Schemas

### Users
|Property|Type|Options|
|---|---|---|
|user_id(Pk)|number|serial, not null, unique|
|email|string |not null, unique|
|password|string|not null|
|has_store|boolean|not null, default false|
|store_id (Fk)|number|nullable|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

### Store
|Property|Type|Options|
|---|---|---|
|store_id(Pk)|number|serial, not null, unique|
|title|string |not null, unique|
|description|string|nullable|
|dreams_id (Fk)|number|has many, nullable|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

### Dreams
|Property|Type|Options|
|---|---|---|
|dreams_id(Pk)|number|serial, not null, unique|
|title|string |not null, unique|
|description|string|nullable|
|price|number|not null|
|genre|string|not null|
|duration|interval|not null|
|featured_video|string|not null|
|dream_images|string|has many, not null|
|keywords|string|has many, nullable|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

### Keywords
|Property|Type|Options|
|---|---|---|
|keyword_id(Pk)|number|serial, not null, unique|
|title|string |not null, unique|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

### Admin
TBD

### Association tables

### Purchased
|Property|Type|Options|
|---|---|---|
|user_id|number|not null|
|dreams_id|number|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## App Structure

### Front
- React
- SASS

### Back
- Server
- Routes
- /DB /Models

### DevOps
- PG.Json
- env
- Docker
- Readme

## Routes
/
- GET 


/login
- GET
- POST

/register
- POST


/stores
- GET

/:store_id
- GET 

/:store_id/:dreams_id
- GET 

/create_store
- GET
- POST

/edit_store/:store_id
- PUT


/dreams
- GET

/create_dream
- GET
- POST

/edit_dream/:dreams_id
- PUT


/cart
- GET
- POST

/checkout
- GET

/confirm
- GET

