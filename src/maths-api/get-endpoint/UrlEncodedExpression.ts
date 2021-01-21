import { Question } from '@serenity-js/core';
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
    from: (expression: string) =>
        Question.about(`URL-encoded expression: ${ expression }`, actor => {

            const removeWhitespace = (text: string) =>
                text.replace(/\s/g, '');

            return escape(removeWhitespace(expression));
        }),
};
