function Card(props) {
    return (
        <div className="card">
            {props.isNew && LabelNew()}
            <div className="card-body">
                <img className="card-img" src={props.imgLink} alt={props.title}/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <span className="card-price">${props.price}</span>
                <button className="card-add">Заказать</button>
            </div>
        </div>
    );
}

function LabelNew() {
    return (
        <img className="label-img" src="/images/new.png" alt="New"/>
    );
}

export default Card;