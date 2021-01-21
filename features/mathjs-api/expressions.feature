Feature: Expressions

  Rule: One expression - one result

    Scenario Outline: Basic expressions

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

    Scenario: Several expressions

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
