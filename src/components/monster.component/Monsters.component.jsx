import React from 'react'
import { Card } from '../card.component/card.component';
import './monster.styles.css'

export const Monsters = ({monsters}) => (
 <div className='card-list'>
   {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
 </div>
);