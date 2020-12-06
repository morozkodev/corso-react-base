import React from 'react';
import './SchedaProdotto.css';

import NomeProdotto from './scheda-prodotto/NomeProdotto';
import ImmagineProdotto from './scheda-prodotto/ImmagineProdotto';
import PrezzoProdotto from './scheda-prodotto/PrezzoProdotto';
import DescrizioneProdotto from './scheda-prodotto/DescrizioneProdotto';
import BottoneProdotto from './scheda-prodotto/BottoneProdotto';

const prod = {
    productImage: 'https://plchldr.co/i/300x250',
    productImageAlt: 'Testo alternativo imagine',
    productPrice: 23.50,
    productDescription: 'Descrizione prodotto 2'
}

class SchedaProdotto extends React.Component {
    render() {
        return (
            <div className="scheda-prodotto">
                <NomeProdotto nome="Mio prodotto"/>
                <ImmagineProdotto src={prod.productImage} alt={prod.productImageAlt}/>
                <PrezzoProdotto price={prod.productPrice}/>
                <DescrizioneProdotto desc={prod.productDescription}/>
                <BottoneProdotto/>
            </div>
        );
    }

}

export default SchedaProdotto;