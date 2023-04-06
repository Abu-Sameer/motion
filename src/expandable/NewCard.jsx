import React from 'react';
import Card from './Card';
import './Card.css';
import { LayoutGroup } from 'framer-motion';

const CardData = [
  {
    id: 2,
    title: 'Framer Layout',
    textOne:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quos autem perferendis explicabo assumenda eaque quia id atque laboriosam repellat.',
    textTwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, aut?',
  },
  {
    id: 1,
    title: 'Framer Motion',
    textOne:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quos autem perferendis explicabo assumenda eaque quia id atque laboriosam repellat.',
    textTwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, aut?',
  },
  {
    id: 3,
    title: 'Framer Animate',
    textOne:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quos autem perferendis explicabo assumenda eaque quia id atque laboriosam repellat.',
    textTwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, aut?',
  },
];

export default function NewCard({ id }) {
  return (
    <LayoutGroup id={id}>
      {CardData.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            textOne={item.textOne}
            textTwo={item.textTwo}
          />
        );
      })}
    </LayoutGroup>
  );
}
