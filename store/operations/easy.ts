// NOTE: retorna: { operatorA, operatorB, result, optionsAnswers }
import {LevelType} from '../../src/utils/gameData';

export const Sum = (lv: string) => {
  let [minimo, maximo] = [0, 0];

  switch (lv) {
    case LevelType.Facil:
      [minimo, maximo] = [1, 9];
      break;
    case LevelType.Normal:
      [minimo, maximo] = [10, 99];
      break;
    case LevelType.Dificil:
      [minimo, maximo] = [100, 999];
      break;
    case LevelType.Genio:
      [minimo, maximo] = [1000, 9999];
      break;
    default:
      [minimo, maximo] = [1, 9];
  }

  const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  let number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

  // Asegurarse de que number1 y number2 sean diferentes
  while (number1 === number2) {
    number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  const operatorA = Math.max(number1, number2);
  const operatorB = Math.min(number1, number2);
  const result = operatorA + operatorB;

  // NOTE: Generamos 4 opciones que no sean iguales entre si ni iguales a la respuesta.
  let optionsAnswers: number[] = [];
  while (optionsAnswers.length < 4) {
    let num = 0;
    if (operatorA < 6) {
      num = Math.floor(Math.random() * 9) + 1;
    } else {
      num = Math.floor(Math.random() * (operatorA - 1)) + (operatorA + 1);
    }

    if (num !== result && !optionsAnswers.includes(num)) {
      optionsAnswers.push(num);
    }
  }
  optionsAnswers.push(result); // agregar la respuesta correcta

  // HACK: Desordenamos las opciones, usando el algoritmo de Fisher-Yates
  for (let i = optionsAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsAnswers[i], optionsAnswers[j]] = [
      optionsAnswers[j],
      optionsAnswers[i],
    ];
  }

  return {operatorA, operatorB, result, optionsAnswers};
};

export const Subtraction = (lv: string) => {
  let [minimo, maximo] = [0, 0];

  switch (lv) {
    case LevelType.Facil:
      [minimo, maximo] = [1, 9];
      break;
    case LevelType.Normal:
      [minimo, maximo] = [10, 99];
      break;
    case LevelType.Dificil:
      [minimo, maximo] = [100, 999];
      break;
    case LevelType.Genio:
      [minimo, maximo] = [1000, 9999];
      break;
    default:
      [minimo, maximo] = [1, 9];
  }

  const number1 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  let number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

  // Asegurarse de que number1 y number2 sean diferentes
  while (number1 === number2) {
    number2 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  const operatorA = Math.max(number1, number2);
  const operatorB = Math.min(number1, number2);

  const result = operatorA - operatorB;

  // NOTE: Generamos 4 opciones que no sean iguales entre si ni iguales a la respuesta.
  let optionsAnswers: number[] = [];

  while (optionsAnswers.length < 4) {
    let num = 0;
    if (result < 6) {
      num = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    } else {
      if (result > operatorB) {
        if (result - operatorB >= 5) {
          // los rangos son [(denominator + 1), (result -1)], tomando ambos extremos
          num =
            Math.floor(Math.random() * (result - operatorB - 1)) +
            operatorB +
            1;
        } else {
          num = Math.floor(Math.random() * (operatorA - 1)) + 1;
        }
      } else {
        num = Math.floor(Math.random() * (operatorA - 1)) + 1;
      }
    }

    if (num !== result && !optionsAnswers.includes(num)) {
      optionsAnswers.push(num);
    }
  }
  optionsAnswers.push(result); // agregar la respuesta correcta

  // HACK: Desordenamos las opciones, usando el algoritmo de Fisher-Yates
  for (let i = optionsAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsAnswers[i], optionsAnswers[j]] = [
      optionsAnswers[j],
      optionsAnswers[i],
    ];
  }

  return {operatorA, operatorB, result, optionsAnswers};
};

export const Multiplication = () => {};

export const Division = () => {};
