import { Before, BeforeAll, defineParameterType } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight, configure, engage } from '@serenity-js/core';
import path from 'path';

import { Actors } from '../../src';

/**
 * @desc
 *  Set up Serenity/JS reporting services before any scenarios are executed
 *
 * @see https://serenity-js.org/handbook/reporting/index.html
 */
BeforeAll(function () {
    // Configure Serenity/JS
    configure({
        // Configure Serenity/JS reporting services
        crew: [
            [ '@serenity-js/console-reporter', { theme: 'auto' } ],
            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: path.resolve(__dirname, '../../target/site/serenity') } ],
            [ '@serenity-js/serenity-bdd', { specDirectory: path.resolve(__dirname, '../../features') } ],
        ],
    });
});

/**
 * Engage Serenity/JS Actors before each scenario
 *
 * @see https://serenity-js.org/modules/core/function/index.html#static-function-engage
 */
Before(function () {
    engage(new Actors(this.parameters.baseApiUrl));
});

/**
 * @desc
 *  Map the '{actor}' token in Cucumber Expression to an Actor object referenced by a given name.
 *
 * @example
 *  import { Actor } from '@serenity-js/core';
 *  import { Given } from '@cucumber/cucumber';
 *
 *  Given('{actor} is registered', (actor: Actor) =>
 *      actor.attemptsTo(
 *          // ...
 *      ));
 *
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html#actors
 * @see https://cucumber.io/docs/cucumber/cucumber-expressions/
 * @see https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 */
defineParameterType({
    regexp: /[A-Z][a-z]+/,
    transformer(name: string) {
        return actorCalled(name);
    },
    name: 'actor',
});

/**
 * @desc
 *  Retrieve the most recently referenced actor using their pronoun.
 *
 * @example
 *  import { Actor } from '@serenity-js/core';
 *  import { Given } from '@cucumber/cucumber';
 *
 *  Given('{pronoun} is registered', (actor: Actor) =>
 *      actor.attemptsTo(
 *          // ...
 *      ));
 *
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html#actors
 * @see https://cucumber.io/docs/cucumber/cucumber-expressions/
 * @see https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 */
defineParameterType({
    regexp: /he|she|they|his|her|their/,
    transformer() {
        return actorInTheSpotlight();
    },
    name: 'pronoun',
});
