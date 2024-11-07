import React from 'react'
import { BiBriefcase, BiCurrentLocation, BiEnvelope, BiLogoDocker, BiLogoGithub, BiLogoTelegram, BiMoon, BiSun } from 'react-icons/bi'

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white
    sm:border-r dark: border-gray-700">
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='text-center space-y-1'>
                    <h1 className='text-4xl font-light'>
                        Никита Кудрявцев
                    </h1>
                    <h3 className='text-xl font-light pt-3'>
                        Backend-разработчик
                    </h3>
                </div>

                <button
                    className='absolute right-10 top-10'
                    onClick={toggleDarkMode}
                >
                    {
                        darkMode ? (
                            <BiSun className='text-2xl' />
                        ) : (
                            <BiMoon className='text-2xl' />
                        )
                    }
                </button>
            </div>
            <div className="flex flex-col items-start justify-start gap-5
        border-b p-5 dark:border-gray-700">
                <ul className='space-y-3'>
                    <li className="flex items-center gap-2">
                        <BiCurrentLocation className='text-xl' />
                        <span>Россия, Хабаровск</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <BiEnvelope className='text-xl' />
                        <span>nikandrkudryavtsev@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <BiLogoTelegram className='text-xl' />
                        <span className='font-style: italic'><a href="https://t.me/fr155wr" class="hover:underline">fr155wr</a></span>
                    </li>
                </ul>
                <div className='flex flex-col items-start justify-start
            gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>
                        МОИ СТРАНИЦЫ
                    </h1>
                    <ul className='space-y-3'>
                        <li className="flex items-center gap-2">
                            <BiLogoGithub className='text-xl' />
                            <span>Frogger155</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoDocker className='text-xl' />
                            <span>frogger155</span>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col items-start justify-start
            gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className='text-base font-semibold md:text-2xl'>
                        ОБРАЗОВАНИЕ
                    </h1>
                    <ul>
                        <li className='relative flex flex-col gap-1
                    border-1 p-6 '>
                            <span className='font-semibold md:text-lg'>ДВГУПС</span>
                            <span>Прикладная математика и информатика</span>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col items-start justify-start
            gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>
                        НАВЫКИ
                    </h1>
                    <div className='flex flex-wrap gap-3'>
                        <div className="flex flex-wrap gap-3">
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Python
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Django/DRF
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                SQL
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Docker
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Docker Compose
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Linux
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                JS
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                React
                            </span>
                            <span className='rounded-xl bg-black 
                        text-white p-3 text-center dark:bg-white dark:text-black'>
                                Tailwind
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start
            gap-5 border-b p-5 dark:border-gray-700'>
                    <h1 className='text-base font-semibold md:text-2xl'>
                        ЯЗЫКИ
                    </h1>
                    <ul className='flex flex-wrap gap-5 md:text-lg'>
                        <li>Русский</li>
                        <li>Английский (В2)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft