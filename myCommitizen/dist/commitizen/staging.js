"use strict";

var cov_270ou9i6pi = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/commitizen/staging.js";
  var hash = "f47101f60ab6c7dca389fc1f0eed484161a1b996";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/commitizen/staging.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "2": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 25
        }
      },
      "3": {
        start: {
          line: 16,
          column: 17
        },
        end: {
          line: 16,
          column: 29
        }
      },
      "4": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "isClean",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 16
          }
        },
        loc: {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 5
          },
          end: {
            line: 12,
            column: 6
          }
        },
        loc: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 16,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 17
          },
          end: {
            line: 16,
            column: 23
          }
        }, {
          start: {
            line: 16,
            column: 27
          },
          end: {
            line: 16,
            column: 29
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f47101f60ab6c7dca389fc1f0eed484161a1b996"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClean = isClean;

var _child_process = require("child_process");

/**
 * Asynchrounously determines if the staging area is clean
 */
function isClean(repoPath, done) {
  cov_270ou9i6pi.f[0]++;
  cov_270ou9i6pi.s[0]++;
  (0, _child_process.exec)('git diff --no-ext-diff --name-only && git diff --no-ext-diff --cached --name-only', {
    maxBuffer: Infinity,
    cwd: repoPath
  }, function (error, stdout) {
    cov_270ou9i6pi.f[1]++;
    cov_270ou9i6pi.s[1]++;

    if (error) {
      cov_270ou9i6pi.b[0][0]++;
      cov_270ou9i6pi.s[2]++;
      return done(error);
    } else {
      cov_270ou9i6pi.b[0][1]++;
    }

    let output = (cov_270ou9i6pi.s[3]++, (cov_270ou9i6pi.b[1][0]++, stdout) || (cov_270ou9i6pi.b[1][1]++, ''));
    cov_270ou9i6pi.s[4]++;
    done(null, output.trim().length === 0);
  });
}