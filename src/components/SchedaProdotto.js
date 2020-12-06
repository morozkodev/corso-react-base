import React from 'react';
import './SchedaProdotto.css';

import NomeProdotto from './scheda-prodotto/NomeProdotto';
import ImmagineProdotto from './scheda-prodotto/ImmagineProdotto';
import PrezzoProdotto from './scheda-prodotto/PrezzoProdotto';
import DescrizioneProdotto from './scheda-prodotto/DescrizioneProdotto';
import BottoneProdotto from './scheda-prodotto/BottoneProdotto';

class SchedaProdotto extends React.Component {
    render() {
        return (
            <div className="scheda-prodotto">
                <NomeProdotto nome="Mio prodotto"/>
                <ImmagineProdotto/>
                <PrezzoProdotto/>
                <DescrizioneProdotto/>
                <BottoneProdotto/>
            </div>
        );
    }

}

export default SchedaProdotto;