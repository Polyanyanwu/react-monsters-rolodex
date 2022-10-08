import { Component } from 'react';

class CardList extends Component {

    render(){
        const { monsters } = this.props;
        return (
            <div>
                {monsters.map((monster) => {
                return <h1 key={monster.id}>{monster.name}</h1>
            })}
              </div>
            );

        // return <div>Hello I'm the CardList Component</div>
    }
}

export default CardList;