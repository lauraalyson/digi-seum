## API

Scripts are included in curl-scripts to test built-in actions.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "username": "example",
      "password": "password",
      "password_confirmation": "password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "username": "example"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "username": "username",
      "password": "password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "username": "username",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "password",
      "new": "newPassword"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
### Location


| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/artwork`             | `location#create`    |
| GET  | `//artwork` | `artwork#index`  |
| GET  | `/artwork/:id` | `artwork#show`  |
| PATCH  | `/artwork/:id` | `artwork#update`  |
| DELETE | `/artwork/:id`        | `artwork#delete`   |

#### POST /create

Request:

```sh
curl --include --request POST http://localhost:4741/artwork \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "artwork": {
      "title": "Title",
      "description": "Description",
      "img": "https://exampleimg.png/"
    }
  }'
```

```sh
curl-scripts/artwork/create.sh
```

#### GET /index

Request:

```sh
curl --include --request GET http://localhost:4741/locations \
     --header "Authorization: Bearer $TOKEN" \
```

```sh
curl-scripts/locations/index.sh
```

#### GET /show

Request:

```sh
curl --include --request GET http://localhost:4741/artwork/:id \
     --header "Authorization: Bearer $TOKEN" \
```

```sh
curl-scripts/artwork/show.sh
```

#### PATCH /update/

Request:

```sh
curl --include --request PATCH http://localhost:4741/artwork/:id \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "artwork": {
      "title": "New Title",
      "description": "New description."
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/artwork/update.sh
```

#### DELETE /delete

Request:

```sh
curl --include --request DELETE http://localhost:4741/artwork/:id\
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/artwork/destroy.sh
```