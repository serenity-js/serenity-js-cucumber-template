import { DataTable, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { Actor } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

import { RequestEvaluation } from '../../src/maths-api/RequestEvaluation';

When('{actor} requests evaluation of {}', (actor: Actor, expression: string) =>
    actor.attemptsTo(
        RequestEvaluation.ofASingleExpression(expression),
    ));

Then('{pronoun} should get {float}', (actor: Actor, expectedResult: number) =>
    actor.attemptsTo(
        Ensure.that(LastResponse.body<number>(), equals(expectedResult))
    ));

When('{actor} requests evaluation of:', (actor: Actor, expressionsTable: DataTable) =>
    actor.attemptsTo(
        RequestEvaluation.ofMultipleExpressions(column('expression', expressionsTable)),
    ));

Then('{pronoun} should get following results:', (actor: Actor, expectedResultsTable: DataTable) =>
    actor.attemptsTo(
        Ensure.that(
            LastResponse.body<{ result: string[], error: string | null }>(),
            property('result', equals(column('expected_result', expectedResultsTable)))
        )
    ));

function column(columnName: string, dataTable: DataTable): string[] {
    return dataTable.hashes().map(entry => entry[columnName]);
}
