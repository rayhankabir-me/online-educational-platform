import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { User } from 'src/entities/user.entity';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user: User = context.switchToHttp().getRequest().user;

    if (!user || user.role !== 'admin') {
      throw new UnauthorizedException('Sorry, only admins can do this!');
    }

    return true;
  }
}
