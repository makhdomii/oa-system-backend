export class CreateUserDto {
  readonly username: string;
  password: string;
  readonly email: string;
  phone?: string;
  name: string;
}
