import { Question } from '@serenity-js/core';

/**
 * @desc
 *  Serenity/JS Questions can be parametrised with other Questions
 *
 * @see https://serenity-js.org/handbook/design/questions.html
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html
 */
export const GetApiPath = {
    for: (urlEncodedExpression: Question<string>): Question<Promise<string>> =>
        Question.about(`/v4?expr endpoint for ${ urlEncodedExpression }`, actor =>
            actor.answer(urlEncodedExpression).then(expression =>
                `/v4?expr=${ expression }`
            ))
};
