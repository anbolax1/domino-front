import React from 'react';
import { ArrowLeft, Calendar, Building2, DollarSign } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AccrualItemCard from '../components/AccrualItemCard';
import { mockAccrual } from '../data/mockData';
import { format, parseISO } from 'date-fns';

export default function AccrualDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const accrual = mockAccrual; // In a real app, we would fetch this based on the ID

    const formatDate = (dateString: string) => {
        return format(parseISO(dateString), 'MMM dd, yyyy');
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'rejected':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default:
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            {/* Fixed Header Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-md mx-auto px-4 pt-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-600 dark:text-gray-300 mb-6"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>

                    <div className="space-y-6 pb-6">
                        <div className="flex justify-between items-start">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Accrual #{accrual.id}
                            </h1>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(accrual.status)}`}>
                {accrual.status.charAt(0).toUpperCase() + accrual.status.slice(1)}
              </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span className="text-sm">Date</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-medium">
                                    {formatDate(accrual.accrual_date)}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <Building2 className="w-4 h-4 mr-2" />
                                    <span className="text-sm">Object</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-medium">
                                    {accrual.object.code}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                    <DollarSign className="w-4 h-4 mr-2" />
                                    <span className="text-sm">Total</span>
                                </div>
                                <p className="text-gray-900 dark:text-white font-medium">
                                    ${parseFloat(accrual.sum_accrual).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-auto">
                <div className="max-w-md mx-auto px-4 py-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Fines List
                    </h2>
                    <div className="space-y-4 pb-20">
                        {accrual.accrual_items.map((item) => (
                            <AccrualItemCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            <Navigation />
        </div>
    );
}