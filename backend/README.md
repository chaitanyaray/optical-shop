# Optical Shop Backend API

A production-style REST API for managing products, orders, inventory, authentication, and image uploads for an Optical Shop e-commerce platform.

## Features

### Authentication

* JWT Authentication
* User Registration
* User Login
* Role-Based Authorization (Admin / Customer)

### Product Management

* Create Product
* Get All Products
* Get Product By ID
* Search Products By Name
* Update Product
* Delete Product

### Inventory Management

* Stock Validation
* Automatic Stock Deduction During Order Creation

### Order Management

* Create Orders
* View User Orders
* Admin Order Management
* MongoDB Transactions For Stock Consistency

### Media Uploads

* Multer Integration
* Cloudinary Image Uploads
* Image Replacement
* Automatic Image Cleanup On Product Deletion

### Documentation

* Swagger / OpenAPI Documentation

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Cloudinary
* Swagger

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Start development server:

```bash
npm run dev
```

---

## API Documentation

Swagger UI:

```text
http://localhost:5000/api-docs
```

---

## Project Structure

```text
src/
├── controllers/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
└── config/
```

---

## Current Roadmap

* Razorpay Integration
* Payment Verification
* Order Cancellation Stock Restore
* Product Pagination
* Search Filters
* Refresh Tokens
* Redis Caching

---

## Author

Developed as part of the Optical Shop E-commerce Project.
