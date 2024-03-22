import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

// export const GetUser = createParamDecorator(
//   (data, ctx: ExecutionContext): User => {
//     const req = ctx.switchToHttp().getRequest();
//     return req.user;
//   },
// );

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
