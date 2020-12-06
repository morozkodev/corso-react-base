import React from 'react';

class BarraRicerca extends React.Component {
    render() {
        return ( 
            <div>
            <form>
            <input type="text" placeholder="Cerca..." />
            <p>
                <input type="checkbox" /><label>Mostra solo attivi</label>
            </p>
            </form>
            </div>
        );
    }
}

export default BarraRicerca;