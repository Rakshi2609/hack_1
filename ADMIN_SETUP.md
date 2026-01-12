# Admin Setup

## Making a User an Admin

To make a user an admin (e.g., rashith.ganjimut2024@vitstudent.ac.in):

1. **The user must sign up first** through the normal registration process
2. Run the admin script:

```bash
npm run make-admin
```

This script will:
- Connect to your MongoDB database
- Find the user with the specified email (rashith.ganjimut2024@vitstudent.ac.in)
- Update their role to 'admin'

## Environment Variables Required

Make sure you have `MONGODB_URI` set in your `.env` or `.env.local` file:

```
MONGODB_URI=mongodb+srv://...
```

## Changing the Admin Email

To make a different user admin, edit the `ADMIN_EMAIL` constant in `scripts/makeAdmin.ts`:

```typescript
const ADMIN_EMAIL = 'your-email@vitstudent.ac.in';
```

Then run `npm run make-admin` again.

## Admin Privileges

Admin users have the 'admin' role in the database, which can be used to:
- Moderate content
- Manage resources
- Access admin-only features
- View analytics and reports

Check the User model in `src/models/User.ts` for role definitions.
