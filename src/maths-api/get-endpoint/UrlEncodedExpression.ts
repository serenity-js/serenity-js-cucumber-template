import { Question, QuestionAdapter } from '@serenity-js/core';
import { escape } from 'querystring';

/**
 * @desc
 *  Serenity/JS Questions retrieve data from the system under test or its environment.
 *  You can use them to transform data too.
 *
 * @see https://serenity-js.org/handbook/design/questions.html
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html
 */
export const UrlEncodedExpression = {
    from: (expression: string): QuestionAdapter<string> =>
        Question.about(`URL-encoded expression: ${ expression }`, actor => {
            return escape(removeWhitespace(expression));
        }),
};

function removeWhitespace(text: string): string {
    return text.replaceAll(/\s/g, '');
}
