import React, {useEffect, useState} from 'react';
import { mockFines } from '../data/mockData';
import AccrualCard from '../components/AccrualCard';
import Navigation from '../components/Navigation';

export default function AccrualsList() {
    const [fines, setFines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для загрузки данных из API
        const fetchFines = async () => {
            try {
                const response = await fetch(
                    'https://api.miniapp.ruqi.pro/api/v1/accruals/list/?limit=10&page=1&sort=id&order=desc&type=penalty',
                    {
                        method: 'GET', // Метод запроса
                        headers: {
                            'Content-Type': 'application/json', // Указываем тип контента
                            'Init-Data': 'dev', // Добавляем заголовок Init-Data
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }

                const data = await response.json();
                setFines(data.data || []); // Предполагается, что данные находятся в results
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
            <Navigation />
        </div>
    );
}