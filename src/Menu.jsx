import pizzaData from "../data";
import Pizza from "./Pizza";

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {pizzas.length > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.name} pizza={pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>we are still working on menu . please come back later</p>
            )}
        </main>
    );
}

export default Menu;
