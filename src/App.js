import React from 'react'
import './App.css';
import Card from './components/Card';

const masShoesJSON = require('./JSON/masShoesJSON.json');
class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClick: false,
            priceVar: 0,
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.onShowBtn = this.onShowBtn.bind(this);
    }

    handleChange = event => {
        this.setState({ btnClick: false });
        this.setState({ priceVar: event.target.value });
        event.preventDefault();
    }

    onShowBtn = () => {
        this.setState({ btnClick: true });
    }

    render() {
        return (
            <>
                <div className='container1'>
                    <label>Задайте цену для вывода карточек товара: </label>
                    <input onChange={this.handleChange} />
                    <button onClick={this.onShowBtn}>Показать</button>
                </div>

                <div className='container2'>
                {
                    this.state.btnClick 
                    ?  
                    masShoesJSON.filter((Shoes) => { return Shoes.price > this.state.priceVar})
                                .map((Shoes, index) => 
                                <Card key={index.toString()} title={Shoes.title} price={Shoes.price} 
                                    description={Shoes.description} imgLink={Shoes.imgLink}  
                                    isNew={Shoes.isNew}/>
                                )
                    : 
                        masShoesJSON.map((Shoes, index) => 
                            <Card key={index.toString()} title={Shoes.title} price={Shoes.price} 
                                description={Shoes.description} imgLink={Shoes.imgLink}  
                                isNew={Shoes.isNew}/>
                        )
                }
                </div>
            </>
        );
    }
}

export default CardList;
