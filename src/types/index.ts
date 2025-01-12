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

export interface Object {
  id: number;
  ext_uuid: string;
  code: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  meta: {
    per_page: number;
    current_page: number;
    from: number;
    to: number;
    last_page: number;
    total: number;
  };
  data: T[];
}

export interface Executor {
  id: string;
  fullName: string;
  sum: string;
  reason: string;
  comment: string;
  files: FileWithComment[];
}

export interface FileWithComment {
  file: File;
  comment: string;
  tempId: string;
  executorId: string;
}

export interface ExecutorFormData {
  fullName: string;
  sum: string;
  reason: string;
  date: string;
  objectId: string;
  executors: Executor[];
}

export interface Accrual {
  id: number;
  type: string;
  object_id: number;
  status: string;
  sum_accrual: string;
  created_at: string;
  updated_at: string;
  accrual_date: string;
  accrual_items: AccrualItem[];
  object: Object;
}

export interface AccrualItem {
  id: number;
  accrual_type: string;
  accrual_item_category_id: number;
  object_id: number;
  user_id: number;
  comment: string;
  sum_accrual: string;
  status: string;
  accrual_id: number;
  accrual_date: string;
  employee: Employee;
  files: AccrualFile[];
  object: Object;
  accrual_item_category: AccrualItemCategory;
}

export interface Employee {
  id: number;
  fio: string;
}

export interface AccrualFile {
  id: number;
  file_name: string;
  type: string;
  comment: string;
  download_url: string;
  created_at: string;
  updated_at: string;
}

export interface AccrualItemCategory {
  id: number;
  accrual_type: string;
  name: string;
  order_by: number;
  created_at: string;
  updated_at: string | null;
  sum: number | null;
}