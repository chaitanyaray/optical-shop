
## The real registration flow:

Request
   ↓
Validation (Zod)
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
MongoDB
   ↓
bcrypt hash
   ↓
JWT generation