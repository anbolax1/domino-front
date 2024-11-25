import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AccrualItem } from '../types';
import { useNavigate } from 'react-router-dom';

interface AccrualItemCardProps {
    item: AccrualItem;
}

export default function AccrualItemCard({ item }: AccrualItemCardProps) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/fine/${item.id}`)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.accrual_date}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                        ${parseFloat(item.sum_accrual).toFixed(2)}
                    </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'created'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
            </div>

            <div className="space-y-2">
                <p className="text-sm text-gray-900 dark:text-gray-100">{item.employee.fio}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.accrual_item_category.name}</p>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                    {item.files.length > 0 && (
                        <div className="flex -space-x-2">
                            {item.files.map((file, index) => (
                                <div
                                    key={file.id}
                                    className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                                >
                                    <img
                                        src={file.download_url}
                                        alt={`Attachment ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
        </div>
    );
}