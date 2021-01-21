import { Actor, Cast } from '@serenity-js/core';
import { ensure, isNotBlank } from 'tiny-types';
import { CallAnApi } from '@serenity-js/rest';

export class Actors implements Cast {
    constructor(private readonly baseApiUrl: string) {
        ensure('apiUrl', baseApiUrl, isNotBlank());
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at(this.baseApiUrl),
        );
    }
}
