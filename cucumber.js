module.exports = {
    default: `
        --require=features/**/*.ts
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"http://api.mathjs.org/v4/"}
    `,
}
