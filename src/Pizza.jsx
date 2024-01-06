/*eslint-disable react/prop-types*/

function Pizza({ pizza }) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                {!pizza.soldOut && <span>Price : {pizza.price}</span>}
            </div>
        </li>
    );
}

export default Pizza;
