import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { User } from 'src/entities/user.entity';

@Injectable()
export class InstructorGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user: User = context.switchToHttp().getRequest().user;

    if (!user || user.role !== 'instructor') {
      throw new UnauthorizedException('Sorry, only instructors can do this!');
    }

    return true;
  }
}
