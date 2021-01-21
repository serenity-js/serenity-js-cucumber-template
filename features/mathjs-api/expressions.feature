Feature: Expressions

  [math.js](https://mathjs.org/) is available as a RESTful API at [api.mathjs.org](https://api.mathjs.org/).

  Evaluations can be done via GET or POST requests.
  The duration per evaluation of this free service is limited to 10 seconds,
  with a maximum of 10,000 requests per day.

  Rule: One expression - one result

    Scenario Outline: Basic expressions

      Single expression requests can be evaluated using the [GET endpoint](https://api.mathjs.org/#get).

      When Sandra requests evaluation of <expression>
      Then she should get <expected_result>

      Examples: Basic operators
        | expression | expected_result |
        | 2 + 3      | 5               |
        | 2 - 3      | -1              |

      Examples: Order of operations
        | expression | expected_result |
        | 2 * 2 + 2  | 6               |
        | 2 + 2 * 2  | 6               |

  Rule: Multiple expressions - multiple results

    Scenario: Multiple expressions

      Requests to evaluate multiple expression should be sent to the [POST endpoint](https://api.mathjs.org/#post).

      When Sandra requests evaluation of:
        | expression |
        | 2 + 3      |
        | 2 - 3      |
        | 2 * 2 + 2  |
        | 2 + 2 * 2  |
      Then she should get following results:
        | expected_result |
        | 5               |
        | -1              |
        | 6               |
        | 6               |
