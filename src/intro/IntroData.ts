import {Message} from '../types';

export const Messages = (
  defineChild: string | undefined,
  nameUser: string,
): Message[] => {
  return [
    {
      id: 1,
      text: 'Mi nombre es Marco',
    },
    {
      id: 2,
      text: 'Y soy el profesor de Matemáticas',
    },
    {
      id: 3,
      text: 'Quiero que conozcas el mundo de los números',
    },
    {
      id: 4,
      text: 'Pero primero tienes que presentarte',
    },
    {
      id: 5,
      text: 'Entonces ¿Eres un chico o una chica?',
    },
    {
      id: 6,
      text:
        'Ya veo ¿Así que eres ' +
        `${
          defineChild === 'male'
            ? 'un chico'
            : defineChild === 'female'
            ? 'una chica'
            : 'une moderne'
        }` +
        '?',
    },
    {
      id: 7,
      text: '¿Y como te llamas?',
    },
    {
      id: 8,
      text: `¿Te llamas? ${nameUser}`,
    },
    {
      id: 9,
      text: `¡Encantado de conocerte! ${nameUser}`,
    },
    {
      id: 10,
      text: 'Tu propia leyenda en las Matemáticas...',
    },
    {
      id: 11,
      text: '¡Comienza ahora!',
    },
  ];
};
