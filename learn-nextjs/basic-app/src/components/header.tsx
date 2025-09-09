const Navbar = () => {
    return <>
        <nav className={'container'}>
            <h1 className={'font-bold text-xl'}>Home</h1>
            <ul className={'flex gap-2'}>
                <li>Performance</li>
                <li>Reliability</li>
                <li>Login</li>
            </ul>
        </nav>
    </>
}
export default Navbar;
