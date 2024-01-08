interface Icard {
    id: number,
    paragraph: string,
    details: string
}

const Card = ({ id, paragraph, details }: Icard) => {
    console.log(id);
    return (
        <div className="m-5">
            <h1>Card {id}</h1>

            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    );
};

export default Card;
