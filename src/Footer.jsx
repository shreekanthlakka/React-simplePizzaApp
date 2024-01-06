function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}
            <div className="order">
                {isOpen ? "We are open" : "We are closed"}
            </div>
            <button className="btn">Order</button>
        </footer>
    );
}

export default Footer;
