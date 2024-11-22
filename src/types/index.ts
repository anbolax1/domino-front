export interface Fine {
  id: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  location: string;
  fullName: string;
  reason: string;
  attachments: string[];
  comments: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'fine' | 'system' | 'payment';
}