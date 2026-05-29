import React from "react";


/**
 * React.Component la classe de base des composants à état
 * 
 * - Hérite du mécanisme de réactivité.
 * - Hérite d'un cycle de vie (Etape de création et desctruction)
 *      - Instanciation Mémoire
 *      - DOM initialisation
 *      - DOM update
 *      - Destruction
 */
class ClassHeader extends React.Component {

    // placer une valeur dans l'objet d'état garantit un rendu en cas de modification
    state ={
        time : Date.now()
    }

    tick(){
        this.setState({
            time : Date.now()
        }) // Un nouvel objet d'état déclenchera un rafraichissement
        console.log('time', this.state.time)
    }
    timerID = null

    componentDidMount(): void {
        this.timerID =  setInterval( () => this.tick() ,  1000 );
    }
    
    componentWillUnmount(): void {
        clearInterval(this.timerID)
    }


    render() {
        return (
            <header>
                Application Header - { this.state.time }
            </header>
        )
    }
}

export default ClassHeader;