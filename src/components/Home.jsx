import React from 'react'

const Home = () => {
    return (
        <div className='min-h-screen flex-[3] transition-all
    duration-500 dark:bg-black dark:text-white'>
            <main className='flex max-w-[1000px] flex-col gap-10 p-5
        md:mx-10 md:py-14'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold md:text-4xl'>
                        Обо мне
                    </h1>
                    <p className='text-sm md:text-base'>
                        Ищу работу в качестве backend-разработчка на стеке <span className='font-semibold'>Python/Django/DRF</span>
                    </p>
                    <p>
                        В основном знаю Python, но также имею начальные знания в JS/React/Tailwind, есть интерес развиваться в сторону Fullstack-разработчика.
                        В данный момент изучаю фреймворк FastAPI.
                    </p>
                    <p className='font-semibold'>Форматы работы</p>
                    <ul className='flex flex-col pl-5'>
                        <li>
                            Офис
                        </li>
                        <li>
                            Удаленная работа
                        </li>
                        <li>
                            Стажировка
                        </li>
                    </ul>
                    <p>
                        <span className='font-semibold'>Часовой пояс</span>
                        <p className=' pl-5'>+7 по Москве</p>
                    </p>
                </div>
                <div className="max-w-4xl">
                    <h1 className="text-2xl font-bold md:text-4xl mb-3">
                        Опыт работы
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Системный администратор (2020-2024)
                    </p>
                    <ul className="space-y-4">
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Администрирование домена на Windows:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Создание необходимых ролей: настройка DHCP, DNS, WSUS</li>
                                <li>Настройка групповых политик</li>
                                <li>Плановые работы по установке обновлений и переходу на новые версии ОС</li>
                            </ul>
                        </li>
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Работа с гипервизором Hyper-V:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Создание виртуальных машин</li>
                                <li>Миграция</li>
                                <li>Резервное копирование</li>
                                <li>Решение возникающих проблем, устранение ошибок</li>
                            </ul>
                        </li>
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Организация резервного копирования баз данных:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Написание скриптов на Powershell для автоматизации работ по резервному копированию БД</li>
                                <li>Проверка целостности, обеспечение отказоустойчивости копий при помощи распределения копий по разным серверам</li>
                            </ul>
                        </li>
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Работа с межсетевым экраном:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Создание политик доступа к сетевым ресурсам</li>
                                <li>Настройка списков, отслеживание актуальных угроз</li>
                                <li>Настройка прозрачной аутентификации пользователей через Kerberos</li>
                            </ul>
                        </li>
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Выполнение работ по обслуживанию физических серверов:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Создание RAID</li>
                                <li>Установка и настройка оборудования</li>
                                <li>Плановое обслуживание: ремонт, замена комплектующих</li>
                            </ul>
                        </li>
                        <li className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Другие задачи:</h2>
                            <ul className="list-disc pl-7 space-y-1">
                                <li>Решение проблем с ПО и рабочими станциями</li>
                                <li>Проведение диагностики и ремонта оборудования</li>
                                <li>Планиование закупок оборудования, составление тех.заданий, общение с поставщиками</li>
                                <li>Работа с ЭЦП: выпуск, установка, продление, решение проблем, возникающее при их эксплуатации</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="space-y-10">
                    <h1 className='text-2xl font-bold md:text-4xl'>
                        Пет-проекты
                    </h1>
                    <div class="">
                        <h1 class="text-3xl font-bold mb-4 text-left">Создание API и фронтенда для приложения в стиле сайта 9GAG</h1>

                        <div class="space-y-4">
                            <section class="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                                <h2 class="text-xl font-semibold mb-2">Технологии и функциональность</h2>
                                <ul class="list-disc list-inside space-y-2 ml-5">
                                    <li>Django/Django REST Framework</li>
                                    <li>React/Tailwind CSS</li>
                                    <li>Аутентификация пользователей по логину/паролю и JWT-токенам</li>
                                    <li>CRUD-операции с авторизацией пользователей</li>
                                    <li>Запросы к БД через Django ORM</li>
                                    <li>Отборка постов по новизне, популярности, пользователю и тегу</li>
                                </ul>
                            </section>

                            <section class="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                                <h2 class="text-xl font-semibold mb-2">Функции фронтенд-приложения</h2>
                                <ul class="list-disc list-inside space-y-2 ml-5">
                                    <li>CRUD-операции</li>
                                    <li>Аутентификация и авторизация</li>
                                    <li>Отборка постов по различным критериям</li>
                                </ul>
                            </section>

                            <section class="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                                <h2 class="text-xl font-semibold mb-2">Развертывание</h2>
                                <p class="mb-2">Контейнеризация backend и frontend при помощи Docker</p>
                                <p class="mb-2">Написание docker-compose файла для быстрого развертывания</p>
                                <p>Контейнеры поддерживают только Linux/AMD64</p>
                            </section>

                            <section class="bg-white dark:bg-black p-4 rounded-lg shadow-md">
                                <h2 class="text-xl font-semibold mb-2">Инструкции по запуску контейнеров можно посмотреть</h2>
                                <p><a href="https://github.com/Frogger155/pet1-launch" class="text-blue-600 hover:underline">На моем Github</a></p>
                            </section>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home