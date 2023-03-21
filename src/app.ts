import { PromptService } from './core/prompt/prompt.service.js';

export class App {
  async run() {
    console.log('Вітаємо в грі, Симулятор Темних Віків. Ваша ціль прожити "довге" та щасливе життя. Успіхів вам!')
    const sex: 'Чоловік' | 'Жінка' = await (new PromptService()).input<'Чоловік' | 'Жінка'>('Для початку гри оберіть вашу стать: ', 'list', ['Чоловік', 'Жінка']);
    console.log(`- "Давним давно, я уже навіть сам не пам'ятаю коли, на світ ${sex === 'Чоловік' ? `з'явився хлопчик ` : 'з`явилася дівчинка'} на ім'я: `)
    const name = await (new PromptService()).input<string>(`Ваше ім'я: `, 'input');
    console.log('Вітаю з початковом нового життя,', name);
  }
}

const app = new App();
app.run();
