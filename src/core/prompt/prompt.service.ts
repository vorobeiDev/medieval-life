import inquirer from 'inquirer';
import { PromptType } from './prompt.type.js';

export class PromptService {
  public async input<T>(message: string, type: PromptType, choices?: string[]) {
    const { result } = await inquirer.prompt<{ result: T }>([
      {
        type,
        name: 'result',
        message,
        choices,
      }
    ])

    return result;
  }
}