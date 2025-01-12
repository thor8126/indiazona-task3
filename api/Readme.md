# Wishlist API Documentation

## Setup

1. Import the Postman collection JSON files into Postman
2. Set up environment variable:
   - `baseUrl`: Default is `http://localhost:3000`

## API Endpoints

### Users

#### Create User

- **Method**: POST
- **Endpoint**: `/api/users`
- **Body**:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Get All Users

- **Method**: GET
- **Endpoint**: `/api/users`

### Products

#### Create Product

- **Method**: POST
- **Endpoint**: `/api/products`
- **Body**:

```json
{
  "name": "Smartphone X",
  "description": "Latest smartphone with amazing features",
  "price": 999.99,
  "image_url": "https://example.com/smartphone-x.jpg",
  "stock": 50
}
```

#### Get All Products

- **Method**: GET
- **Endpoint**: `/api/products`

#### Get Product by ID

- **Method**: GET
- **Endpoint**: `/api/products/:id`

#### Update Product

- **Method**: PUT
- **Endpoint**: `/api/products/:id`
- **Body**: Same as Create Product

#### Delete Product

- **Method**: DELETE
- **Endpoint**: `/api/products/:id`

### Wishlists

#### Create or Get Wishlist

- **Method**: POST
- **Endpoint**: `/api/wishlists`
- **Body**:

```json
{
  "user_id": 1,
  "name": "My Custom Wishlist"
}
```

#### Get User's Wishlist

- **Method**: GET
- **Endpoint**: `/api/wishlists/user/:userId`

### Collections

#### Create Collection

- **Method**: POST
- **Endpoint**: `/api/wishlists/:wishlistId/collections`
- **Body**:

```json
{
  "name": "Summer Collection"
}
```

#### Get Wishlist Collections

- **Method**: GET
- **Endpoint**: `/api/wishlists/:wishlistId/collections`

#### Update Collection

- **Method**: PUT
- **Endpoint**: `/api/collections/:id`
- **Body**:

```json
{
  "name": "Updated Collection Name"
}
```

#### Delete Collection

- **Method**: DELETE
- **Endpoint**: `/api/collections/:id`

### Collection Items

#### Add Item to Collection

- **Method**: POST
- **Endpoint**: `/api/collections/:collectionId/items`
- **Body**:

```json
{
  "product_id": 123
}
```

#### Remove Item from Collection

- **Method**: DELETE
- **Endpoint**: `/api/collections/:collectionId/items/:itemId`

## Usage Examples

### Complete Flow Example

1. Create a User:

```json
POST /api/users
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

2. Create a Product:

```json
POST /api/products
{
    "name": "Smartphone X",
    "description": "Latest smartphone with amazing features",
    "price": 999.99,
    "image_url": "https://example.com/smartphone-x.jpg",
    "stock": 50
}
```

3. Create a Wishlist for the User:

```json
POST /api/wishlists
{
    "user_id": 1,
    "name": "My Tech Wishlist"
}
```

4. Create a Collection in the Wishlist:

```json
POST /api/wishlists/1/collections
{
    "name": "Gadgets Collection"
}
```

5. Add Product to Collection:

```json
POST /api/collections/1/items
{
    "product_id": 1
}
```

## Response Examples

### Successful User Creation

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "created_at": "2025-01-12T10:00:00.000Z",
  "updated_at": "2025-01-12T10:00:00.000Z"
}
```

### Successful Wishlist Creation

```json
{
  "id": 1,
  "user_id": 1,
  "name": "My Tech Wishlist",
  "created_at": "2025-01-12T10:05:00.000Z",
  "updated_at": "2025-01-12T10:05:00.000Z"
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

Error responses include a message:

```json
{
  "message": "Error description here"
}
```
