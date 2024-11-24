import React, {useEffect, useState} from 'react';
import AccrualCard from '../components/AccrualCard';

export default function AccrualsList() {
    const [fines, setFines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFines = async () => {
            try {
                const response = await fetch(
                    'https://api.miniapp.ruqi.pro/api/v1/accruals/list/?limit=10&page=1&sort=id&order=desc&type=penalty',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Init-Data': 'dev', //todo переделать на отправку токена
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }

                const data = await response.json();
                setFines(data.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFines();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md mx-auto px-4 pt-6 pb-20">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Штрафы
                </h1>

                {loading && <p className="text-gray-500">Загрузка...</p>}
                {error && <p className="text-red-500">Ошибка: {error}</p>}

                <div className="space-y-4">
                    {!loading && !error && fines.length === 0 && (
                        <p className="text-gray-500">Нет данных о штрафах.</p>
                    )}
                    {fines.map((fine) => (
                        <AccrualCard key={fine.id} fine={fine} />
                    ))}
                </div>
            </div>
        </div>
    );
}