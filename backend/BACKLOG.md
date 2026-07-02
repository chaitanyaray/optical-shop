# Backend Backlog

## High Priority

* [ ] Razorpay payment integration
* [ ] Payment verification webhook
* [ ] Restore stock on order cancellation
* [ ] Order status workflow (PENDING → PROCESSING → COMPLETED → CANCELLED)
* [ ] Deploy backend to Render
* [ ] Environment variable validation

## Medium Priority

* [ ] Product pagination
* [ ] Product search & filters
* [ ] Logout endpoint
* [ ] Logout from all devices
* [ ] Refresh token implementation
* [ ] Global request validation
* [ ] Error logging system

## Low Priority

* [ ] Two-factor authentication (2FA)
* [ ] Redis caching
* [ ] Rate limiting
* [ ] Email notifications
* [ ] Unit tests
* [ ] Integration tests
* [ ] CI/CD pipeline

---

# Completed

## Authentication

* [x] User registration
* [x] User login
* [x] JWT authentication
* [x] Role-based authorization

## Product Management

* [x] Create product
* [x] Get all products
* [x] Get product by ID
* [x] Search product by name
* [x] Update product
* [x] Delete product

## Inventory

* [x] Stock deduction on order creation
* [x] Stock validation before purchase

## Orders

* [x] Create order
* [x] Get user orders
* [x] Get order by ID
* [x] Update order
* [x] Delete order
* [x] Admin order management
* [x] Add MongoDB transaction support to order creation

## Media

* [x] Multer integration
* [x] Cloudinary image uploads
* [x] Cloudinary image replacement
* [x] Cloudinary image cleanup on product deletion

## Documentation

* [x] Swagger / OpenAPI documentation

## Infrastructure

* [x] MongoDB Atlas integration
* [x] Environment configuration
* [x] GitHub repository setup
