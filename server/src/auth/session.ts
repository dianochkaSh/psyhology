import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../user/schemas/user.schema';

@Injectable()
export class Session extends PassportSerializer {
  serializeUser(user: User, done: (err: Error | null, user: any) => void,): void {
    done(null, user);
  }

  deserializeUser(payload: string, done: (err: Error | null, payload: string) => void
  ): void {
    done(null, payload);
  }
}
