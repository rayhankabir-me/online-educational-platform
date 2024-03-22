// admin-or-instructor.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class RolesGards implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user: User = context.switchToHttp().getRequest().user;

    if (!user || (user.role !== 'admin' && user.role !== 'instructor')) {
      throw new UnauthorizedException(
        "Sorry, you don't have permissions to do this!",
      );
    }

    return true;
  }
}
