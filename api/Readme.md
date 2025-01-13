# Wishlist Management System API

A complete REST API system for managing wishlists, collections, and products with user authentication.

## Setup & Installation

1. First, populate the database with initial data required for testing:

```sql
-- Run these SQL scripts in sequence to populate required tables
-- 1. Insert brands
INSERT INTO brands (name, created_at, updated_at) VALUES
('Apple', NOW(), NOW()),
('Samsung', NOW(), NOW()),
('Sony', NOW(), NOW());

-- 2. Insert HSN codes
INSERT INTO hsn_codes (code, description, created_at, updated_at) VALUES
('8517', 'Mobile Phones and Electronics', NOW(), NOW()),
('8471', 'Computers and Accessories', NOW(), NOW()),
('8518', 'Audio Equipment', NOW(), NOW());

-- 3. Insert user roles
INSERT INTO user_roles (name, created_at, updated_at) VALUES
('Admin', NOW(), NOW()),
('Customer', NOW(), NOW());
```

2. Set up your environment variables:

```env
BASE_URL=http://localhost:3000
```

## API Endpoints

### Users Management

#### 1. Create User

- **Endpoint**: `POST /api/users`
- **Description**: Register a new user in the system
- **Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123",
  "role_id": 1
}
```

#### 2. Get All Users

- **Endpoint**: `GET /api/users`
- **Description**: Retrieve a list of all registered users
- **Access**: Admin only

### Products Management

#### 1. Create Product

- **Endpoint**: `POST /api/products`
- **Description**: Add a new product to the system
- **Request Body**:

```json
{
  "name": "iPhone 15 Pro",
  "brand_id": 1,
  "hsn_code_id": 1,
  "description": "Latest iPhone model",
  "price": 999.99,
  "gst": 18.0,
  "stock": 100,
  "image_url": "http://example.com/iphone.jpg"
}
```

#### 2. Get All Products

- **Endpoint**: `GET /api/products`
- **Description**: Retrieve a list of all available products

### Wishlists Management

#### 1. Create/Get Wishlist

- **Endpoint**: `POST /api/wishlists`
- **Description**: Create a new wishlist for a user
- **Request Body**:

```json
{
  "user_id": 1,
  "name": "My Shopping List"
}
```

#### 2. Get User's Wishlist

- **Endpoint**: `GET /api/wishlists/user/{user_id}`
- **Description**: Retrieve all wishlists belonging to a specific user

### Collections Management

#### 1. Create Collection

- **Endpoint**: `POST /api/collections`
- **Description**: Create a new collection within a wishlist
- **Request Body**:

```json
{
  "name": "Electronics",
  "wishlist_id": 1,
  "description": "My electronics wishlist"
}
```

#### 2. Get Wishlist Collections

- **Endpoint**: `GET /api/wishlists/{wishlist_id}/collections`
- **Description**: Retrieve all collections in a specific wishlist

### Collection Items Management

#### 1. Add Item to Collection

- **Endpoint**: `POST /api/collections/{collection_id}/items`
- **Description**: Add a product to a specific collection
- **Request Body**:

```json
{
  "product_id": 1
}
```

#### 2. Remove Item from Collection

- **Endpoint**: `DELETE /api/collections/{collection_id}/items/{item_id}`
- **Description**: Remove a specific item from a collection

## Data Flow Example

1. Create a user (POST /api/users)
2. Create a wishlist for the user (POST /api/wishlists)
3. Create a collection in the wishlist (POST /api/collections)
4. Add items to the collection (POST /api/collections/{id}/items)
5. View all collections in wishlist (GET /api/wishlists/{id}/collections)

## Error Handling

The API returns standard HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Testing

1. Use the provided Postman collection for testing all endpoints
2. Make sure to first populate the database using the SQL scripts provided
3. Test endpoints in the sequence mentioned in the Data Flow Example
