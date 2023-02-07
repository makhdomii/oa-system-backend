export class CreateAccountDto {
  protocol: string;
  ip: string;
  settings: string;
  user_id: string;
  status: 'active' | 'out of date' | 'pending';
}
