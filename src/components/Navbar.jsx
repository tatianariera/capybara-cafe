const Navbar = () => {
    return (
        <nav className="bg-brand-light text-brand px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-brand transition">
                        capybara café
                    </a>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/prices" className="hover:text-brand transition font-bold">
                            prices
                        </a>
                    </li>
                    <li>
                        <a href="/capybaras" className="hover:text-brand transition font-bold">
                            our capybaras
                        </a>
                    </li>
                    <li>
                        <a href="/reservations" className="hover:text-brand transition font-bold">
                            reservations
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
