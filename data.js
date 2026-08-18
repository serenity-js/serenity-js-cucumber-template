window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Cucumber",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 1067,
    "startedAt": "2026-08-18T15:35:59.430Z",
    "finishedAt": "2026-08-18T15:36:00.497Z",
    "testRunner": "Cucumber"
  },
  "scenarios": [
    {
      "name": "Basic expressions",
      "category": "Expressions",
      "outcome": "SUCCESS",
      "duration": 1067,
      "startedAt": "2026-08-18T15:35:59.430Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
        "line": 26
      },
      "tags": [
        {
          "type": "capability",
          "name": "Mathjs-api"
        },
        {
          "type": "feature",
          "name": "Expressions"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "3590",
          "timestamp": "2026-08-18T15:35:59.430Z",
          "duration": 1067,
          "activities": []
        }
      ],
      "narrative": "<p><a href=\"https://mathjs.org/\">math.js</a> is available as a RESTful API at <a href=\"https://api.mathjs.org/\">api.mathjs.org</a>.</p>\n<p>Evaluations can be done via GET or POST requests.\nThe duration per evaluation of this free service is limited to 10 seconds,\nwith a maximum of 10,000 requests per day.</p>\n",
      "description": "<p>Single expression requests can be evaluated using the <a href=\"https://api.mathjs.org/#get\">GET endpoint</a>.</p>\n",
      "cast": [
        {
          "name": "Sandra",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "scenarioOutline": {
        "template": "When Sandra requests evaluation of <expression>\nThen she should get <expected_result>",
        "parameters": [
          {
            "name": "Basic operators",
            "values": {
              "expression": "2 + 3",
              "expected_result": "5"
            },
            "outcome": "SUCCESS",
            "duration": 521,
            "activities": [
              {
                "name": "Before",
                "outcome": "SUCCESS",
                "duration": 1,
                "children": [],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:58.537Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
                  "line": 32
                }
              },
              {
                "name": "When Sandra requests evaluation of 2 + 3",
                "outcome": "SUCCESS",
                "duration": 489,
                "children": [
                  {
                    "name": "Sandra requests evaluation of \"2 + 3\"",
                    "outcome": "SUCCESS",
                    "duration": 460,
                    "children": [
                      {
                        "name": "Sandra sends a GET request to /v4?expr endpoint for URL-encoded expression: 2 + 3",
                        "outcome": "SUCCESS",
                        "duration": 437,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:58.557Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        },
                        "artifacts": [
                          {
                            "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-2b3-07499862ed.json",
                            "type": "screenshot"
                          }
                        ],
                        "restQuery": {
                          "method": "GET",
                          "url": "http://api.mathjs.org/v4?expr=2%2B3",
                          "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                          "statusCode": 200,
                          "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:58 GMT\netag: W/\"1-rDR41po8gfpi5g9cNpYWWk5easQ\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=DX5EhCsYEDeKksMOqcprJMZlnVaFXEKwSXHAP2hBRAg%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067358\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=DX5EhCsYEDeKksMOqcprJMZlnVaFXEKwSXHAP2hBRAg%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067358\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996058\nx-ratelimit-reset: 1787071847\nconnection: close",
                          "responseBody": "5"
                        }
                      },
                      {
                        "name": "Sandra ensures that the status of the last response does equal 200",
                        "outcome": "SUCCESS",
                        "duration": 2,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.005Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-18T15:35:58.557Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 10,
                      "column": 27
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:58.539Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 15
                }
              },
              {
                "name": "Then she should get 5",
                "outcome": "SUCCESS",
                "duration": 14,
                "children": [
                  {
                    "name": "Sandra ensures that the body of the last response does equal 5",
                    "outcome": "SUCCESS",
                    "duration": 0,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-18T15:35:59.032Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 15,
                      "column": 16
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.029Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 16
                }
              }
            ]
          },
          {
            "name": "Basic operators",
            "values": {
              "expression": "2 - 3",
              "expected_result": "-1"
            },
            "outcome": "SUCCESS",
            "duration": 185,
            "activities": [
              {
                "name": "Before",
                "outcome": "SUCCESS",
                "duration": 0,
                "children": [],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.061Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
                  "line": 32
                }
              },
              {
                "name": "When Sandra requests evaluation of 2 - 3",
                "outcome": "SUCCESS",
                "duration": 157,
                "children": [
                  {
                    "name": "Sandra requests evaluation of \"2 - 3\"",
                    "outcome": "SUCCESS",
                    "duration": 139,
                    "children": [
                      {
                        "name": "Sandra sends a GET request to /v4?expr endpoint for URL-encoded expression: 2 - 3",
                        "outcome": "SUCCESS",
                        "duration": 117,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.069Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        },
                        "artifacts": [
                          {
                            "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-3-3109a331b6.json",
                            "type": "screenshot"
                          }
                        ],
                        "restQuery": {
                          "method": "GET",
                          "url": "http://api.mathjs.org/v4?expr=2-3",
                          "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                          "statusCode": 200,
                          "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 2\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:59 GMT\netag: W/\"2-eYSwoOE5yrrbWvx3VtRz+zTSOBk\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067359\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067359\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996191\nx-ratelimit-reset: 1787071851\nconnection: close",
                          "responseBody": "-1"
                        }
                      },
                      {
                        "name": "Sandra ensures that the status of the last response does equal 200",
                        "outcome": "SUCCESS",
                        "duration": 2,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.196Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-18T15:35:59.069Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 10,
                      "column": 27
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.061Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 15
                }
              },
              {
                "name": "Then she should get -1",
                "outcome": "SUCCESS",
                "duration": 15,
                "children": [
                  {
                    "name": "Sandra ensures that the body of the last response does equal -1",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-18T15:35:59.221Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 15,
                      "column": 16
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.219Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 16
                }
              }
            ]
          },
          {
            "name": "Order of operations",
            "values": {
              "expression": "2 * 2 + 2",
              "expected_result": "6"
            },
            "outcome": "SUCCESS",
            "duration": 181,
            "activities": [
              {
                "name": "Before",
                "outcome": "SUCCESS",
                "duration": 1,
                "children": [],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.248Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
                  "line": 32
                }
              },
              {
                "name": "When Sandra requests evaluation of 2 * 2 + 2",
                "outcome": "SUCCESS",
                "duration": 154,
                "children": [
                  {
                    "name": "Sandra requests evaluation of \"2 * 2 + 2\"",
                    "outcome": "SUCCESS",
                    "duration": 138,
                    "children": [
                      {
                        "name": "Sandra sends a GET request to /v4?expr endpoint for URL-encoded expression: 2 * 2 + 2",
                        "outcome": "SUCCESS",
                        "duration": 117,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.255Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        },
                        "artifacts": [
                          {
                            "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-2-2b2-4f1dc86244.json",
                            "type": "screenshot"
                          }
                        ],
                        "restQuery": {
                          "method": "GET",
                          "url": "http://api.mathjs.org/v4?expr=2*2%2B2",
                          "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                          "statusCode": 200,
                          "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:59 GMT\netag: W/\"1-wd/ZbuqMwrYnhSdbyjisJhJW4ng\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067359\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067359\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996709\nx-ratelimit-reset: 1787071861\nconnection: close",
                          "responseBody": "6"
                        }
                      },
                      {
                        "name": "Sandra ensures that the status of the last response does equal 200",
                        "outcome": "SUCCESS",
                        "duration": 1,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.382Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-18T15:35:59.255Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 10,
                      "column": 27
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.249Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 15
                }
              },
              {
                "name": "Then she should get 6",
                "outcome": "SUCCESS",
                "duration": 13,
                "children": [
                  {
                    "name": "Sandra ensures that the body of the last response does equal 6",
                    "outcome": "SUCCESS",
                    "duration": 0,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-18T15:35:59.406Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 15,
                      "column": 16
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.404Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 16
                }
              }
            ]
          },
          {
            "name": "Order of operations",
            "values": {
              "expression": "2 + 2 * 2",
              "expected_result": "6"
            },
            "outcome": "SUCCESS",
            "duration": 180,
            "activities": [
              {
                "name": "Before",
                "outcome": "SUCCESS",
                "duration": 0,
                "children": [],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.431Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
                  "line": 32
                }
              },
              {
                "name": "When Sandra requests evaluation of 2 + 2 * 2",
                "outcome": "SUCCESS",
                "duration": 155,
                "children": [
                  {
                    "name": "Sandra requests evaluation of \"2 + 2 * 2\"",
                    "outcome": "SUCCESS",
                    "duration": 141,
                    "children": [
                      {
                        "name": "Sandra sends a GET request to /v4?expr endpoint for URL-encoded expression: 2 + 2 * 2",
                        "outcome": "SUCCESS",
                        "duration": 119,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.435Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        },
                        "artifacts": [
                          {
                            "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-get-http---api-mathjs-org-v4-expr-2-2b2-2-aefb761cc9.json",
                            "type": "screenshot"
                          }
                        ],
                        "restQuery": {
                          "method": "GET",
                          "url": "http://api.mathjs.org/v4?expr=2%2B2*2",
                          "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                          "statusCode": 200,
                          "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 1\ncontent-type: text/html; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:59 GMT\netag: W/\"1-wd/ZbuqMwrYnhSdbyjisJhJW4ng\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067359\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067359\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 998771\nx-ratelimit-reset: 1787122022\nconnection: close",
                          "responseBody": "6"
                        }
                      },
                      {
                        "name": "Sandra ensures that the status of the last response does equal 200",
                        "outcome": "SUCCESS",
                        "duration": 1,
                        "children": [],
                        "type": "Interaction",
                        "startedAt": "2026-08-18T15:35:59.564Z",
                        "location": {
                          "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                          "line": 10,
                          "column": 27
                        }
                      }
                    ],
                    "type": "Task",
                    "startedAt": "2026-08-18T15:35:59.435Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 10,
                      "column": 27
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.431Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 15
                }
              },
              {
                "name": "Then she should get 6",
                "outcome": "SUCCESS",
                "duration": 13,
                "children": [
                  {
                    "name": "Sandra ensures that the body of the last response does equal 6",
                    "outcome": "SUCCESS",
                    "duration": 1,
                    "children": [],
                    "type": "Interaction",
                    "startedAt": "2026-08-18T15:35:59.588Z",
                    "location": {
                      "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                      "line": 15,
                      "column": 16
                    }
                  }
                ],
                "type": "Task",
                "startedAt": "2026-08-18T15:35:59.586Z",
                "location": {
                  "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                  "line": 16
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Multiple expressions",
      "category": "Expressions",
      "outcome": "SUCCESS",
      "duration": 186,
      "startedAt": "2026-08-18T15:35:59.612Z",
      "source": {
        "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
        "line": 30
      },
      "tags": [
        {
          "type": "capability",
          "name": "Mathjs-api"
        },
        {
          "type": "feature",
          "name": "Expressions"
        },
        {
          "type": "module",
          "name": "serenity-js-cucumber-template"
        }
      ],
      "activities": [
        {
          "name": "Before",
          "outcome": "SUCCESS",
          "duration": 0,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-18T15:35:59.613Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
            "line": 32
          }
        },
        {
          "name": "When Sandra requests evaluation of:\n| expression |\n| 2 + 3      |\n| 2 - 3      |\n| 2 * 2 + 2  |\n| 2 + 2 * 2  |",
          "outcome": "SUCCESS",
          "duration": 154,
          "children": [
            {
              "name": "Sandra requests evaluation of multiple expressions",
              "outcome": "SUCCESS",
              "duration": 139,
              "children": [
                {
                  "name": "Sandra sends a POST request to '/v4'",
                  "outcome": "SUCCESS",
                  "duration": 116,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:35:59.622Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                    "line": 20,
                    "column": 27
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-post-http---api-mathjs-org-v4-e11512a834.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "POST",
                    "url": "http://api.mathjs.org/v4",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 50\nAccept-Encoding: gzip, compress, deflate, br",
                    "requestBody": "{\"expr\":[\"2 + 3\",\"2 - 3\",\"2 * 2 + 2\",\"2 + 2 * 2\"]}",
                    "statusCode": 200,
                    "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 42\ncontent-type: application/json; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:59 GMT\netag: W/\"2a-25tc5YISkPLz5nqHaq97u28qC20\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067359\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067359\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996057\nx-ratelimit-reset: 1787071847\nconnection: close",
                    "responseBody": "{\n    \"result\": [\n        \"5\",\n        \"-1\",\n        \"6\",\n        \"6\"\n    ],\n    \"error\": null\n}"
                  }
                },
                {
                  "name": "Sandra ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:35:59.749Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                    "line": 20,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:35:59.621Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                "line": 20,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-18T15:35:59.617Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
            "line": 34
          }
        },
        {
          "name": "Then she should get following results:\n| expected_result |\n| 5               |\n| -1              |\n| 6               |\n| 6               |",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [
            {
              "name": "Sandra ensures that the body of the last response does have property result that does equal [ \"5\", \"-1\", \"6\", \"6\" ]",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-18T15:35:59.775Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                "line": 25,
                "column": 16
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-18T15:35:59.772Z",
          "location": {
            "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
            "line": 40
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "3590",
          "timestamp": "2026-08-18T15:35:59.430Z",
          "duration": 186,
          "activities": [
            {
              "name": "Before",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-18T15:35:59.613Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/support/serenity.config.ts",
                "line": 32
              }
            },
            {
              "name": "When Sandra requests evaluation of:\n| expression |\n| 2 + 3      |\n| 2 - 3      |\n| 2 * 2 + 2  |\n| 2 + 2 * 2  |",
              "outcome": "SUCCESS",
              "duration": 154,
              "children": [
                {
                  "name": "Sandra requests evaluation of multiple expressions",
                  "outcome": "SUCCESS",
                  "duration": 139,
                  "children": [
                    {
                      "name": "Sandra sends a POST request to '/v4'",
                      "outcome": "SUCCESS",
                      "duration": 116,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:35:59.622Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                        "line": 20,
                        "column": 27
                      },
                      "artifacts": [
                        {
                          "path": "test-runs/3590/serenity-js-cucumber-template-1/artifact-post-http---api-mathjs-org-v4-e11512a834.json",
                          "type": "screenshot"
                        }
                      ],
                      "restQuery": {
                        "method": "POST",
                        "url": "http://api.mathjs.org/v4",
                        "requestHeaders": "Accept: application/json, text/plain, */*\nContent-Type: application/json\nUser-Agent: axios/1.19.0\nContent-Length: 50\nAccept-Encoding: gzip, compress, deflate, br",
                        "requestBody": "{\"expr\":[\"2 + 3\",\"2 - 3\",\"2 * 2 + 2\",\"2 + 2 * 2\"]}",
                        "statusCode": 200,
                        "responseHeaders": "access-control-allow-headers: Content-Type, X-Requested-With\naccess-control-allow-methods: GET, POST, OPTIONS\naccess-control-allow-origin: *\ncontent-length: 42\ncontent-type: application/json; charset=utf-8\ndate: Tue, 18 Aug 2026 15:35:59 GMT\netag: W/\"2a-25tc5YISkPLz5nqHaq97u28qC20\"\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D\\u0026sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add\\u0026ts=1787067359\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=MF%2FL6Mpz7UeiyKWn5kq825jmxFvpLVaa0E106gwiUhM%3D&sid=c46efe9b-d3d2-4a0c-8c76-bfafa16c5add&ts=1787067359\"\nserver: Heroku\nvary: Accept-Encoding\nvia: 1.1 heroku-router\nx-powered-by: Express\nx-ratelimit-limit: 1000000\nx-ratelimit-remaining: 996057\nx-ratelimit-reset: 1787071847\nconnection: close",
                        "responseBody": "{\n    \"result\": [\n        \"5\",\n        \"-1\",\n        \"6\",\n        \"6\"\n    ],\n    \"error\": null\n}"
                      }
                    },
                    {
                      "name": "Sandra ensures that the status of the last response does equal 200",
                      "outcome": "SUCCESS",
                      "duration": 1,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-18T15:35:59.749Z",
                      "location": {
                        "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                        "line": 20,
                        "column": 27
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-18T15:35:59.621Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                    "line": 20,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:35:59.617Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                "line": 34
              }
            },
            {
              "name": "Then she should get following results:\n| expected_result |\n| 5               |\n| -1              |\n| 6               |\n| 6               |",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [
                {
                  "name": "Sandra ensures that the body of the last response does have property result that does equal [ \"5\", \"-1\", \"6\", \"6\" ]",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-18T15:35:59.775Z",
                  "location": {
                    "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/step_definitions/expressions.steps.ts",
                    "line": 25,
                    "column": 16
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-18T15:35:59.772Z",
              "location": {
                "path": "/__w/serenity-js-cucumber-template/serenity-js-cucumber-template/features/mathjs-api/expressions.feature",
                "line": 40
              }
            }
          ]
        }
      ],
      "narrative": "<p><a href=\"https://mathjs.org/\">math.js</a> is available as a RESTful API at <a href=\"https://api.mathjs.org/\">api.mathjs.org</a>.</p>\n<p>Evaluations can be done via GET or POST requests.\nThe duration per evaluation of this free service is limited to 10 seconds,\nwith a maximum of 10,000 requests per day.</p>\n",
      "description": "<p>Requests to evaluate multiple expression should be sent to the <a href=\"https://api.mathjs.org/#post\">POST endpoint</a>.</p>\n",
      "cast": [
        {
          "name": "Sandra",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"http://api.mathjs.org/v4/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-18T15:35:59.430Z",
      "duration": 1067,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "3590",
      "slowest": 1067,
      "fastest": 186,
      "average": 627,
      "commit": "786b4a795f7686592bcad93ebcc0be89a6272a2d",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-cucumber-template/actions/runs/32155269801",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "capability",
      "name": "Mathjs-api",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Expressions",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-cucumber-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.7",
    "testRunner": {
      "name": "Cucumber",
      "version": "13.2.1"
    },
    "browsers": [],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "3590",
      "branch": "main",
      "commit": "786b4a795f7686592bcad93ebcc0be89a6272a2d",
      "commitMessage": "Merge pull request #1024 from serenity-js/chore/migrate-to-html-reporter",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-cucumber-template/actions/runs/32155269801",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-cucumber-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "@serenity-js/serenity-js-cucumber-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "features",
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "directory",
        "name": "mathjs-api",
        "outcomes": {
          "passed": 2,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "children": [
          {
            "type": "file",
            "name": "expressions",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "scenarios": [
              {
                "name": "Basic expressions",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              },
              {
                "name": "Multiple expressions",
                "outcome": "SUCCESS",
                "executionHistory": [
                  "SUCCESS"
                ]
              }
            ],
            "narrative": "[math.js](https://mathjs.org/) is available as a RESTful API at [api.mathjs.org](https://api.mathjs.org/).\n\nEvaluations can be done via GET or POST requests.\nThe duration per evaluation of this free service is limited to 10 seconds,\nwith a maximum of 10,000 requests per day.",
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            }
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "features"
};
