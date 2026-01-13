const Navbar = () => {
    return (
        <nav className="bg-pink-100 text-pink-400 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-pink-400 transition">

                        capybara café
                    </a>
                </div>

                <ul className="flex space-x-6">
                    <li>
                        <a href="/prices" className="hover:text-pink-400 transition font-bold">
                            prices
                        </a>
                    </li>
                    <li>
                        <a href="/capybaras" className="hover:text-pink-400 transition font-bold">
                            our capybaras
                        </a>
                    </li>
                                        <li>
                        <a href="/reservations" className="hover:text-pink-400 transition font-bold">
                           reservations
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
