import * as jwt from 'jsonwebtoken';
import { User } from 'src/users/user.schema';

const JWT_SECRET = process.env.JWT_SECRET || 'your-dev-secret';

export function generateToken(user: User) {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}