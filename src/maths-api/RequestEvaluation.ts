import { Ensure, equals } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { GetRequest, LastResponse, PostRequest, Send } from '@serenity-js/rest';

import { GetApiPath, UrlEncodedExpression } from './get-endpoint';

export const RequestEvaluation = {
    ofASingleExpression: (expression: string): Task =>
        Task.where(`#actor requests evaluation of "${expression}"`,
            // note how questions can be composed GetRequest receives GetApiPath, which receives UrlEncodedExpression
            Send.a(GetRequest.to(GetApiPath.for(UrlEncodedExpression.from(expression)))),
            Ensure.that(LastResponse.status(), equals(200)),
        ),

    ofMultipleExpressions: (expressions: string[]): Task =>
        Task.where(`#actor requests evaluation of multiple expressions`,
            Send.a(PostRequest.to('/v4').with({ expr: expressions })),
            Ensure.that(LastResponse.status(), equals(200)),
        ),
};
