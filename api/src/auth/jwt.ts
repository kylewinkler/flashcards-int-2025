import * as jwt from 'jsonwebtoken';
import { User } from 'src/users/user.schema';

export function generateToken(user: User) {
  const JWT_SECRET = process.env.JWT_SECRET ?? 'your-dev-secret';
  const payload = {
    sub: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}
