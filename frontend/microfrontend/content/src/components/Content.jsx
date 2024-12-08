import Card from "./Card.jsx";

export const Content = () => {
    const cards = []

    const onCardClick = () => {}
    const onCardLike = () => {}
    const onCardDelete = () => {}
    return (
        <section className="places page__section">
            <ul className="places__list">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))}
            </ul>
        </section>
    )
}
