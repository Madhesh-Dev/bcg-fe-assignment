import WidgetCard from "./WidgetCard/WidgetCard";
import classes from "./CardsWidget.module.css";

function CardsWidget({ cards }) {
    return (
        <div className={classes.scrollContainer}>
            {cards.map((card, index) => (
                <WidgetCard card={card} key={index} />
            ))}
        </div>
    );
}

export default CardsWidget;
