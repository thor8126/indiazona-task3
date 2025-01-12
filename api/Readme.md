# Project Setup and Testing Guide

This guide explains how to set up the project, add test data, generate a test token, and use the provided Postman collection for API testing.

---

## **1. Add Sample Products**

To add initial sample products to the database, execute the following SQL command:

```sql
INSERT INTO products (
    product_name,
    brand_id,
    packed_weight,
    product_description,
    thumbnail_image_url,
    is_active,
    created_on,
    updated_on
) VALUES
    ('Wireless Earbuds', 2, 0.15, 'Compact and high-quality wireless earbuds.', 'https://example.com/wireless-earbuds.jpg', true, NOW(), NOW()),
    ('Gaming Mouse', 3, 0.25, 'Ergonomic gaming mouse with customizable buttons.', 'https://example.com/gaming-mouse.jpg', true, NOW(), NOW()),
    ('Smartphone Stand', 4, 0.50, 'Durable and adjustable stand for smartphones.', 'https://example.com/smartphone-stand.jpg', true, NOW(), NOW()),
    ('Bluetooth Speaker', 5, 1.20, 'Portable Bluetooth speaker with powerful bass.', 'https://example.com/bluetooth-speaker.jpg', true, NOW(), NOW());
```

## **2. Add a Test User**

Add a test user to the `users` table with the following SQL command:

```sql
INSERT INTO users (role_id, name, email)
VALUES (1, 'Test User', 'test@example.com');
```

Note:
Replace role_id with the appropriate role ID for the test user if applicable.

## **3. Generate a Test Token**

To generate a test token for API testing, send a `POST` request to the following route:

### Route:

```
POST localhost:3000/api/test-token
```

### Steps to Generate the Token:

1. Ensure your application is running.
2. Use a tool like **Postman** or **cURL** to send a `POST` request to `/api/test-token`.
3. The response will include the generated JWT token.

### Notes:

- The JWT will be valid for 1 hour or based on the expiration settings in your application.
- Include the generated token in the `Authorization` header for subsequent API requests that require authentication.

## **4. Use the Postman Collection**

### Import Postman Collection:

1. Open **Postman**.
2. Click on the **Import** button in the toolbar.
3. Upload the provided `.json` file containing the Postman collection for this project.

### Using the Collection:

- The collection includes preconfigured requests for testing the API endpoints.
- For secured endpoints:
  1. Generate a test token using the `/api/test-token` route.
  2. Copy the generated JWT token.
  3. In Postman, add the token to the `Authorization` header using the `Bearer <token>` format.

### Notes:

- The Postman collection covers endpoints for product management, user management, and token validation.
- Update the base URL in the collection if your application is running on a different port or domain.

### Example Authorization Header:

```
Authorization: Bearer <your_generated_token>
```

Once imported, you can use Postman to test all the available API routes easily.

To run this project:

1. Installation:

```bash
npm install
```

2. Configure environment variables in `.env`

3. Run migrations:

```bash
npx sequelize-cli db:migrate
```

4. Start the server:

```bash
npm run dev
```

API Documentation:

Collections:

- `POST /api/collections` - Create a new collection
- `GET /api/collections` - Get all collections for authenticated user
- `PUT /api/collections/:id` - Update a collection
- `DELETE /api/collections/:id` - Delete a collection

Wishlist Items:

- `POST /api/wishlist/items` - Add item to collection
- `GET /api/wishlist/items/:collection_id` - Get items in a collection
- `GET /api/wishlist/items` - Get all wishlist items
- `DELETE /api/wishlist/items/:id` - Delete an item
