import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Button from './ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Event Listener to toggle navbar background and text color
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    // Mobile Menu Toggle Handler
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className={`w-full fixed top-0 z-50 ${isScrolled ? 'bg-white shadow-md text-slate-900 border-b border-slate-800': 'bg-transparent text-white'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between h-16 ">
                    {/* Logo Section */}
                    <div className="shrink-0 font-bold text-xl">
                        <a href="#hero" onClick={() => setIsMenuOpen(false)}>{"<Williams />"}</a>
                    </div>
                    {/* Medium-Plus Links */}
                    <div className="hidden md:flex flex-row items-center gap-8">
                        <ul className="flex flex-row gap-4">
                            <li>
                                <a href="#about" className="hover:text-bold hover:border-b hover:border-white hover:pb-2">About</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-bold hover:border-b hover:border-white hover:pb-2">Projects</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-bold hover:border-b hover:border-white hover:pb-2">Skills</a>
                            </li>
                            <li>
                                <a href="#resume" className="hover:text-bold hover:border-b hover:border-white hover:pb-2">Resume</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-bold hover:border-b hover:border-white hover:pb-2">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Button onClick={toggleMenu}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown Options */}
            <div className={`md:hidden absolute top-16 left-0 shadow-2xl w-full bg-slate-900 border-b border-slate-500 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}`}>
                <ul className="flex flex-col p-6 gap-4 text-white">
                    <li><a href="#about" onClick={toggleMenu} className="block py-2 text-lg">About</a></li>
                    <li><a href="#projects" onClick={toggleMenu} className="block py-2 text-lg">Projects</a></li>
                    <li><a href="#skills" onClick={toggleMenu} className="block py-2 text-lg">Skills</a></li>
                    <li><a href="#resume" onClick={toggleMenu} className="block py-2 text-lg">Resume</a></li>
                    <li><a href="#contact" onClick={toggleMenu} className="block py-2 text-lg">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}



{/* <h1 className="text-3xl font-bold text-blue-600 underline">
            Tailwind is working!
        </h1> */}