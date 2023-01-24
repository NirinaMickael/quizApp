import { Theme } from "../types";


export const darkTheme :Theme = {
    dark: true,
    colors: {
      primary: '#aedbee',
      background: '#122229',
      card: 'green',
      text: '#adbec5',
      border: '#9e7505',
      notification: 'rgb(255, 69, 58)',
    },
}

export const lightTheme :Theme = {
    dark: false,
    colors: {
      primary: '#EEF1FF',
      background: '#f2f2f2',
      card: 'rgb(18, 18, 18)',
      text: '#37474',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
}