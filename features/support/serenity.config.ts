import { actorCalled, actorInTheSpotlight, ArtifactArchiver, configure, engage } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Before, BeforeAll, defineParameterType } from '@cucumber/cucumber';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { Actors } from '../../src';

/**
 * @desc
 *  Set up Serenity/JS reporting services before any scenarios are executed
 *
 * @see https://serenity-js.org/handbook/reporting/index.html
 */
BeforeAll(function () {
    configure({
        crew: [
            ConsoleReporter.withDefaultColourSupport(),
            new SerenityBDDReporter(),
            ArtifactArchiver.storingArtifactsAt(__dirname, '../../target/site/serenity'),
        ]
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
