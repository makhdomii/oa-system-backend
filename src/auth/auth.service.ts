import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { username: string; password: string }) {
    const { username }: { username: string } = user;
    const userData = await this.usersService.findOne(username);
    console.log(userData);
    if (!userData) {
      throw new HttpException('there is no user', HttpStatus.BAD_REQUEST);
    }
    const payload = {
      username: user.username,
      // sub: user.userId
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
