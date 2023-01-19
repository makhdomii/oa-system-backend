export class CreateTicketDto {
  title: string;
  description: Array<{ content: string; type: string; time: string }>;
  user_id: string;
  status: 'pending' | 'answered' | 'resolved' | 'in progress';
}
