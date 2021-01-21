import { DataTable, Then, When } from '@cucumber/cucumber';
import { Actor, actorCalled, Log } from '@serenity-js/core';
import { RequestEvaluation } from '../../src/maths-api/RequestEvaluation';
import { LastResponse } from '@serenity-js/rest';
import { Ensure, equals, property } from '@serenity-js/assertions';

When('{actor} requests evaluation of {}', (actor: Actor, expression: string) =>
    actor.attemptsTo(
        RequestEvaluation.ofASingleExpression(expression),
    ));

Then('{pronoun} should get {float}', (actor: Actor, expectedResult: number) =>
    actor.attemptsTo(
        Ensure.that(LastResponse.body<Promise<number>>(), equals(expectedResult))
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
