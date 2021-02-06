# Perfect Query - SDC Component Optimization

> `CurveMetrics Affordability Calulator`

## Related Projects

  - https://github.com/Curve-Metrics/Carousel-Service-Optimization.git
  - https://github.com/Curve-Metrics/Photos-Optimization.git

## Requirements

- [Cassandra](https://cassandra.apache.org/download/)

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:
```sh
npm i -g webpack
npm i
```

## Usage
-Start server * client using npm run dev:start npm run start

- **update this with seeding script to generate mock data in a CSV file

</br>

## Listing API

</br>

### Select listing matching listingId

-GET `/api/listings/`

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
    {
      group_id: INT
      home_id: INT
      cost: INT
      address: TEXT
      createdAt: Date
    }

```
-GET `/api/listings/:id`

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
    {
      home_id: INT
      cost: INT
      address: INT
      tax_id: INT
      loan-Type: INT
      seller: INT
      createdAt: Date
    }

```

-POST `/api/listings`

**Path Parameters:**
- `id` - listing ID

**Request Body**
```json
{

  price: INT
  address: TEXT
  seller: INT
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a listing."
    }
```

```json
    {
      "message": "Failed to add a listing."
    }
```

-PATCH `/api/listing/:id`

**Path Parameters:**
- `id` - listing ID

**Request Body**
*
```json
 {
  price: INT
  address: TEXT
  seller: INT
  }
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a listing."
    }
```

```json
    {
      "message": "Failed to update a listing."
    }
```
</br>

-DELETE `/api/listing/:id`

###Path parameters:

**Request Body**
*

   ```id``` listing id


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a listing."
    }
```

```json
    {
      "message": "Failed to deleted a listing."
    }
```
## Mortgages API
-GET `/api/taxRates/`

**Path Parameters:**
- `taxRates` - Tax rates

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  tax_id: INT
  county: STRING
  rate: INT%
}
```

-GET `/api/mortgages/:id`

**Path Parameters:**
- `id` - mortgages id

### Path responses:
**Success Status Code:** `201`


**Returns:** Expects JSON with the following keys.

```json
{
  mortgage_ID: STRING
  terms: STRING
  fees: INT
  rate: INT
  apr: INT
}
  ```

</br>

-PUT `/api/mortgages/:id`

**Path Parameters:**
- `id` - mortgages id

**Request Body**
*
```json
{
  mortgage_ID: STRING
  terms: STRING
  fees: INT
  rate: INT
  apr: INT
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a mortgage."
    }
```

```json
    {
      "message": "Failed to update a mortgage."
    }
```
</br>

-DELETE `/api/mortgage/:id`

###Path parameters:

**Request Body**
*

   ```id``` mortgage id


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a mortgage."
    }
```

```json
    {
      "message": "Failed to deleted a mortgage."
    }
```

</br>

</br>

## __USER API__
 </br>

## Add a user

- POST `/api/sellers`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  username: String,
  email: String,
  ip: String
}
```
</br>

-GET `/api/sellers/:id`

**Path Parameters:**
- `id` - user ID

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  id: INT
  email: String,
  password: String,
  ip: String
}
```
</br>

-PATCH `/api/sellers/:userId`

**Path Parameters:**
- `id` - user ID

**Request Body**
*
```json
{
  id: INT
  email: String,
  password: String,
  ip: String
}
```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a user"
    }
```

```json
    {
      "message": "Failed to update a user."
    }
```

</br>

-DELETE `/api/user/:id`

**Path Parameters:**
- `id` - user ID

**Request Body**

   ```id``` user ID


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a user from database."
    }
```

```json
    {
      "message": "Failed to deleted a user from database."
    }
```