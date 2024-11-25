import { Fine, Notification } from '../types';
import {Accrual} from "../types/index";

export const mockFines: Fine[] = [
  {
    id: '1',
    date: '2024-03-15',
    amount: 150.00,
    status: 'pending',
    location: 'Main Street 123',
    fullName: 'John Smith',
    reason: 'Parking violation',
    attachments: [
      'https://images.unsplash.com/photo-1590377094904-1d1f23c5d65f?auto=format&fit=crop&q=80&w=800',
    ],
    comments: ['First warning issued'],
  },
  {
    id: '2',
    date: '2024-03-14',
    amount: 250.00,
    status: 'paid',
    location: 'Downtown Plaza',
    fullName: 'Emma Johnson',
    reason: 'Speed limit violation',
    attachments: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    ],
    comments: ['Paid on time'],
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Fine Issued',
    message: 'A new fine has been issued for parking violation',
    date: '2024-03-15',
    read: false,
    type: 'fine',
  },
  {
    id: '2',
    title: 'Payment Successful',
    message: 'Your payment for fine #2 has been processed',
    date: '2024-03-14',
    read: true,
    type: 'payment',
  },
];

export const mockAccrual: Accrual = {
  id: 31,
  type: "penalty",
  object_id: 1,
  status: "approved",
  sum_accrual: "12000",
  created_at: "2024-11-21 11:16:50",
  updated_at: "2024-11-21 12:22:22",
  accrual_date: "2024-11-15",
  accrual_items: [
    {
      id: 23,
      accrual_type: "penalty",
      accrual_item_category_id: 3,
      object_id: 1,
      user_id: 5,
      comment: "",
      sum_accrual: "1000",
      status: "created",
      accrual_id: 31,
      accrual_date: "2024-11-15",
      employee: {
        id: 11,
        fio: "Киселева Алиса Дамировна"
      },
      files: [
        {
          id: 20,
          file_name: "e9ffab0b910ac5f3e4898dc1c31038ed_1732187810.jpg",
          created_at: "2024-11-21 11:16:50",
          type: "image/jpeg",
          status: "created",
          comment: "",
          updated_at: "2024-11-21 11:16:50",
          download_url: "https://api.miniapp.ruqi.pro/api/v1/files/?id=20"
        }
      ],
      object: {
        id: 1,
        ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
        code: "СДЭК-СП2"
      },
      accrual_item_category: {
        id: 3,
        accrual_type: "penalty",
        name: "Алкогольное опьянение",
        order_by: 0,
        created_at: "2024-11-06 15:14:00",
        updated_at: null,
        sum: null
      }
    },
    {
      id: 24,
      accrual_type: "penalty",
      accrual_item_category_id: 2,
      object_id: 1,
      user_id: 5,
      comment: "",
      sum_accrual: "3000",
      status: "created",
      accrual_id: 31,
      accrual_date: "2024-11-15",
      employee: {
        id: 12,
        fio: "Рудаков Мирон Артёмович"
      },
      files: [
        {
          id: 21,
          file_name: "346843326750044_1732187810.jpg",
          created_at: "2024-11-21 11:16:50",
          type: "image/jpeg",
          status: "created",
          comment: "",
          updated_at: "2024-11-21 11:16:50",
          download_url: "https://api.miniapp.ruqi.pro/api/v1/files/?id=21"
        }
      ],
      object: {
        id: 1,
        ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
        code: "СДЭК-СП2"
      },
      accrual_item_category: {
        id: 2,
        accrual_type: "penalty",
        name: "Опоздание",
        order_by: 0,
        created_at: "2024-11-06 15:07:36",
        updated_at: null,
        sum: null
      }
    },
    {
      id: 25,
      accrual_type: "penalty",
      accrual_item_category_id: 4,
      object_id: 1,
      user_id: 5,
      comment: "",
      sum_accrual: "2000",
      status: "created",
      accrual_id: 31,
      accrual_date: "2024-11-15",
      employee: {
        id: 13,
        fio: "Соколов Марк Романович"
      },
      files: [
        {
          id: 22,
          file_name: "violation_evidence.jpg",
          created_at: "2024-11-21 11:16:50",
          type: "image/jpeg",
          status: "created",
          comment: "",
          updated_at: "2024-11-21 11:16:50",
          download_url: "https://api.miniapp.ruqi.pro/api/v1/files/?id=22"
        }
      ],
      object: {
        id: 1,
        ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
        code: "СДЭК-СП2"
      },
      accrual_item_category: {
        id: 4,
        accrual_type: "penalty",
        name: "Нарушение техники безопасности",
        order_by: 0,
        created_at: "2024-11-06 15:14:00",
        updated_at: null,
        sum: null
      }
    },
    {
      id: 26,
      accrual_type: "penalty",
      accrual_item_category_id: 5,
      object_id: 1,
      user_id: 5,
      comment: "",
      sum_accrual: "2500",
      status: "created",
      accrual_id: 31,
      accrual_date: "2024-11-15",
      employee: {
        id: 14,
        fio: "Козлова София Александровна"
      },
      files: [
        {
          id: 23,
          file_name: "incident_report.jpg",
          created_at: "2024-11-21 11:16:50",
          type: "image/jpeg",
          status: "created",
          comment: "",
          updated_at: "2024-11-21 11:16:50",
          download_url: "https://api.miniapp.ruqi.pro/api/v1/files/?id=23"
        }
      ],
      object: {
        id: 1,
        ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
        code: "СДЭК-СП2"
      },
      accrual_item_category: {
        id: 5,
        accrual_type: "penalty",
        name: "Порча имущества",
        order_by: 0,
        created_at: "2024-11-06 15:14:00",
        updated_at: null,
        sum: null
      }
    },
    {
      id: 27,
      accrual_type: "penalty",
      accrual_item_category_id: 6,
      object_id: 1,
      user_id: 5,
      comment: "",
      sum_accrual: "3500",
      status: "created",
      accrual_id: 31,
      accrual_date: "2024-11-15",
      employee: {
        id: 15,
        fio: "Новиков Артём Максимович"
      },
      files: [
        {
          id: 24,
          file_name: "documentation.jpg",
          created_at: "2024-11-21 11:16:50",
          type: "image/jpeg",
          status: "created",
          comment: "",
          updated_at: "2024-11-21 11:16:50",
          download_url: "https://api.miniapp.ruqi.pro/api/v1/files/?id=24"
        }
      ],
      object: {
        id: 1,
        ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
        code: "СДЭК-СП2"
      },
      accrual_item_category: {
        id: 6,
        accrual_type: "penalty",
        name: "Отсутствие документации",
        order_by: 0,
        created_at: "2024-11-06 15:14:00",
        updated_at: null,
        sum: null
      }
    }
  ],
  object: {
    id: 1,
    ext_uuid: "059b13dd-3d0b-4296-a1c1-7fcafea647c0",
    code: "СДЭК-СП2"
  }
};