import { character1, character2, character3 } from '../chars';
import Team from '../app';

test('add different members', () => {
  const team = new Team();
  team.add(character1);
  team.add(character3);
  const result = team.members;
  const expected = new Set([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
  ]);
  expect(result).toEqual(expected);
});

test('add similar members', () => {
  const team = new Team();
  team.add(character1);
  expect(() => team.add(character2)).toThrow();
});

test('add several members', () => {
  const team = new Team();
  team.addAll(character1, character2, character3);
  const result = team.members;
  const expected = new Set([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
  ]);
  expect(result).toEqual(expected);
});

test('conver to array', () => {
  const team = new Team();
  team.members = new Set([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
  ]);
  const result = team.toArray();
  const expected = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    },
  ];
  expect(result).toEqual(expected);
});
