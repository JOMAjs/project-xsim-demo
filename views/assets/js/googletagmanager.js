// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
        { function: "__c", vtp_value: "google.com.co" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
        { function: "__c", vtp_value: "google.com.co" },
        { function: "__c", vtp_value: 0 },
      ],
      tags: [
        {
          function: "__ogt_1p_data_v2",
          priority: 13,
          vtp_cityType: "CSS_SELECTOR",
          vtp_manualEmailEnabled: false,
          vtp_firstNameType: "CSS_SELECTOR",
          vtp_countryType: "CSS_SELECTOR",
          vtp_cityValue: "",
          vtp_isAutoEnabled: true,
          vtp_autoCollectExclusionSelectors: [
            "list",
            ["map", "exclusionSelector", ""],
          ],
          vtp_emailType: "CSS_SELECTOR",
          vtp_regionType: "CSS_SELECTOR",
          vtp_autoEmailEnabled: true,
          vtp_postalCodeValue: "",
          vtp_lastNameValue: "",
          vtp_phoneType: "CSS_SELECTOR",
          vtp_phoneValue: "",
          vtp_streetType: "CSS_SELECTOR",
          vtp_autoPhoneEnabled: true,
          vtp_postalCodeType: "CSS_SELECTOR",
          vtp_emailValue: "",
          vtp_firstNameValue: "",
          vtp_streetValue: "",
          vtp_lastNameType: "CSS_SELECTOR",
          vtp_isEnabled: true,
          vtp_autoAddressEnabled: true,
          vtp_regionValue: "",
          vtp_countryValue: "",
          vtp_isAutoCollectPiiEnabledFlag: false,
          tag_id: 10,
        },
        {
          function: "__ccd_ga_first",
          priority: 12,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 24,
        },
        {
          function: "__set_product_settings",
          priority: 11,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          vtp_foreignTldMacroResult: ["macro", 5],
          vtp_isChinaVipRegionMacroResult: ["macro", 6],
          tag_id: 23,
        },
        {
          function: "__ogt_google_signals",
          priority: 10,
          vtp_googleSignals: "DISABLED",
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          vtp_serverMacroResult: ["macro", 4],
          tag_id: 22,
        },
        {
          function: "__ccd_ga_regscope",
          priority: 9,
          vtp_settingsTable: [
            "list",
            [
              "map",
              "redactFieldGroup",
              "DEVICE_AND_GEO",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
            [
              "map",
              "redactFieldGroup",
              "GOOGLE_SIGNALS",
              "disallowAllRegions",
              true,
              "disallowedRegions",
              "",
            ],
          ],
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 21,
        },
        {
          function: "__ccd_em_download",
          priority: 8,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 20,
        },
        {
          function: "__ccd_em_form",
          priority: 7,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 19,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 6,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 18,
        },
        {
          function: "__ccd_em_page_view",
          priority: 5,
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 17,
        },
        {
          function: "__ccd_em_scroll",
          priority: 4,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 16,
        },
        {
          function: "__ccd_em_site_search",
          priority: 3,
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 15,
        },
        {
          function: "__ccd_em_video",
          priority: 2,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 14,
        },
        {
          function: "__ccd_conversion_marking",
          priority: 1,
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 13,
        },
        {
          function: "__gct",
          vtp_trackingId: "G-D0HXQDBZ94",
          vtp_sessionDuration: 0,
          vtp_googleSignals: ["macro", 1],
          vtp_foreignTld: ["macro", 2],
          vtp_restrictDomain: ["macro", 3],
          vtp_eventSettings: ["map"],
          tag_id: 7,
        },
        {
          function: "__ccd_ga_last",
          priority: 0,
          vtp_instanceDestinationId: "G-D0HXQDBZ94",
          tag_id: 12,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 13],
        ],
        [
          ["if", 1],
          ["add", 0, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.copyPreHit"]],
        [52, "c", ["require", "internal.evaluateBooleanExpression"]],
        [52, "d", ["require", "internal.registerCcdCallback"]],
        [52, "e", "is_conversion"],
        [52, "f", "is_first_visit"],
        [52, "g", "is_first_visit_conversion"],
        [52, "h", "is_session_start"],
        [52, "i", "is_session_start_conversion"],
        [52, "j", "first_visit"],
        [52, "k", "session_start"],
        [41, "l"],
        [41, "m"],
        [
          "d",
          [17, [15, "a"], "instanceDestinationId"],
          [
            51,
            "",
            [7, "n"],
            [52, "o", [8, "preHit", [15, "n"]]],
            [
              65,
              "p",
              [17, [15, "a"], "conversionRules"],
              [
                46,
                [
                  22,
                  ["c", [17, [15, "p"], "matchingRules"], [15, "o"]],
                  [
                    46,
                    [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                    [4],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, "n"], "getMetadata", [7, [15, "f"]]],
              [
                46,
                [
                  22,
                  [28, [15, "l"]],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "p",
                        [
                          "b",
                          [15, "n"],
                          [8, "omitHitData", true, "omitMetadata", true],
                        ],
                      ],
                      [2, [15, "p"], "setEventName", [7, [15, "j"]]],
                      [3, "l", [8, "preHit", [15, "p"]]],
                    ],
                  ],
                ],
                [
                  65,
                  "p",
                  [17, [15, "a"], "conversionRules"],
                  [
                    46,
                    [
                      22,
                      ["c", [17, [15, "p"], "matchingRules"], [15, "l"]],
                      [
                        46,
                        [2, [15, "n"], "setMetadata", [7, [15, "g"], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              22,
              [2, [15, "n"], "getMetadata", [7, [15, "h"]]],
              [
                46,
                [
                  22,
                  [28, [15, "m"]],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "p",
                        [
                          "b",
                          [15, "n"],
                          [8, "omitHitData", true, "omitMetadata", true],
                        ],
                      ],
                      [2, [15, "p"], "setEventName", [7, [15, "k"]]],
                      [3, "m", [8, "preHit", [15, "p"]]],
                    ],
                  ],
                ],
                [
                  65,
                  "p",
                  [17, [15, "a"], "conversionRules"],
                  [
                    46,
                    [
                      22,
                      ["c", [17, [15, "p"], "matchingRules"], [15, "m"]],
                      [
                        46,
                        [2, [15, "n"], "setMetadata", [7, [15, "i"], true]],
                        [4],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
        [36],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "r",
          [46, "x"],
          [
            36,
            [
              1,
              [15, "x"],
              [
                21,
                [
                  2,
                  [2, [15, "x"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "q"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "s",
          [46, "x"],
          [52, "y", [2, [17, [15, "x"], "pathname"], "split", [7, "."]]],
          [
            52,
            "z",
            [
              39,
              [18, [17, [15, "y"], "length"], 1],
              [16, [15, "y"], [37, [17, [15, "y"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "z"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "t",
          [46, "x"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "x"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "x"], "pathname"],
              [0, "/", [17, [15, "x"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "u",
          [46, "x"],
          [41, "y"],
          [3, "y", ""],
          [
            22,
            [1, [15, "x"], [17, [15, "x"], "href"]],
            [
              46,
              [
                53,
                [41, "z"],
                [3, "z", [2, [17, [15, "x"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "y",
                  [
                    39,
                    [23, [15, "z"], 0],
                    [17, [15, "x"], "href"],
                    [
                      2,
                      [17, [15, "x"], "href"],
                      "substring",
                      [7, 0, [15, "z"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "y"]],
        ],
        [
          50,
          "w",
          [46, "x"],
          [52, "y", [8]],
          [43, [15, "y"], [15, "j"], true],
          [43, [15, "y"], [15, "f"], true],
          [43, [15, "x"], "eventMetadata", [15, "y"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmDownloadActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_downloads"],
        [52, "h", "file_download"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerDownloadActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "parseUrl"]],
        [52, "p", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "q",
          [
            0,
            "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$",
          ],
        ],
        [52, "v", ["m", [8, "checkValidation", true]]],
        [22, [28, [15, "v"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "x", "y"],
            ["y"],
            [52, "z", [8, "eventId", [16, [15, "x"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "z"], "deferrable", true]],
            ],
            [52, "ba", [16, [15, "x"], "gtm.elementUrl"]],
            [52, "bb", ["o", [15, "ba"]]],
            [22, [28, [15, "bb"]], [46, [36]]],
            [52, "bc", ["s", [15, "bb"]]],
            [22, [28, ["r", [15, "bc"]]], [46, [36]]],
            [
              52,
              "bd",
              [
                8,
                "link_id",
                [16, [15, "x"], "gtm.elementId"],
                "link_url",
                ["u", [15, "bb"]],
                "link_text",
                [16, [15, "x"], "gtm.elementText"],
                "file_name",
                ["t", [15, "bb"]],
                "file_extension",
                [15, "bc"],
              ],
            ],
            ["w", [15, "z"]],
            ["p", ["n"], [15, "h"], [15, "bd"], [15, "z"]],
          ],
          [15, "v"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_form",
        [46, "a"],
        [
          50,
          "t",
          [46, "z"],
          [52, "ba", [30, [16, [15, "z"], [15, "l"]], [8]]],
          [43, [15, "ba"], "event_usage", [7, 8]],
          [43, [15, "z"], [15, "l"], [15, "ba"]],
        ],
        [
          50,
          "u",
          [46, "z", "ba"],
          [52, "bb", [30, [16, [15, "z"], [15, "l"]], [8]]],
          [43, [15, "bb"], [15, "k"], true],
          [43, [15, "bb"], [15, "f"], true],
          [
            22,
            [1, [15, "o"], [16, [15, "ba"], "gtm.formCanceled"]],
            [46, [43, [15, "bb"], [15, "m"], true]],
          ],
          [43, [15, "z"], [15, "l"], [15, "bb"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmFormActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_form"],
        [52, "h", "form_submit"],
        [52, "i", "form_start"],
        [52, "j", "isRegistered"],
        [52, "k", "em_event"],
        [52, "l", "eventMetadata"],
        [52, "m", "form_event_canceled"],
        [52, "n", [17, [15, "a"], "instanceDestinationId"]],
        [52, "o", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]],
        [
          22,
          ["c", [15, "n"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerFormActivityCallback",
          [
            7,
            [17, [15, "a"], "instanceDestinationId"],
            [17, [15, "a"], "skipValidation"],
            [17, [15, "a"], "includeParams"],
          ],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "j"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [2, [15, "d"], "setItem", [7, [15, "j"], true]],
        [52, "p", ["require", "internal.addFormInteractionListener"]],
        [52, "q", ["require", "internal.addFormSubmitListener"]],
        [52, "r", ["require", "internal.getDestinationIds"]],
        [52, "s", ["require", "internal.sendGtagEvent"]],
        [52, "v", [8]],
        [
          52,
          "w",
          [
            51,
            "",
            [7, "z", "ba"],
            [22, [15, "ba"], [46, ["ba"]]],
            [52, "bb", [16, [15, "z"], "gtm.elementId"]],
            [22, [16, [15, "v"], [15, "bb"]], [46, [36]]],
            [43, [15, "v"], [15, "bb"], true],
            [
              52,
              "bc",
              [
                8,
                "form_id",
                [15, "bb"],
                "form_name",
                [16, [15, "z"], "gtm.interactedFormName"],
                "form_destination",
                [16, [15, "z"], "gtm.elementUrl"],
                "form_length",
                [16, [15, "z"], "gtm.interactedFormLength"],
                "first_field_id",
                [16, [15, "z"], "gtm.interactedFormFieldId"],
                "first_field_name",
                [16, [15, "z"], "gtm.interactedFormFieldName"],
                "first_field_type",
                [16, [15, "z"], "gtm.interactedFormFieldType"],
                "first_field_position",
                [16, [15, "z"], "gtm.interactedFormFieldPosition"],
              ],
            ],
            [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "bd"], "deferrable", true]],
            ],
            ["t", [15, "bd"]],
            ["u", [15, "bd"], [15, "z"]],
            ["s", ["r"], [15, "i"], [15, "bc"], [15, "bd"]],
          ],
        ],
        [52, "x", [16, [15, "b"], "useEnableAutoEventOnFormApis"]],
        [
          52,
          "y",
          [
            51,
            "",
            [7, "z", "ba"],
            ["w", [15, "z"], [44]],
            [
              52,
              "bb",
              [
                8,
                "form_id",
                [16, [15, "z"], "gtm.elementId"],
                "form_name",
                [16, [15, "z"], "gtm.interactedFormName"],
                "form_destination",
                [16, [15, "z"], "gtm.elementUrl"],
                "form_length",
                [16, [15, "z"], "gtm.interactedFormLength"],
                "form_submit_text",
                [
                  39,
                  [15, "x"],
                  [16, [15, "z"], "gtm.formSubmitElementText"],
                  [16, [15, "z"], "gtm.formSubmitButtonText"],
                ],
              ],
            ],
            [43, [15, "bb"], "event_callback", [15, "ba"]],
            [52, "bc", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "bc"], "deferrable", true]],
            ],
            ["t", [15, "bc"]],
            ["u", [15, "bc"], [15, "z"]],
            ["s", ["r"], [15, "h"], [15, "bb"], [15, "bc"]],
          ],
        ],
        [
          22,
          [15, "x"],
          [
            46,
            [
              53,
              [52, "z", ["require", "internal.addDataLayerEventListener"]],
              [52, "ba", ["require", "internal.enableAutoEventOnFormSubmit"]],
              [
                52,
                "bb",
                ["require", "internal.enableAutoEventOnFormInteraction"],
              ],
              [52, "bc", ["bb"]],
              [
                22,
                [28, [15, "bc"]],
                [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]],
              ],
              ["z", "gtm.formInteract", [15, "w"], [15, "bc"]],
              [
                52,
                "bd",
                [
                  "ba",
                  [8, "checkValidation", [28, [15, "o"]], "waitForTags", false],
                ],
              ],
              [
                22,
                [28, [15, "bd"]],
                [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]],
              ],
              ["z", "gtm.formSubmit", [15, "y"], [15, "bd"]],
            ],
          ],
          [
            46,
            ["p", [15, "w"]],
            [
              "q",
              [15, "y"],
              [
                8,
                "waitForCallbacks",
                false,
                "checkValidation",
                [28, [15, "o"]],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "s",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", ""],
          [
            22,
            [1, [15, "y"], [17, [15, "y"], "href"]],
            [
              46,
              [
                53,
                [41, "ba"],
                [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "z",
                  [
                    39,
                    [23, [15, "ba"], 0],
                    [17, [15, "y"], "href"],
                    [
                      2,
                      [17, [15, "y"], "href"],
                      "substring",
                      [7, 0, [15, "ba"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "t",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, [44]]]],
          [41, "z"],
          [3, "z", [17, [15, "y"], "hostname"]],
          [52, "ba", [2, [15, "z"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "ba"], [16, [15, "ba"], 0]],
            [
              46,
              [
                3,
                "z",
                [
                  2,
                  [15, "z"],
                  "substring",
                  [7, [17, [16, [15, "ba"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "z"]],
        ],
        [
          50,
          "u",
          [46, "y"],
          [22, [28, [15, "y"]], [46, [36, false]]],
          [52, "z", [2, [17, [15, "y"], "hostname"], "toLowerCase", [7]]],
          [41, "ba"],
          [3, "ba", [2, ["t", ["q", ["p"]]], "toLowerCase", [7]]],
          [41, "bb"],
          [
            3,
            "bb",
            [37, [17, [15, "z"], "length"], [17, [15, "ba"], "length"]],
          ],
          [
            22,
            [
              1,
              [18, [15, "bb"], 0],
              [29, [2, [15, "ba"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "bb"], [3, "bb", [37, [15, "bb"], 1]]],
              [3, "ba", [0, ".", [15, "ba"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "bb"], 0],
              [
                12,
                [2, [15, "z"], "indexOf", [7, [15, "ba"], [15, "bb"]]],
                [15, "bb"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [
          50,
          "x",
          [46, "y"],
          [52, "z", [8]],
          [43, [15, "z"], [15, "j"], true],
          [43, [15, "z"], [15, "f"], true],
          [43, [15, "y"], "eventMetadata", [15, "z"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmOutboundClickActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_outbound_click"],
        [52, "h", "click"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerOutbackClickActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "internal.getRemoteConfigParameter"]],
        [52, "p", ["require", "getUrl"]],
        [52, "q", ["require", "parseUrl"]],
        [52, "r", ["require", "internal.sendGtagEvent"]],
        [52, "v", ["o", [15, "k"], "cross_domain_conditions"]],
        [
          52,
          "w",
          [
            "m",
            [
              8,
              "affiliateDomains",
              [15, "v"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "y", "z"],
            [52, "ba", ["q", [16, [15, "y"], "gtm.elementUrl"]]],
            [22, [28, ["u", [15, "ba"]]], [46, ["z"], [36]]],
            [
              52,
              "bb",
              [
                8,
                "link_id",
                [16, [15, "y"], "gtm.elementId"],
                "link_classes",
                [16, [15, "y"], "gtm.elementClasses"],
                "link_url",
                ["s", [15, "ba"]],
                "link_domain",
                ["t", [15, "ba"]],
                "outbound",
                true,
              ],
            ],
            [43, [15, "bb"], "event_callback", [15, "z"]],
            [52, "bc", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "bc"], "deferrable", true]],
            ],
            ["x", [15, "bc"]],
            ["r", ["n"], [15, "h"], [15, "bb"], [15, "bc"]],
          ],
          [15, "w"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_page_view",
        [46, "a"],
        [
          50,
          "s",
          [46, "t"],
          [52, "u", [8]],
          [43, [15, "u"], [15, "k"], true],
          [43, [15, "u"], [15, "g"], true],
          [43, [15, "t"], "eventMetadata", [15, "u"]],
        ],
        [
          22,
          [28, [17, [15, "a"], "historyEvents"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "internal.setRemoteConfigParameter"]],
        [52, "e", ["require", "templateStorage"]],
        [52, "f", [15, "__module_ccdEmPageViewActivity"]],
        [52, "g", "speculative"],
        [52, "h", "ae_block_history"],
        [52, "i", "page_view"],
        [52, "j", "isRegistered"],
        [52, "k", "em_event"],
        [52, "l", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "l"], [15, "h"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [2, [15, "f"], "registerPageViewActivityCallback", [7, [15, "l"]]],
        [
          22,
          [2, [15, "e"], "getItem", [7, [15, "j"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "m", ["require", "internal.addDataLayerEventListener"]],
        [52, "n", ["require", "internal.enableAutoEventOnHistoryChange"]],
        [52, "o", ["require", "internal.getDestinationIds"]],
        [52, "p", ["require", "internal.sendGtagEvent"]],
        [52, "q", [8, "interval", 1000, "useV2EventName", true]],
        [52, "r", ["n", [15, "q"]]],
        [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "e"], "setItem", [7, [15, "j"], true]],
        [
          "m",
          "gtm.historyChange-v2",
          [
            51,
            "",
            [7, "t", "u"],
            ["u"],
            [52, "v", [16, [15, "t"], "gtm.oldUrl"]],
            [22, [20, [16, [15, "t"], "gtm.newUrl"], [15, "v"]], [46, [36]]],
            [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]],
            [
              22,
              [
                1,
                [1, [21, [15, "w"], "pushState"], [21, [15, "w"], "popstate"]],
                [21, [15, "w"], "replaceState"],
              ],
              [46, [36]],
            ],
            [52, "x", [8]],
            [
              22,
              [17, [15, "a"], "includeParams"],
              [
                46,
                [43, [15, "x"], "page_location", [16, [15, "t"], "gtm.newUrl"]],
                [43, [15, "x"], "page_referrer", [15, "v"]],
              ],
            ],
            [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "y"], "deferrable", true]],
            ],
            ["s", [15, "y"]],
            ["p", ["o"], [15, "i"], [15, "x"], [15, "y"]],
          ],
          [15, "r"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [
          50,
          "q",
          [46, "r"],
          [52, "s", [8]],
          [43, [15, "s"], [15, "j"], true],
          [43, [15, "s"], [15, "f"], true],
          [43, [15, "r"], "eventMetadata", [15, "s"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmScrollActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_scroll"],
        [52, "h", "scroll"],
        [52, "i", "isRegistered"],
        [52, "j", "em_event"],
        [52, "k", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "k"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerScrollActivityCallback",
          [7, [15, "k"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "i"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "l", ["require", "internal.addDataLayerEventListener"]],
        [52, "m", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "n", ["require", "internal.getDestinationIds"]],
        [52, "o", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "p",
          [
            "m",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "p"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "i"], true]],
        [
          "l",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "r", "s"],
            ["s"],
            [52, "t", [8, "eventId", [16, [15, "r"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "t"], "deferrable", true]],
            ],
            [
              52,
              "u",
              [8, "percent_scrolled", [16, [15, "r"], "gtm.scrollThreshold"]],
            ],
            ["q", [15, "t"]],
            ["o", ["n"], [15, "h"], [15, "u"], [15, "t"]],
          ],
          [15, "p"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", [15, "__module_ccdEmSiteSearchActivity"]],
        [
          52,
          "f",
          [
            2,
            [15, "e"],
            "getSearchTerm",
            [7, [17, [15, "a"], "searchQueryParams"], [15, "b"]],
          ],
        ],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          52,
          "h",
          [
            8,
            "deferrable",
            true,
            "eventId",
            [17, [15, "a"], "gtmEventId"],
            "eventMetadata",
            [8, "em_event", true],
          ],
        ],
        [
          22,
          [15, "f"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  [
                    2,
                    [15, "e"],
                    "buildEventParams",
                    [
                      7,
                      [15, "f"],
                      [17, [15, "a"], "additionalQueryParams"],
                      [15, "b"],
                    ],
                  ],
                  [8],
                ],
              ],
              ["c", [15, "g"], "view_search_results", [15, "i"], [15, "h"]],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_video",
        [46, "a"],
        [
          50,
          "s",
          [46, "t"],
          [52, "u", [8]],
          [43, [15, "u"], [15, "l"], true],
          [43, [15, "u"], [15, "f"], true],
          [43, [15, "t"], "eventMetadata", [15, "u"]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "templateStorage"]],
        [52, "e", [15, "__module_ccdEmVideoActivity"]],
        [52, "f", "speculative"],
        [52, "g", "ae_block_video"],
        [52, "h", "video_start"],
        [52, "i", "video_progress"],
        [52, "j", "video_complete"],
        [52, "k", "isRegistered"],
        [52, "l", "em_event"],
        [52, "m", [17, [15, "a"], "instanceDestinationId"]],
        [
          22,
          ["c", [15, "m"], [15, "g"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          2,
          [15, "e"],
          "registerVideoActivityCallback",
          [7, [15, "m"], [17, [15, "a"], "includeParams"]],
        ],
        [
          22,
          [2, [15, "d"], "getItem", [7, [15, "k"]]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["require", "internal.addDataLayerEventListener"]],
        [52, "o", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "p", ["require", "internal.getDestinationIds"]],
        [52, "q", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "r",
          [
            "o",
            [
              8,
              "captureComplete",
              true,
              "captureStart",
              true,
              "progressThresholdsPercent",
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [2, [15, "d"], "setItem", [7, [15, "k"], true]],
        [
          "n",
          "gtm.video",
          [
            51,
            "",
            [7, "t", "u"],
            ["u"],
            [52, "v", [16, [15, "t"], "gtm.videoStatus"]],
            [41, "w"],
            [
              22,
              [20, [15, "v"], "start"],
              [46, [3, "w", [15, "h"]]],
              [
                46,
                [
                  22,
                  [20, [15, "v"], "progress"],
                  [46, [3, "w", [15, "i"]]],
                  [
                    46,
                    [
                      22,
                      [20, [15, "v"], "complete"],
                      [46, [3, "w", [15, "j"]]],
                      [46, [36]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "x",
              [
                8,
                "video_current_time",
                [16, [15, "t"], "gtm.videoCurrentTime"],
                "video_duration",
                [16, [15, "t"], "gtm.videoDuration"],
                "video_percent",
                [16, [15, "t"], "gtm.videoPercent"],
                "video_provider",
                [16, [15, "t"], "gtm.videoProvider"],
                "video_title",
                [16, [15, "t"], "gtm.videoTitle"],
                "video_url",
                [16, [15, "t"], "gtm.videoUrl"],
                "visible",
                [16, [15, "t"], "gtm.videoVisible"],
              ],
            ],
            [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]],
            [
              22,
              [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
              [46, [43, [15, "y"], "deferrable", true]],
            ],
            ["s", [15, "y"]],
            ["q", ["p"], [15, "w"], [15, "x"], [15, "y"]],
          ],
          [15, "r"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
      [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]],
      [
        50,
        "__ccd_ga_regscope",
        [46, "a"],
        [52, "b", [15, "__module_ccdGaRegionScopedSettings"]],
        [2, [15, "b"], "applyRegionScopedSettings", [7, [15, "a"]]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__ogt_1p_data_v2",
        [46, "a"],
        [
          50,
          "j",
          [46, "m", "n", "o"],
          [
            22,
            [20, [16, [15, "n"], "type"], [15, "o"]],
            [
              46,
              [22, [28, [15, "m"]], [46, [3, "m", [8]]]],
              [
                22,
                [28, [16, [15, "m"], [15, "o"]]],
                [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]],
              ],
            ],
          ],
          [36, [15, "m"]],
        ],
        [
          50,
          "k",
          [46, "m", "n"],
          [52, "o", [16, [15, "a"], [15, "m"]]],
          [41, "p"],
          [
            22,
            [20, [15, "o"], "CSS_SELECTOR"],
            [46, [3, "p", "css_selector"]],
            [
              46,
              [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]],
            ],
          ],
          [
            36,
            [
              8,
              "selector_type",
              [15, "p"],
              "value",
              [16, [15, "a"], [15, "n"]],
            ],
          ],
        ],
        [
          50,
          "l",
          [46, "m", "n", "o", "p"],
          [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]],
          [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]],
        ],
        [
          22,
          [28, [17, [15, "a"], "isEnabled"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "b",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [52, "c", ["require", "internal.getDestinationIds"]],
        [52, "d", ["require", "internal.getProductSettingsParameter"]],
        [52, "e", ["require", "internal.detectUserProvidedData"]],
        [52, "f", ["require", "internal.setRemoteConfigParameter"]],
        [52, "g", ["require", "internal.registerCcdCallback"]],
        [52, "h", [30, ["c"], [7]]],
        [52, "i", [8, "enable_code", true]],
        [
          22,
          [17, [15, "a"], "isAutoEnabled"],
          [
            46,
            [
              53,
              [52, "m", [7]],
              [
                22,
                [
                  1,
                  [17, [15, "a"], "autoCollectExclusionSelectors"],
                  [
                    17,
                    [17, [15, "a"], "autoCollectExclusionSelectors"],
                    "length",
                  ],
                ],
                [
                  46,
                  [
                    53,
                    [41, "o"],
                    [3, "o", 0],
                    [
                      63,
                      [7, "o"],
                      [
                        23,
                        [15, "o"],
                        [
                          17,
                          [17, [15, "a"], "autoCollectExclusionSelectors"],
                          "length",
                        ],
                      ],
                      [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "p",
                            [
                              17,
                              [
                                16,
                                [
                                  17,
                                  [15, "a"],
                                  "autoCollectExclusionSelectors",
                                ],
                                [15, "o"],
                              ],
                              "exclusionSelector",
                            ],
                          ],
                          [
                            22,
                            [15, "p"],
                            [46, [2, [15, "m"], "push", [7, [15, "p"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                52,
                "n",
                [
                  39,
                  [17, [15, "a"], "isAutoCollectPiiEnabledFlag"],
                  [17, [15, "a"], "autoEmailEnabled"],
                  true,
                ],
              ],
              [
                43,
                [15, "i"],
                "auto_detect",
                [
                  8,
                  "email",
                  [15, "n"],
                  "phone",
                  [17, [15, "a"], "autoPhoneEnabled"],
                  "address",
                  [17, [15, "a"], "autoAddressEnabled"],
                  "exclude_element_selectors",
                  [15, "m"],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "isManualEnabled"],
          [
            46,
            [
              53,
              [52, "m", [8]],
              [
                22,
                [17, [15, "a"], "manualEmailEnabled"],
                [46, ["l", [15, "m"], "email", "emailType", "emailValue"]],
              ],
              [
                22,
                [17, [15, "a"], "manualPhoneEnabled"],
                [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]],
              ],
              [
                22,
                [17, [15, "a"], "manualAddressEnabled"],
                [
                  46,
                  [
                    53,
                    [52, "n", [8]],
                    [
                      "l",
                      [15, "n"],
                      "first_name",
                      "firstNameType",
                      "firstNameValue",
                    ],
                    [
                      "l",
                      [15, "n"],
                      "last_name",
                      "lastNameType",
                      "lastNameValue",
                    ],
                    ["l", [15, "n"], "street", "streetType", "streetValue"],
                    ["l", [15, "n"], "city", "cityType", "cityValue"],
                    ["l", [15, "n"], "region", "regionType", "regionValue"],
                    ["l", [15, "n"], "country", "countryType", "countryValue"],
                    [
                      "l",
                      [15, "n"],
                      "postal_code",
                      "postalCodeType",
                      "postalCodeValue",
                    ],
                    [43, [15, "m"], "name_and_address", [7, [15, "n"]]],
                  ],
                ],
              ],
              [43, [15, "i"], "selectors", [15, "m"]],
            ],
          ],
        ],
        [
          65,
          "m",
          [15, "h"],
          [
            46,
            [
              53,
              [41, "n"],
              [3, "n", [15, "i"]],
              [
                22,
                [
                  1,
                  [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0],
                  [28, [16, [15, "b"], "enableEuidAutoMode"]],
                ],
                [
                  46,
                  [
                    53,
                    [
                      52,
                      "q",
                      [
                        8,
                        "enable_code",
                        true,
                        "selectors",
                        [16, [15, "i"], "selectors"],
                      ],
                    ],
                    [3, "n", [15, "q"]],
                  ],
                ],
              ],
              ["f", [15, "m"], "user_data_settings", [15, "n"]],
              [52, "o", [16, [15, "n"], "auto_detect"]],
              [22, [28, [15, "o"]], [46, [6]]],
              [
                52,
                "p",
                [
                  51,
                  "",
                  [7, "q"],
                  [
                    52,
                    "r",
                    [
                      2,
                      [15, "q"],
                      "getMetadata",
                      [7, "user_data_from_automatic"],
                    ],
                  ],
                  [22, [15, "r"], [46, [36, [15, "r"]]]],
                  [
                    52,
                    "s",
                    [
                      "e",
                      [
                        8,
                        "excludeElementSelectors",
                        [16, [15, "o"], "exclude_element_selectors"],
                        "fieldFilters",
                        [
                          8,
                          "email",
                          [16, [15, "o"], "email"],
                          "phone",
                          [16, [15, "o"], "phone"],
                          "address",
                          [16, [15, "o"], "address"],
                        ],
                      ],
                    ],
                  ],
                  [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]],
                  [52, "u", [8]],
                  [
                    22,
                    [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]],
                    [
                      46,
                      [
                        53,
                        [41, "v"],
                        [
                          53,
                          [41, "w"],
                          [3, "w", 0],
                          [
                            63,
                            [7, "w"],
                            [23, [15, "w"], [17, [15, "t"], "length"]],
                            [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]],
                            [
                              46,
                              [
                                53,
                                [52, "x", [16, [15, "t"], [15, "w"]]],
                                ["j", [15, "u"], [15, "x"], "email"],
                                [
                                  22,
                                  [
                                    16,
                                    [15, "b"],
                                    "enableAutoPiiOnPhoneAndAddress",
                                  ],
                                  [
                                    46,
                                    ["j", [15, "u"], [15, "x"], "phone_number"],
                                    [
                                      3,
                                      "v",
                                      ["j", [15, "v"], [15, "x"], "first_name"],
                                    ],
                                    [
                                      3,
                                      "v",
                                      ["j", [15, "v"], [15, "x"], "last_name"],
                                    ],
                                    [
                                      3,
                                      "v",
                                      ["j", [15, "v"], [15, "x"], "country"],
                                    ],
                                    [
                                      3,
                                      "v",
                                      [
                                        "j",
                                        [15, "v"],
                                        [15, "x"],
                                        "postal_code",
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [
                          22,
                          [1, [15, "v"], [28, [16, [15, "u"], "address"]]],
                          [46, [43, [15, "u"], "address", [15, "v"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    2,
                    [15, "q"],
                    "setMetadata",
                    [7, "user_data_from_automatic", [15, "u"]],
                  ],
                  [36, [15, "u"]],
                ],
              ],
              [
                "g",
                [15, "m"],
                [
                  51,
                  "",
                  [7, "q"],
                  [
                    2,
                    [15, "q"],
                    "setMetadata",
                    [7, "user_data_from_automatic_getter", [15, "p"]],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          52,
          "e",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "e"],
          "google_signals",
          [20, [17, [15, "a"], "serverMacroResult"], 1],
        ],
        [
          52,
          "f",
          [
            39,
            [17, [15, "d"], "renameOnoToNonGaiaRemarketing"],
            "google_ng",
            "google_ono",
          ],
        ],
        [
          "b",
          [15, "e"],
          [15, "f"],
          [20, [17, [15, "a"], "serverMacroResult"], 2],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_activities",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "b",
                  [46, "c", "d"],
                  [36, [39, [15, "d"], ["d", [15, "c"]], [15, "c"]]],
                ],
                [36, [8, "withRequestContext", [15, "b"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmDownloadActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [2, [15, "k"], "setHitData", [7, "link_id", [44]]],
                          [2, [15, "k"], "setHitData", [7, "link_url", [44]]],
                          [2, [15, "k"], "setHitData", [7, "link_text", [44]]],
                          [2, [15, "k"], "setHitData", [7, "file_name", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "file_extension", [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_downloads"],
                [52, "f", "file_download"],
                [52, "g", "em_event"],
                [36, [8, "registerDownloadActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmFormActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "l",
                  [46, "m", "n", "o"],
                  [
                    22,
                    [1, [15, "k"], [20, [15, "n"], [44]]],
                    [
                      46,
                      [3, "n", [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0]],
                    ],
                  ],
                  [
                    "d",
                    [15, "m"],
                    [
                      51,
                      "",
                      [7, "p"],
                      [52, "q", [2, [15, "p"], "getEventName", [7]]],
                      [
                        52,
                        "r",
                        [
                          30,
                          [20, [15, "q"], [15, "h"]],
                          [20, [15, "q"], [15, "g"]],
                        ],
                      ],
                      [
                        22,
                        [
                          30,
                          [28, [15, "r"]],
                          [28, [2, [15, "p"], "getMetadata", [7, [15, "i"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["c", [15, "m"], [15, "f"]],
                        [46, [2, [15, "p"], "abort", [7]], [36]],
                      ],
                      [
                        22,
                        [15, "k"],
                        [
                          46,
                          [
                            22,
                            [
                              1,
                              [28, [15, "n"]],
                              [2, [15, "p"], "getMetadata", [7, [15, "j"]]],
                            ],
                            [46, [2, [15, "p"], "abort", [7]], [36]],
                          ],
                        ],
                      ],
                      [2, [15, "p"], "setMetadata", [7, [15, "e"], false]],
                      [
                        22,
                        [28, [15, "o"]],
                        [
                          46,
                          [2, [15, "p"], "setHitData", [7, "form_id", [44]]],
                          [2, [15, "p"], "setHitData", [7, "form_name", [44]]],
                          [
                            2,
                            [15, "p"],
                            "setHitData",
                            [7, "form_destination", [44]],
                          ],
                          [
                            2,
                            [15, "p"],
                            "setHitData",
                            [7, "form_length", [44]],
                          ],
                          [
                            22,
                            [20, [15, "q"], [15, "g"]],
                            [
                              46,
                              [
                                2,
                                [15, "p"],
                                "setHitData",
                                [7, "form_submit_text", [44]],
                              ],
                            ],
                            [
                              46,
                              [
                                22,
                                [20, [15, "q"], [15, "h"]],
                                [
                                  46,
                                  [
                                    2,
                                    [15, "p"],
                                    "setHitData",
                                    [7, "first_field_id", [44]],
                                  ],
                                  [
                                    2,
                                    [15, "p"],
                                    "setHitData",
                                    [7, "first_field_name", [44]],
                                  ],
                                  [
                                    2,
                                    [15, "p"],
                                    "setHitData",
                                    [7, "first_field_type", [44]],
                                  ],
                                  [
                                    2,
                                    [15, "p"],
                                    "setHitData",
                                    [7, "first_field_position", [44]],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "b",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", "speculative"],
                [52, "f", "ae_block_form"],
                [52, "g", "form_submit"],
                [52, "h", "form_start"],
                [52, "i", "em_event"],
                [52, "j", "form_event_canceled"],
                [
                  52,
                  "k",
                  [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]],
                ],
                [36, [8, "registerFormActivityCallback", [15, "l"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmOutboundClickActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [2, [15, "k"], "setHitData", [7, "link_id", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "link_classes", [44]],
                          ],
                          [2, [15, "k"], "setHitData", [7, "link_url", [44]]],
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "link_domain", [44]],
                          ],
                          [2, [15, "k"], "setHitData", [7, "outbound", [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_outbound_click"],
                [52, "f", "click"],
                [52, "g", "em_event"],
                [36, [8, "registerOutbackClickActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmPageViewActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "j",
                  [46, "k"],
                  [
                    "c",
                    [15, "k"],
                    [
                      51,
                      "",
                      [7, "l"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "l"], "getEventName", [7]], [15, "h"]],
                          [28, [2, [15, "l"], "getMetadata", [7, [15, "i"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "k"], [15, "g"]],
                        [46, [2, [15, "l"], "abort", [7]], [36]],
                      ],
                      [
                        22,
                        [28, [2, [15, "l"], "getMetadata", [7, [15, "f"]]]],
                        [
                          46,
                          [
                            "d",
                            [15, "k"],
                            "page_referrer",
                            [2, [15, "l"], "getHitData", [7, "page_referrer"]],
                          ],
                        ],
                      ],
                      [2, [15, "l"], "setMetadata", [7, [15, "e"], false]],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", ["require", "internal.setRemoteConfigParameter"]],
                [52, "e", "speculative"],
                [52, "f", "is_sgtm_prehit"],
                [52, "g", "ae_block_history"],
                [52, "h", "page_view"],
                [52, "i", "em_event"],
                [36, [8, "registerPageViewActivityCallback", [15, "j"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmSiteSearchActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "b",
                  [46, "d", "e"],
                  [52, "f", [2, [30, [15, "d"], ""], "split", [7, ","]]],
                  [
                    53,
                    [41, "g"],
                    [3, "g", 0],
                    [
                      63,
                      [7, "g"],
                      [23, [15, "g"], [17, [15, "f"], "length"]],
                      [33, [15, "g"], [3, "g", [0, [15, "g"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "h",
                            ["e", [2, [16, [15, "f"], [15, "g"]], "trim", [7]]],
                          ],
                          [22, [21, [15, "h"], [44]], [46, [36, [15, "h"]]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "c",
                  [46, "d", "e", "f"],
                  [52, "g", [8, "search_term", [15, "d"]]],
                  [52, "h", [2, [30, [15, "e"], ""], "split", [7, ","]]],
                  [
                    53,
                    [41, "i"],
                    [3, "i", 0],
                    [
                      63,
                      [7, "i"],
                      [23, [15, "i"], [17, [15, "h"], "length"]],
                      [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "j",
                            [2, [16, [15, "h"], [15, "i"]], "trim", [7]],
                          ],
                          [52, "k", ["f", [15, "j"]]],
                          [
                            22,
                            [21, [15, "k"], [44]],
                            [
                              46,
                              [43, [15, "g"], [0, "q_", [15, "j"]], [15, "k"]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "g"]],
                ],
                [
                  36,
                  [
                    8,
                    "getSearchTerm",
                    [15, "b"],
                    "buildEventParams",
                    [15, "c"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmScrollActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "h",
                  [46, "i", "j"],
                  [
                    "c",
                    [15, "i"],
                    [
                      51,
                      "",
                      [7, "k"],
                      [
                        22,
                        [
                          30,
                          [21, [2, [15, "k"], "getEventName", [7]], [15, "f"]],
                          [28, [2, [15, "k"], "getMetadata", [7, [15, "g"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "i"], [15, "e"]],
                        [46, [2, [15, "k"], "abort", [7]], [36]],
                      ],
                      [2, [15, "k"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "j"]],
                        [
                          46,
                          [
                            2,
                            [15, "k"],
                            "setHitData",
                            [7, "percent_scrolled", [44]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_scroll"],
                [52, "f", "scroll"],
                [52, "g", "em_event"],
                [36, [8, "registerScrollActivityCallback", [15, "h"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdEmVideoActivity",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "j",
                  [46, "k", "l"],
                  [
                    "c",
                    [15, "k"],
                    [
                      51,
                      "",
                      [7, "m"],
                      [52, "n", [2, [15, "m"], "getEventName", [7]]],
                      [
                        52,
                        "o",
                        [
                          30,
                          [
                            30,
                            [20, [15, "n"], [15, "f"]],
                            [20, [15, "n"], [15, "g"]],
                          ],
                          [20, [15, "n"], [15, "h"]],
                        ],
                      ],
                      [
                        22,
                        [
                          30,
                          [28, [15, "o"]],
                          [28, [2, [15, "m"], "getMetadata", [7, [15, "i"]]]],
                        ],
                        [46, [36]],
                      ],
                      [
                        22,
                        ["b", [15, "k"], [15, "e"]],
                        [46, [2, [15, "m"], "abort", [7]], [36]],
                      ],
                      [2, [15, "m"], "setMetadata", [7, [15, "d"], false]],
                      [
                        22,
                        [28, [15, "l"]],
                        [
                          46,
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_current_time", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_duration", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_percent", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_provider", [44]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "setHitData",
                            [7, "video_title", [44]],
                          ],
                          [2, [15, "m"], "setHitData", [7, "video_url", [44]]],
                          [2, [15, "m"], "setHitData", [7, "visible", [44]]],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "internal.getProductSettingsParameter"]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "speculative"],
                [52, "e", "ae_block_video"],
                [52, "f", "video_start"],
                [52, "g", "video_progress"],
                [52, "h", "video_complete"],
                [52, "i", "em_event"],
                [36, [8, "registerVideoActivityCallback", [15, "j"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
      [
        52,
        "__module_ccdGaRegionScopedSettings",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "j",
                  [46, "l", "m"],
                  [
                    50,
                    "r",
                    [46, "s"],
                    [
                      22,
                      [30, [28, [15, "p"]], [21, [17, [15, "p"], "length"], 2]],
                      [46, [36, false]],
                    ],
                    [52, "t", ["k", [15, "s"]]],
                    [
                      53,
                      [41, "u"],
                      [3, "u", 0],
                      [
                        63,
                        [7, "u"],
                        [23, [15, "u"], [17, [15, "t"], "length"]],
                        [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]],
                        [
                          46,
                          [
                            53,
                            [52, "v", [16, [15, "t"], [15, "u"]]],
                            [52, "w", [17, [15, "v"], "countryCode"]],
                            [52, "x", [17, [15, "v"], "regionCode"]],
                            [52, "y", [20, [15, "w"], [15, "p"]]],
                            [
                              52,
                              "z",
                              [30, [28, [15, "x"]], [20, [15, "x"], [15, "q"]]],
                            ],
                            [22, [1, [15, "y"], [15, "z"]], [46, [36, true]]],
                          ],
                        ],
                      ],
                    ],
                    [36, false],
                  ],
                  [22, [28, [17, [15, "l"], "settingsTable"]], [46, [36]]],
                  [
                    52,
                    "n",
                    [
                      30,
                      [17, [15, "l"], "instanceDestinationId"],
                      [17, ["b"], "containerId"],
                    ],
                  ],
                  [52, "o", ["g", [15, "c"], [15, "m"]]],
                  [
                    52,
                    "p",
                    [
                      13,
                      [41, "$0"],
                      [3, "$0", ["g", [15, "d"], [15, "m"]]],
                      ["$0"],
                    ],
                  ],
                  [
                    52,
                    "q",
                    [
                      13,
                      [41, "$0"],
                      [3, "$0", ["g", [15, "e"], [15, "m"]]],
                      ["$0"],
                    ],
                  ],
                  [
                    53,
                    [41, "s"],
                    [3, "s", 0],
                    [
                      63,
                      [7, "s"],
                      [
                        23,
                        [15, "s"],
                        [17, [17, [15, "l"], "settingsTable"], "length"],
                      ],
                      [33, [15, "s"], [3, "s", [0, [15, "s"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "t",
                            [16, [17, [15, "l"], "settingsTable"], [15, "s"]],
                          ],
                          [
                            22,
                            [
                              30,
                              [17, [15, "t"], "disallowAllRegions"],
                              ["r", [17, [15, "t"], "disallowedRegions"]],
                            ],
                            [
                              46,
                              [
                                53,
                                [
                                  52,
                                  "u",
                                  [
                                    16,
                                    [15, "i"],
                                    [17, [15, "t"], "redactFieldGroup"],
                                  ],
                                ],
                                [22, [28, [15, "u"]], [46, [6]]],
                                [
                                  53,
                                  [41, "v"],
                                  [3, "v", 0],
                                  [
                                    63,
                                    [7, "v"],
                                    [23, [15, "v"], [17, [15, "u"], "length"]],
                                    [
                                      33,
                                      [15, "v"],
                                      [3, "v", [0, [15, "v"], 1]],
                                    ],
                                    [
                                      46,
                                      [
                                        53,
                                        [52, "w", [16, [15, "u"], [15, "v"]]],
                                        [
                                          "o",
                                          [15, "n"],
                                          [17, [15, "w"], "name"],
                                          [17, [15, "w"], "value"],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  50,
                  "k",
                  [46, "l"],
                  [52, "m", [7]],
                  [22, [28, [15, "l"]], [46, [36, [15, "m"]]]],
                  [52, "n", [2, [15, "l"], "split", [7, ","]]],
                  [
                    53,
                    [41, "o"],
                    [3, "o", 0],
                    [
                      63,
                      [7, "o"],
                      [23, [15, "o"], [17, [15, "n"], "length"]],
                      [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]],
                      [
                        46,
                        [
                          53,
                          [
                            52,
                            "p",
                            [2, [16, [15, "n"], [15, "o"]], "trim", [7]],
                          ],
                          [22, [28, [15, "p"]], [46, [6]]],
                          [52, "q", [2, [15, "p"], "split", [7, "-"]]],
                          [52, "r", [16, [15, "q"], 0]],
                          [
                            52,
                            "s",
                            [
                              39,
                              [20, [17, [15, "q"], "length"], 2],
                              [15, "p"],
                              [44],
                            ],
                          ],
                          [
                            22,
                            [
                              30,
                              [28, [15, "r"]],
                              [21, [17, [15, "r"], "length"], 2],
                            ],
                            [46, [6]],
                          ],
                          [
                            22,
                            [
                              1,
                              [21, [15, "s"], [44]],
                              [
                                30,
                                [23, [17, [15, "s"], "length"], 4],
                                [18, [17, [15, "s"], "length"], 6],
                              ],
                            ],
                            [46, [6]],
                          ],
                          [
                            2,
                            [15, "m"],
                            "push",
                            [
                              7,
                              [
                                8,
                                "countryCode",
                                [15, "r"],
                                "regionCode",
                                [15, "s"],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [36, [15, "m"]],
                ],
                [52, "b", ["require", "getContainerVersion"]],
                [52, "c", ["require", "internal.setRemoteConfigParameter"]],
                [52, "d", ["require", "internal.getCountryCode"]],
                [52, "e", ["require", "internal.getRegionCode"]],
                [52, "f", [15, "__module_activities"]],
                [52, "g", [17, [15, "f"], "withRequestContext"]],
                [41, "h"],
                [
                  52,
                  "i",
                  [
                    8,
                    "GOOGLE_SIGNALS",
                    [7, [8, "name", "allow_google_signals", "value", false]],
                    "DEVICE_AND_GEO",
                    [
                      7,
                      [8, "name", "geo_granularity", "value", true],
                      [8, "name", "redact_device_info", "value", true],
                    ],
                  ],
                ],
                [36, [8, "applyRegionScopedSettings", [15, "j"]]],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __ccd_conversion_marking: { 2: true, 4: true },
      __ccd_em_download: { 2: true, 4: true },
      __ccd_em_form: { 2: true, 4: true },
      __ccd_em_outbound_click: { 2: true, 4: true },
      __ccd_em_page_view: { 2: true, 4: true },
      __ccd_em_scroll: { 2: true, 4: true },
      __ccd_em_site_search: { 2: true, 4: true },
      __ccd_em_video: { 2: true, 4: true },
      __ccd_ga_first: { 2: true, 4: true },
      __ccd_ga_last: { 2: true, 4: true },
      __ccd_ga_regscope: { 2: true, 4: true },
      __e: { 2: true, 4: true },
      __ogt_1p_data_v2: { 2: true },
      __ogt_google_signals: { 2: true, 4: true },
      __set_product_settings: { 2: true, 4: true },
    },
    permissions: {
      __ccd_conversion_marking: {},
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: "" },
      },
      __ccd_em_form: {
        access_template_storage: {},
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.formInteract", "gtm.formSubmit"],
        },
        detect_form_submit_events: { allowWaitForTags: "" },
        detect_form_interaction_events: {},
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        access_template_storage: {},
        detect_link_click_events: { allowWaitForTags: "" },
      },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.historyChange-v2"],
        },
        access_template_storage: {},
        detect_history_change_events: {},
      },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "resize" },
            { targetType: "window", eventName: "scroll" },
            { targetType: "window", eventName: "scrollend" },
          ],
        },
        access_template_storage: {},
        detect_scroll_events: {},
      },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
      __ccd_em_video: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.video"],
        },
        access_template_storage: {},
        detect_youtube_activity_events: { allowFixMissingJavaScriptApi: false },
      },
      __ccd_ga_first: {},
      __ccd_ga_last: {},
      __ccd_ga_regscope: { read_container_data: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __ogt_1p_data_v2: {
        detect_user_provided_data: {
          limitDataSources: true,
          allowAutoDataSources: true,
          allowManualDataSources: false,
          allowCodeDataSources: false,
        },
      },
      __ogt_google_signals: { read_container_data: {} },
      __set_product_settings: {},
    },

    security_groups: {
      google: [
        "__ccd_conversion_marking",
        "__ccd_em_download",
        "__ccd_em_form",
        "__ccd_em_outbound_click",
        "__ccd_em_page_view",
        "__ccd_em_scroll",
        "__ccd_em_site_search",
        "__ccd_em_video",
        "__ccd_ga_first",
        "__ccd_ga_last",
        "__ccd_ga_regscope",
        "__e",
        "__ogt_1p_data_v2",
        "__ogt_google_signals",
        "__set_product_settings",
      ],
    },
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    fa = ea(this),
    ha = function (a, b) {
      if (b)
        a: {
          for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            h = c[g],
            m = b(h);
          m != h &&
            null != m &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    },
    ia = function (a) {
      return (a.raw = a);
    },
    ja = function (a, b) {
      a.raw = b;
      return a;
    },
    la = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    na = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    oa = function (a) {
      return a instanceof Array ? a : na(la(a));
    },
    pa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ha("Object.assign", function (a) {
    return a || pa;
  });
  var ra =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    sa;
  if ("function" == typeof Object.setPrototypeOf) sa = Object.setPrototypeOf;
  else {
    var ta;
    a: {
      var ua = { a: !0 },
        va = {};
      try {
        va.__proto__ = ua;
        ta = va.a;
        break a;
      } catch (a) {}
      ta = !1;
    }
    sa = ta
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var wa = sa,
    xa = function (a, b) {
      a.prototype = ra(b.prototype);
      a.prototype.constructor = a;
      if (wa) wa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.xn = b.prototype;
    },
    za = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self,
    Ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? Ca
          : Ea;
      return Fa.apply(null, arguments);
    },
    Ga = function (a) {
      return a;
    };
  var Ha = function (a, b) {
    this.m = a;
    this.D = b;
  };
  var Ia = function () {
    this.m = {};
    this.F = {};
  };
  aa = Ia.prototype;
  aa.get = function (a) {
    return this.m["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || (this.m[a] = b);
  };
  aa.Ih = function (a, b) {
    this.set(a, b);
    this.F["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.m.hasOwnProperty("dust." + a);
  };
  aa.vf = function (a) {
    a = "dust." + a;
    this.F.hasOwnProperty(a) || delete this.m[a];
  };
  var Ja = function () {
    this.quota = {};
  };
  Ja.prototype.reset = function () {
    this.quota = {};
  };
  var Ka = function (a, b) {
    this.Z = a;
    this.P = function (c, d, e) {
      return c.apply(d, e);
    };
    this.F = b;
    this.D = new Ia();
    this.m = this.J = void 0;
  };
  Ka.prototype.add = function (a, b) {
    La(this, a, b, !1);
  };
  var La = function (a, b, c, d) {
    d ? a.D.Ih(b, c) : a.D.set(b, c);
  };
  Ka.prototype.set = function (a, b) {
    !this.D.has(a) && this.F && this.F.has(a)
      ? this.F.set(a, b)
      : this.D.set(a, b);
  };
  Ka.prototype.get = function (a) {
    return this.D.has(a) ? this.D.get(a) : this.F ? this.F.get(a) : void 0;
  };
  Ka.prototype.has = function (a) {
    return !!this.D.has(a) || !(!this.F || !this.F.has(a));
  };
  var Ma = function (a) {
    var b = new Ka(a.Z, a);
    a.J && (b.J = a.J);
    b.P = a.P;
    b.m = a.m;
    return b;
  };
  function Na(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Oa(a, b[d])), c instanceof Ha);
      d++
    );
    return c;
  }
  function Oa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke)
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.J;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Pa = function () {
    this.F = new Ja();
    this.m = new Ka(this.F);
  };
  Pa.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.D(c);
  };
  Pa.prototype.D = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = Oa(this.m, arguments[c]);
    return b;
  };
  Pa.prototype.J = function (a, b) {
    var c = Ma(this.m);
    c.m = a;
    for (var d, e = 1; e < arguments.length; e++) d = Oa(c, arguments[e]);
    return d;
  };
  var Qa = function () {
    Ia.call(this);
    this.D = !1;
  };
  xa(Qa, Ia);
  var Ra = function (a, b) {
    var c = [],
      d;
    for (d in a.m)
      if (a.m.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  Qa.prototype.set = function (a, b) {
    this.D || Ia.prototype.set.call(this, a, b);
  };
  Qa.prototype.Ih = function (a, b) {
    this.D || Ia.prototype.Ih.call(this, a, b);
  };
  Qa.prototype.vf = function (a) {
    this.D || Ia.prototype.vf.call(this, a);
  };
  Qa.prototype.Ib = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Sa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ta = function (a) {
      if (null == a) return String(a);
      var b = Sa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ua = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Va = function (a) {
      if (!a || "object" != Ta(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ua(a, "constructor") &&
          !Ua(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Ua(a, b);
    },
    k = function (a, b) {
      var c = b || ("array" == Ta(a) ? [] : {}),
        d;
      for (d in a)
        if (Ua(a, d)) {
          var e = a[d];
          "array" == Ta(e)
            ? ("array" != Ta(c[d]) && (c[d] = []), (c[d] = k(e, c[d])))
            : Va(e)
            ? (Va(c[d]) || (c[d] = {}), (c[d] = k(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Wa = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Xa = function (a) {
      if (void 0 == a || Array.isArray(a) || Va(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    Ya = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    };
  var Za = function (a) {
    this.D = new Qa();
    this.m = [];
    this.F = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Ya(b) ? (this.m[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  aa = Za.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.m.length; c++) {
      var d = this.m[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof Za
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.F)
      if ("length" === a) {
        if (!Ya(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.m.length = Number(b);
      } else Ya(a) ? (this.m[Number(a)] = b) : this.D.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a
      ? this.length()
      : Ya(a)
      ? this.m[Number(a)]
      : this.D.get(a);
  };
  aa.length = function () {
    return this.m.length;
  };
  aa.Xb = function () {
    for (var a = Ra(this.D, 1), b = 0; b < this.m.length; b++) a.push(b + "");
    return new Za(a);
  };
  var $a = function (a, b) {
    Ya(b) ? delete a.m[Number(b)] : a.D.vf(b);
  };
  aa = Za.prototype;
  aa.pop = function () {
    return this.m.pop();
  };
  aa.push = function (a) {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.m.shift();
  };
  aa.splice = function (a, b, c) {
    return new Za(this.m.splice.apply(this.m, arguments));
  };
  aa.unshift = function (a) {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return (Ya(a) && this.m.hasOwnProperty(a)) || this.D.has(a);
  };
  aa.Ib = function () {
    this.F = !0;
    Object.freeze(this.m);
    this.D.Ib();
  };
  var ab = function () {
    Qa.call(this);
  };
  xa(ab, Qa);
  ab.prototype.Xb = function () {
    return new Za(Ra(this, 1));
  };
  function bb() {
    for (var a = cb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function db() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var cb, eb;
  function fb(a) {
    cb = cb || db();
    eb = eb || bb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(cb[m], cb[n], cb[p], cb[q]);
    }
    return b.join("");
  }
  function gb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = eb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    cb = cb || db();
    eb = eb || bb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var hb = {},
    ib = function (a, b) {
      hb[a] = hb[a] || [];
      hb[a][b] = !0;
    },
    jb = function (a) {
      var b = hb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return fb(c.join("")).replace(/\.+$/, "");
    },
    kb = function () {
      for (var a = [], b = hb.fdr || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var mb = function () {},
    nb = function (a) {
      return "function" === typeof a;
    },
    l = function (a) {
      return "string" === typeof a;
    },
    ob = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    pb = function (a, b) {
      if (a && Array.isArray(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    qb = function (a, b) {
      if (!ob(a) || !ob(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    sb = function (a, b) {
      for (var c = new rb(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    z = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    tb = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    ub = function (a) {
      return Math.round(Number(a)) || 0;
    },
    vb = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    wb = function (a) {
      var b = [];
      if (Array.isArray(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    xb = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    yb = function () {
      return new Date(Date.now());
    },
    zb = function () {
      return yb().getTime();
    },
    rb = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  rb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  rb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ab = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Bb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Cb = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Db = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Eb = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Fb = function (a, b) {
      var c = D;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Gb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Hb = /^\w{1,9}$/,
    Ib = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      z(a, function (d, e) {
        Hb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Jb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var Kb = [],
    Lb = {},
    Mb = function (a) {
      return void 0 == Kb[a] ? !1 : Kb[a];
    };
  var Nb,
    Ob = function () {
      if (void 0 === Nb) {
        var a = null,
          b = Aa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            });
          } catch (c) {
            Aa.console && Aa.console.error(c.message);
          }
          Nb = a;
        } else Nb = a;
      }
      return Nb;
    };
  var Pb = function (a) {
    this.m = a;
  };
  Pb.prototype.toString = function () {
    return this.m + "";
  };
  var Qb = function (a) {
      return a instanceof Pb && a.constructor === Pb
        ? a.m
        : "type_error:TrustedResourceUrl";
    },
    Rb = {},
    Sb = function (a) {
      var b = a,
        c = Ob(),
        d = c ? c.createScriptURL(b) : b;
      return new Pb(d, Rb);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Tb = ia([""]),
    Ub = ja(["\x00"], ["\\0"]),
    Vb = ja(["\n"], ["\\n"]),
    Wb = ja(["\x00"], ["\\u0000"]);
  function Xb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Xb(function (a) {
    return a(Tb);
  }) ||
    Xb(function (a) {
      return a(Ub);
    }) ||
    Xb(function (a) {
      return a(Vb);
    }) ||
    Xb(function (a) {
      return a(Wb);
    });
  var Yb = {};
  var Zb = function () {};
  Zb.prototype.toString = function () {
    return this.Dj;
  };
  function $b(a) {
    var b = new Zb();
    b.Dj = a;
    return b;
  }
  $b("about:blank");
  var ac = $b("about:invalid#zClosurez");
  var bc = function (a) {
    this.Il = a;
  };
  function cc(a) {
    return new bc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var dc = [
    cc("data"),
    cc("http"),
    cc("https"),
    cc("mailto"),
    cc("ftp"),
    new bc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function ec(a, b) {
    b = void 0 === b ? dc : b;
    if (a instanceof Zb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof bc && d.Il(a)) return $b(a);
    }
  }
  function fc(a) {
    var b;
    b = void 0 === b ? dc : b;
    return ec(a, b) || ac;
  }
  var gc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function hc(a) {
    var b;
    if (a instanceof Zb)
      if (a instanceof Zb) b = a.Dj;
      else throw Error("");
    else b = gc.test(a) ? a : void 0;
    return b;
  }
  var ic = function () {},
    jc = function (a) {
      this.m = a;
    };
  xa(jc, ic);
  jc.prototype.toString = function () {
    return this.m;
  };
  var kc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var lc, mc;
  a: {
    for (var nc = ["CLOSURE_FLAGS"], oc = Aa, pc = 0; pc < nc.length; pc++)
      if (((oc = oc[nc[pc]]), null == oc)) {
        mc = null;
        break a;
      }
    mc = oc;
  }
  var qc = mc && mc[610401301];
  lc = null != qc ? qc : !1;
  function rc() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var sc,
    tc = Aa.navigator;
  sc = tc ? tc.userAgentData || null : null;
  function uc(a) {
    return lc
      ? sc
        ? sc.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function vc(a) {
    return -1 != rc().indexOf(a);
  }
  function wc() {
    return lc ? !!sc && 0 < sc.brands.length : !1;
  }
  function xc() {
    return wc() ? !1 : vc("Opera");
  }
  function yc() {
    return vc("Firefox") || vc("FxiOS");
  }
  function zc() {
    return wc()
      ? uc("Chromium")
      : ((vc("Chrome") || vc("CriOS")) && !(wc() ? 0 : vc("Edge"))) ||
          vc("Silk");
  }
  var Ac = {},
    Bc = function (a) {
      this.m = a;
    };
  Bc.prototype.toString = function () {
    return this.m.toString();
  };
  function Cc(a, b) {
    var c = [new jc(Dc[0].toLowerCase(), Yb)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof jc) g = f.m;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Ec(a, b) {
    var c = hc(b);
    void 0 !== c && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function Fc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var D = window,
    G = document,
    Gc = navigator,
    Hc = function () {
      var a;
      try {
        a = Gc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    Ic = G.currentScript && G.currentScript.src,
    Jc = function (a, b) {
      var c = D[a];
      D[a] = void 0 === c ? b : c;
      return D[a];
    },
    Kc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Lc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Mc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Nc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Oc = function (a, b, c, d, e) {
      var f = G.createElement("script");
      Nc(f, d, Lc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Sb(Fc(a));
      f.src = Qb(g);
      var h,
        m,
        n,
        p =
          null ==
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Kc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = G.getElementsByTagName("script")[0] || G.body || G.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Pc = function () {
      if (Ic) {
        var a = Ic.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Qc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = G.createElement("iframe")), (h = !0));
      Nc(g, c, Mc);
      d &&
        z(d, function (p, q) {
          g.dataset[p] = q;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (!Mb(23)) {
        if (h) {
          var m = (G.body && G.body.lastChild) || G.body || G.head;
          m.parentNode.insertBefore(g, m);
        }
        Kc(g, b);
      }
      void 0 !== a && (g.src = a);
      if (Mb(23)) {
        if (h) {
          var n = (G.body && G.body.lastChild) || G.body || G.head;
          n.parentNode.insertBefore(g, n);
        }
        Kc(g, b);
      }
      return g;
    },
    Rc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Nc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Sc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Tc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      D.setTimeout(a, 0);
    },
    Uc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Vc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Wc = function (a) {
      var b = G.createElement("div"),
        c = b,
        d,
        e = Fc("A<div>" + a + "</div>"),
        f = Ob(),
        g = f ? f.createHTML(e) : e;
      d = new Bc(g, Ac);
      if (1 === c.nodeType) {
        var h = c.tagName;
        if ("SCRIPT" === h || "STYLE" === h) throw Error("");
      }
      c.innerHTML =
        d instanceof Bc && d.constructor === Bc ? d.m : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Yc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Zc = function (a) {
      var b;
      try {
        b = Gc.sendBeacon && Gc.sendBeacon(a);
      } catch (c) {
        ib("TAGGING", 15);
      }
      b || Rc(a);
    },
    $c = function (a, b) {
      try {
        if (Gc.sendBeacon) return Gc.sendBeacon(a, b);
      } catch (c) {
        ib("TAGGING", 15);
      }
      return !1;
    },
    ad = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    bd = function (a, b) {
      var c = { Ol: !0 };
      if ("fetch" in D) {
        var d = Object.assign({}, ad);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          return D.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.Ol) return !1;
      if (b) return $c(a, b);
      Zc(a);
      return !0;
    },
    cd = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    dd = function () {
      var a = D.performance;
      if (a && nb(a.now)) return a.now();
    },
    ed = function () {
      return D.performance || void 0;
    };
  var fd = function (a, b) {
      return J(this, a) && J(this, b);
    },
    gd = function (a, b) {
      return J(this, a) === J(this, b);
    },
    hd = function (a, b) {
      return J(this, a) || J(this, b);
    },
    id = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    jd = function (a, b) {
      a = String(J(this, a));
      b = String(J(this, b));
      return a.substring(0, b.length) === b;
    },
    kd = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      switch (a) {
        case "pageLocation":
          var c = D.location.href;
          b instanceof ab &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ld = function (a, b) {
    Qa.call(this);
    this.J = a;
    this.P = b;
  };
  xa(ld, Qa);
  aa = ld.prototype;
  aa.toString = function () {
    return this.J;
  };
  aa.getName = function () {
    return this.J;
  };
  aa.Xb = function () {
    return new Za(Ra(this, 1));
  };
  aa.invoke = function (a, b) {
    return this.P.apply(
      new md(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  aa.ab = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var md = function (a, b) {
      this.D = a;
      this.m = b;
    },
    J = function (a, b) {
      var c = a.m;
      return Array.isArray(b) ? Oa(c, b) : b;
    };
  md.prototype.getName = function () {
    return this.D.getName();
  };
  var nd = function () {
    this.map = new Map();
  };
  nd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  nd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var od = function () {
    this.keys = [];
    this.values = [];
  };
  od.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  od.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function pd() {
    try {
      return Map ? new nd() : new od();
    } catch (a) {
      return new od();
    }
  }
  var qd = function (a) {
    if (a instanceof qd) return a;
    if (Xa(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.m = a;
  };
  qd.prototype.getValue = function () {
    return this.m;
  };
  qd.prototype.toString = function () {
    return String(this.m);
  };
  var sd = function (a) {
    Qa.call(this);
    this.J = a;
    this.set("then", rd(this));
    this.set("catch", rd(this, !0));
    this.set("finally", rd(this, !1, !0));
  };
  xa(sd, ab);
  var rd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new ld("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof ld || (d = void 0);
      e instanceof ld || (e = void 0);
      var f = Ma(this.m),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.J) : m.invoke(f, n);
          };
        },
        h = a.J.then(d && g(d), e && g(e));
      return new sd(h);
    });
  };
  var ud = function (a, b, c) {
      var d = pd(),
        e = function (g, h) {
          for (var m = Ra(g, 1), n = 0; n < m.length; n++)
            h[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (g instanceof Za) {
            var m = [];
            d.set(g, m);
            for (var n = g.Xb(), p = 0; p < n.length(); p++)
              m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof sd) return g.J;
          if (g instanceof ab) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof ld) {
            var r = function () {
              for (
                var u = Array.prototype.slice.call(arguments, 0), v = 0;
                v < u.length;
                v++
              )
                u[v] = td(u[v], b, c);
              var w = new Ka(b ? b.Z : new Ja());
              b && (w.m = b.m);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof qd && t) return g.getValue();
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    td = function (a, b, c) {
      var d = pd(),
        e = function (g, h) {
          for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]));
        },
        f = function (g) {
          var h = d.get(g);
          if (h) return h;
          if (Array.isArray(g) || tb(g)) {
            var m = new Za([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (Va(g)) {
            var p = new ab();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new ld("", function (x) {
              for (
                var y = Array.prototype.slice.call(arguments, 0), B = 0;
                B < y.length;
                B++
              )
                y[B] = ud(J(this, y[B]), b, c);
              return f((0, this.m.P)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v)
            return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new qd(g);
        };
      return f(a);
    };
  var vd = function () {
    var a = !1;
    return a;
  };
  var wd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof Za)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new Za(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Za(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Za(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Wa(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : $a(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Za(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Wa(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : $a(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var xd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  xa(xd, Error);
  var yd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    zd = new Ha("break"),
    Ad = new Ha("continue"),
    Bd = function (a, b) {
      return J(this, a) + J(this, b);
    },
    Cd = function (a, b) {
      return J(this, a) && J(this, b);
    },
    Dd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      if (!(c instanceof Za))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = ud(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (vd()) throw new xd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (yd.hasOwnProperty(b)) {
          var h = 2;
          h = 1;
          var m = ud(c, void 0, h);
          return td(a[b].apply(a, m), this.m);
        }
        var n = "TypeError: " + b + " is not a function";
        if (vd()) throw new xd(n);
        throw Error(n);
      }
      if (a instanceof Za) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof ld) {
            var q = Wa(c);
            q.unshift(this.m);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (vd()) throw new xd(r);
          throw Error(r);
        }
        if (0 <= wd.supportedMethods.indexOf(b)) {
          var t = Wa(c);
          t.unshift(this.m);
          return wd[b].apply(a, t);
        }
      }
      if (a instanceof ld || a instanceof ab) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof ld) {
            var v = Wa(c);
            v.unshift(this.m);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (vd()) throw new xd(w);
          throw Error(w);
        }
        if ("toString" === b)
          return a instanceof ld ? a.getName() : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Wa(c));
      }
      if (a instanceof qd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (vd()) throw new xd(x);
      throw Error(x);
    },
    Ed = function (a, b) {
      a = J(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.m;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = J(this, b);
      c.set(a, d);
      return d;
    },
    Fd = function (a) {
      var b = Ma(this.m),
        c = Na(b, Array.prototype.slice.apply(arguments));
      if (c instanceof Ha) return c;
    },
    Gd = function () {
      return zd;
    },
    Hd = function (a) {
      for (var b = J(this, a), c = 0; c < b.length; c++) {
        var d = J(this, b[c]);
        if (d instanceof Ha) return d;
      }
    },
    Id = function (a) {
      for (var b = this.m, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = J(this, arguments[c + 1]);
          La(b, d, e, !0);
        }
      }
    },
    Jd = function () {
      return Ad;
    },
    Kd = function (a, b) {
      return new Ha(a, J(this, b));
    },
    Ld = function (a, b, c) {
      var d = new Za();
      b = J(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.m.add(a, J(this, f));
    },
    Md = function (a, b) {
      return J(this, a) / J(this, b);
    },
    Nd = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      var c = a instanceof qd,
        d = b instanceof qd;
      return c || d ? (c && d ? a.getValue() == b.getValue() : !1) : a == b;
    },
    Od = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = J(this, arguments[c]);
      return b;
    };
  function Pd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Na(f, d);
      if (g instanceof Ha) {
        if ("break" === g.m) break;
        if ("return" === g.m) return g;
      }
    }
  }
  function Qd(a, b, c) {
    if ("string" === typeof b)
      return Pd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof ab || b instanceof Za || b instanceof ld) {
      var d = b.Xb(),
        e = d.length();
      return Pd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Rd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Qd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Sd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Qd(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Td = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Qd(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Vd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Ud(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Wd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Ud(
        function (e) {
          var f = Ma(d);
          La(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Xd = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      var d = this.m;
      return Ud(
        function (e) {
          var f = Ma(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Ud(a, b, c) {
    if ("string" === typeof b)
      return Pd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Za)
      return Pd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (vd()) throw new xd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Yd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = J(this, a);
      if (!(f instanceof Za))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.m;
      d = J(this, d);
      var h = Ma(g);
      for (e(g, h); Oa(h, b); ) {
        var m = Na(h, d);
        if (m instanceof Ha) {
          if ("break" === m.m) break;
          if ("return" === m.m) return m;
        }
        var n = Ma(g);
        e(h, n);
        Oa(n, c);
        h = n;
      }
    },
    Zd = function (a, b, c) {
      var d = this.m,
        e = J(this, b);
      if (!(e instanceof Za))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new ld(
        a,
        (function () {
          return function (g) {
            var h = Ma(d);
            void 0 === h.m && (h.m = this.m.m);
            for (
              var m = Array.prototype.slice.call(arguments, 0), n = 0;
              n < m.length;
              n++
            )
              if (((m[n] = J(this, m[n])), m[n] instanceof Ha)) return m[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new Za(m));
            var r = Na(h, f);
            if (r instanceof Ha) return "return" === r.m ? r.D : r;
          };
        })()
      );
    },
    $d = function (a) {
      a = J(this, a);
      var b = this.m,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    ae = function (a, b) {
      var c;
      a = J(this, a);
      b = J(this, b);
      if (void 0 === a || null === a) {
        var d =
          "TypeError: Cannot read properties of " +
          a +
          " (reading '" +
          b +
          "')";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      if (a instanceof ab || a instanceof Za || a instanceof ld) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : Ya(b) && (c = a[b]);
      else if (a instanceof qd) return;
      return c;
    },
    be = function (a, b) {
      return J(this, a) > J(this, b);
    },
    ce = function (a, b) {
      return J(this, a) >= J(this, b);
    },
    de = function (a, b) {
      a = J(this, a);
      b = J(this, b);
      a instanceof qd && (a = a.getValue());
      b instanceof qd && (b = b.getValue());
      return a === b;
    },
    ee = function (a, b) {
      return !de.call(this, a, b);
    },
    fe = function (a, b, c) {
      var d = [];
      J(this, a) ? (d = J(this, b)) : c && (d = J(this, c));
      var e = Na(this.m, d);
      if (e instanceof Ha) return e;
    },
    ge = function (a, b) {
      return J(this, a) < J(this, b);
    },
    he = function (a, b) {
      return J(this, a) <= J(this, b);
    },
    ie = function (a) {
      for (var b = new Za(), c = 0; c < arguments.length; c++) {
        var d = J(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    je = function (a) {
      for (var b = new ab(), c = 0; c < arguments.length - 1; c += 2) {
        var d = J(this, arguments[c]) + "",
          e = J(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ke = function (a, b) {
      return J(this, a) % J(this, b);
    },
    le = function (a, b) {
      return J(this, a) * J(this, b);
    },
    me = function (a) {
      return -J(this, a);
    },
    ne = function (a) {
      return !J(this, a);
    },
    oe = function (a, b) {
      return !Nd.call(this, a, b);
    },
    pe = function () {
      return null;
    },
    qe = function (a, b) {
      return J(this, a) || J(this, b);
    },
    re = function (a, b) {
      var c = J(this, a);
      J(this, b);
      return c;
    },
    se = function (a) {
      return J(this, a);
    },
    te = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    ue = function (a) {
      return new Ha("return", J(this, a));
    },
    ve = function (a, b, c) {
      a = J(this, a);
      b = J(this, b);
      c = J(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (vd()) throw new xd(d);
        throw Error(d);
      }
      (a instanceof ld || a instanceof Za || a instanceof ab) && a.set(b, c);
      return c;
    },
    we = function (a, b) {
      return J(this, a) - J(this, b);
    },
    xe = function (a, b, c) {
      a = J(this, a);
      var d = J(this, b),
        e = J(this, c);
      if (!Array.isArray(d) || !Array.isArray(e))
        throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === J(this, d[h]))
          if (((f = J(this, e[h])), f instanceof Ha)) {
            var m = f.m;
            if ("break" === m) return;
            if ("return" === m || "continue" === m) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = J(this, e[e.length - 1])),
        f instanceof Ha && ("return" === f.m || "continue" === f.m))
      )
        return f;
    },
    ye = function (a, b, c) {
      return J(this, a) ? J(this, b) : J(this, c);
    },
    ze = function (a) {
      a = J(this, a);
      return a instanceof ld ? "function" : typeof a;
    },
    Ae = function (a) {
      for (var b = this.m, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    De = function (a, b, c, d) {
      var e = J(this, d);
      if (J(this, c)) {
        var f = Na(this.m, e);
        if (f instanceof Ha) {
          if ("break" === f.m) return;
          if ("return" === f.m) return f;
        }
      }
      for (; J(this, a); ) {
        var g = Na(this.m, e);
        if (g instanceof Ha) {
          if ("break" === g.m) break;
          if ("return" === g.m) return g;
        }
        J(this, b);
      }
    },
    Ee = function (a) {
      return ~Number(J(this, a));
    },
    Fe = function (a, b) {
      return Number(J(this, a)) << Number(J(this, b));
    },
    Ge = function (a, b) {
      return Number(J(this, a)) >> Number(J(this, b));
    },
    He = function (a, b) {
      return Number(J(this, a)) >>> Number(J(this, b));
    },
    Ie = function (a, b) {
      return Number(J(this, a)) & Number(J(this, b));
    },
    Je = function (a, b) {
      return Number(J(this, a)) ^ Number(J(this, b));
    },
    Ke = function (a, b) {
      return Number(J(this, a)) | Number(J(this, b));
    },
    Le = function () {},
    Me = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = J(this, c);
        if (g instanceof Ha) return g;
      } catch (r) {
        if (!(r instanceof xd && a)) throw ((f = r instanceof xd), r);
        var h = Ma(this.m),
          m = new qd(r);
        h.add(b, m);
        var n = J(this, d),
          p = Na(h, n);
        if (p instanceof Ha) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = J(this, e);
          if (q instanceof Ha) return q;
        }
      }
    };
  var Oe = function () {
    this.m = new Pa();
    Ne(this);
  };
  Oe.prototype.execute = function (a) {
    return this.m.D(a);
  };
  var Ne = function (a) {
    var b = function (c, d) {
      var e = new ld(String(c), d);
      e.Ib();
      a.m.m.set(String(c), e);
    };
    b("map", je);
    b("and", fd);
    b("contains", id);
    b("equals", gd);
    b("or", hd);
    b("startsWith", jd);
    b("variable", kd);
  };
  var Qe = function () {
    this.m = new Pa();
    Pe(this);
  };
  Qe.prototype.execute = function (a) {
    return Re(this.m.D(a));
  };
  var Se = function (a, b, c) {
      return Re(a.m.J(b, c));
    },
    Pe = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new ld(e, d);
        f.Ib();
        a.m.m.set(e, f);
      };
      b(0, Bd);
      b(1, Cd);
      b(2, Dd);
      b(3, Ed);
      b(56, Ie);
      b(57, Fe);
      b(58, Ee);
      b(59, Ke);
      b(60, Ge);
      b(61, He);
      b(62, Je);
      b(53, Fd);
      b(4, Gd);
      b(5, Hd);
      b(52, Id);
      b(6, Jd);
      b(49, Kd);
      b(7, ie);
      b(8, je);
      b(9, Hd);
      b(50, Ld);
      b(10, Md);
      b(12, Nd);
      b(13, Od);
      b(51, Zd);
      b(47, Rd);
      b(54, Sd);
      b(55, Td);
      b(63, Yd);
      b(64, Vd);
      b(65, Wd);
      b(66, Xd);
      b(15, $d);
      b(16, ae);
      b(17, ae);
      b(18, be);
      b(19, ce);
      b(20, de);
      b(21, ee);
      b(22, fe);
      b(23, ge);
      b(24, he);
      b(25, ke);
      b(26, le);
      b(27, me);
      b(28, ne);
      b(29, oe);
      b(45, pe);
      b(30, qe);
      b(32, re);
      b(33, re);
      b(34, se);
      b(35, se);
      b(46, te);
      b(36, ue);
      b(43, ve);
      b(37, we);
      b(38, xe);
      b(39, ye);
      b(67, Me);
      b(40, ze);
      b(44, Le);
      b(41, Ae);
      b(42, De);
    };
  function Re(a) {
    if (
      a instanceof Ha ||
      a instanceof ld ||
      a instanceof Za ||
      a instanceof ab ||
      a instanceof qd ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Te = function (a) {
    this.message = a;
  };
  function Ue(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new Te(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ve(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var We = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Rj: a("consent"),
      Sh: a("convert_case_to"),
      Th: a("convert_false_to"),
      Uh: a("convert_null_to"),
      Vh: a("convert_true_to"),
      Wh: a("convert_undefined_to"),
      Hm: a("debug_mode_metadata"),
      na: a("function"),
      Mg: a("instance_name"),
      vk: a("live_only"),
      wk: a("malware_disabled"),
      xk: a("metadata"),
      Ak: a("original_activity_id"),
      Vm: a("original_vendor_template_id"),
      Um: a("once_on_load"),
      zk: a("once_per_event"),
      Vi: a("once_per_load"),
      Zm: a("priority_override"),
      bn: a("respected_consent_types"),
      bj: a("setup_tags"),
      me: a("tag_id"),
      ij: a("teardown_tags"),
    };
  })();
  var sf;
  var tf = [],
    uf = [],
    vf = [],
    wf = [],
    xf = [],
    yf = {},
    zf,
    Af,
    Bf = function (a) {
      Af = Af || a;
    },
    Cf = function (a) {},
    Df,
    Ef = [],
    Ff = [],
    Gf = function (a, b) {
      var c = {};
      c[We.na] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Hf = function (a, b) {
      var c = a[We.na],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = yf[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Ef.indexOf(c),
        g = {},
        h = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (h[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = tf[q];
                  break;
                case 1:
                  r = wf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[We.Mg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === Ff.indexOf(c)) {
        Ff.push(c);
        var x = zb();
        u = e(g);
        var y = zb() - x,
          B = zb();
        v = sf(c, h, b);
        w = y - (zb() - B);
      } else if ((e && (u = e(g)), !e || f)) v = sf(c, h, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Xa(u)
          ? (Array.isArray(u) ? Array.isArray(v) : Va(u) ? Va(v) : u === v) ||
            d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    },
    Jf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = If(a[e], b, c));
      return d;
    },
    If = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(If(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = tf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[We.Mg]);
            try {
              var m = Jf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Hf(m, { event: b, index: f, type: 2, name: h });
              Df && (d = Df.Qk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[If(a[n], b, c)] = If(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = If(a[q], b, c);
              Af && (p = p || Af.Fl(r));
              d.push(r);
            }
            return Af && p ? Af.Sk(d) : d.join("");
          case "escape":
            d = If(a[1], b, c);
            if (Af && Array.isArray(a[1]) && "macro" === a[1][0] && Af.Gl(a))
              return Af.Zl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Xe[a[t]] && (d = Xe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!wf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { sj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[We.na] = a[1];
            var w = Kf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Kf = function (a, b, c) {
      try {
        return zf(Jf(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Lf = function (a) {
      var b = a[We.na];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!yf[b];
    };
  var Mf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.m = a;
    this.name = "PermissionError";
  };
  xa(Mf, Error);
  function Nf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Nf(a[c], b[c]);
    }
  }
  var Of = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Ul = a;
    this.D = b;
    this.m = [];
  };
  xa(Of, Error);
  var Qf = function () {
    return function (a, b) {
      a instanceof Of || (a = new Of(a, Pf));
      b && a.m.push(b);
      throw a;
    };
  };
  function Pf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) ob(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Tf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Rf(a), f = 0; f < uf.length; f++) {
        var g = uf[f],
          h = Sf(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < wf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Sf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Rf = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Kf(vf[c], a));
        return b[c];
      };
    };
  var Uf = {
    Qk: function (a, b) {
      b[We.Sh] &&
        "string" === typeof a &&
        (a = 1 == b[We.Sh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(We.Uh) && null === a && (a = b[We.Uh]);
      b.hasOwnProperty(We.Wh) && void 0 === a && (a = b[We.Wh]);
      b.hasOwnProperty(We.Vh) && !0 === a && (a = b[We.Vh]);
      b.hasOwnProperty(We.Th) && !1 === a && (a = b[We.Th]);
      return a;
    },
  };
  var Vf = function () {
      this.m = {};
    },
    Xf = function (a, b) {
      var c = Wf.D,
        d;
      null != (d = c.m)[a] || (d[a] = []);
      c.m[a].push(function () {
        return b.apply(null, oa(za.apply(0, arguments)));
      });
    };
  function Yf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Mf(c, d, g);
      }
  }
  function Zf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.m[d],
          f = a.m.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Yf(e, b, d, g);
          Yf(f, b, d, g);
        }
      }
    };
  }
  var cg = function () {
      var a = data.permissions || {},
        b = $f.ctid,
        c = this;
      this.D = new Vf();
      this.m = {};
      var d = {},
        e = {},
        f = Zf(this.D, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, h) {
        var m = {};
        z(h, function (p, q) {
          var r = ag(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.mj && !e[p] && (e[p] = r.mj);
        });
        var n = function (p) {
          var q = za.apply(1, arguments);
          if (!m[p])
            throw bg(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(oa(q)));
        };
        c.m[g] = function (p, q) {
          var r = m[p];
          if (!r)
            throw bg(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(oa(t.slice(1))));
        };
      });
    },
    dg = function (a) {
      return Wf.m[a] || function () {};
    };
  function ag(a, b) {
    var c = Gf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = bg;
    try {
      return Hf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Mf(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new Mf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function bg(a, b, c) {
    return new Mf(a, b, c);
  }
  var eg = !1;
  var fg = {};
  fg.Bm = vb("");
  fg.Vk = vb("");
  var gg = eg,
    hg = fg.Vk,
    ig = fg.Bm;
  var mg = function (a) {
      var b = {},
        c = 0;
      z(a, function (e, f) {
        if (null != f)
          if (((f = ("" + f).replace(/~/g, "~~")), jg.hasOwnProperty(e)))
            b[jg[e]] = f;
          else if (kg.hasOwnProperty(e)) {
            var g = kg[e],
              h = f;
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var m = f.split("/", 5), n = 0; n < m.length; n++) {
              var p = b,
                q = lg[n],
                r = m[n];
              p.hasOwnProperty(q) || (p[q] = r);
            }
          else if (27 > c) {
            var t = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
            b["k" + t] = ("" + String(e)).replace(/~/g, "~~");
            b["v" + t] = f;
            c++;
          }
      });
      var d = [];
      z(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    jg = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    kg = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    lg = ["ca", "c2", "c3", "c4", "c5"];
  var ng = function (a) {
      var b = [];
      z(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    og = function (a, b, c, d) {
      this.oa = a.oa;
      this.Jc = a.Jc;
      this.ah = a.ah;
      this.baseUrl = b;
      this.F = c;
      this.D = ng(a.oa);
      this.m = ng(a.ah);
      this.J = this.m.length;
      if (d && 16384 < this.J) throw Error("EVENT_TOO_LARGE");
    };
  var pg = function () {
    this.events = [];
    this.m = "";
    this.oa = {};
    this.baseUrl = "";
    this.F = 0;
    this.J = this.D = !1;
  };
  pg.prototype.add = function (a) {
    return this.P(a)
      ? (this.events.push(a),
        (this.m = a.D),
        (this.oa = a.oa),
        (this.baseUrl = a.baseUrl),
        (this.F += a.J),
        (this.D = a.F),
        !0)
      : !1;
  };
  pg.prototype.P = function (a) {
    return this.events.length
      ? 20 <= this.events.length || 16384 <= a.J + this.F
        ? !1
        : this.baseUrl === a.baseUrl && this.D === a.F && this.Z(a)
      : !0;
  };
  pg.prototype.Z = function (a) {
    var b = this;
    if (this.J) {
      var c = Object.keys(this.oa);
      return (
        c.length === Object.keys(a.oa).length &&
        c.every(function (d) {
          return a.oa.hasOwnProperty(d) && String(b.oa[d]) === String(a.oa[d]);
        })
      );
    }
    return this.m === a.D;
  };
  var qg = {},
    rg =
      ((qg.uaa = !0),
      (qg.uab = !0),
      (qg.uafvl = !0),
      (qg.uamb = !0),
      (qg.uam = !0),
      (qg.uap = !0),
      (qg.uapv = !0),
      (qg.uaw = !0),
      qg);
  var sg = function (a, b) {
      z(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    tg = function (a, b) {
      var c = [];
      a.D && c.push(a.D);
      b && c.push("_s=" + b);
      sg(a.Jc, c);
      var d = !1;
      a.m && (c.push(a.m), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.baseUrl.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { params: e, body: f };
    },
    ug = function (a, b) {
      var c = a.events;
      if (1 == c.length) return tg(c[0], b);
      var d = [];
      a.m && d.push(a.m);
      for (var e = {}, f = 0; f < c.length; f++)
        z(c[f].Jc, function (t, u) {
          null != u &&
            ((e[t] = e[t] || {}), (e[t][String(u)] = e[t][String(u)] + 1 || 1));
        });
      var g = {};
      z(e, function (t, u) {
        var v,
          w = -1,
          x = 0;
        z(u, function (y, B) {
          x += B;
          var A = (y.length + t.length + 2) * (B - 1);
          A > w && ((v = y), (w = A));
        });
        x == c.length && (g[t] = v);
      });
      sg(g, d);
      b && d.push("_s=" + b);
      for (
        var h = d.join("&"), m = [], n = {}, p = 0;
        p < c.length;
        n = { uh: void 0 }, p++
      ) {
        var q = [];
        n.uh = {};
        z(
          c[p].Jc,
          (function (t) {
            return function (u, v) {
              g[u] != "" + v && (t.uh[u] = v);
            };
          })(n)
        );
        c[p].m && q.push(c[p].m);
        sg(n.uh, q);
        m.push(q.join("&"));
      }
      var r = m.join("\r\n");
      return { params: h, body: r };
    };
  var vg = /^[a-z$_][\w$]*$/i,
    wg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    xg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!wg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = -1 !== f && f === e.length - 2,
          h = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (0 === d.length) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!vg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || h.length > d.length || (!g && d.length != e.length)
            ? 0
            : g
            ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length))
            : d === h
        )
          return !0;
      }
      return !1;
    };
  var yg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function zg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Ag = new rb();
  function Bg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Ag.get(e);
      f || ((f = new RegExp(b, d)), Ag.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Cg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Dg(a, b) {
    return String(a) === String(b);
  }
  function Eg(a, b) {
    return Number(a) >= Number(b);
  }
  function Fg(a, b) {
    return Number(a) <= Number(b);
  }
  function Gg(a, b) {
    return Number(a) > Number(b);
  }
  function Hg(a, b) {
    return Number(a) < Number(b);
  }
  function Ig(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  var Pg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Qg(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = Ue(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = Ue(a | b) + c);
  }
  var Rg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Vg = { Fn: "function", PixieMap: "Object", List: "Array" },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Rg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          m = c[d];
        if (null == m) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof m;
          m instanceof ld
            ? (n = "Fn")
            : m instanceof Za
            ? (n = "List")
            : m instanceof ab
            ? (n = "PixieMap")
            : m instanceof qd && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (Vg[n] || n) +
                ", which does not match required type " +
                (Vg[h] || h) +
                "."
            );
        }
      }
    };
  function Wg(a) {
    return "" + a;
  }
  function Xg(a, b) {
    var c = [];
    return c;
  }
  var Yg = function (a, b) {
      var c = new ld(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = J(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (vd()) throw new xd(g.message);
          throw g;
        }
      });
      c.Ib();
      return c;
    },
    Zg = function (a, b) {
      var c = new ab(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          nb(e)
            ? c.set(d, Yg(a + "_" + d, e))
            : Va(e)
            ? c.set(d, Zg(a + "_" + d, e))
            : (ob(e) || l(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Ib();
      return c;
    };
  var $g = function (a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new ab();
    return (d = Zg("AssertApiSubject", c));
  };
  var ah = function (a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof sd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new ab();
    return (d = Zg("AssertThatSubject", c));
  };
  function bh(a) {
    return function () {
      for (var b = [], c = this.m, d = 0; d < arguments.length; ++d)
        b.push(ud(arguments[d], c));
      return td(a.apply(null, b));
    };
  }
  var dh = function () {
    for (var a = Math, b = ch, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = bh(a[e].bind(a)));
    }
    return c;
  };
  var eh = function (a) {
    var b;
    return b;
  };
  var fh = function (a) {
    var b;
    return b;
  };
  var gh = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var hh = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ih(a, b) {
    var c = !1;
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var d = JSON.parse(a);
    if (!d) throw Error("Invalid boolean expression string was given.");
    var e = b ? ud(b) : {};
    c = jh(d, e);
    return c;
  }
  var kh = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        if (void 0 === a) return;
        a = a[b[c]];
      }
      return a;
    },
    lh = function (a, b) {
      var c = b.preHit;
      if (c) {
        var d = a[0];
        switch (d) {
          case "hitData":
            return 2 > a.length ? void 0 : kh(c.getHitData(a[1]), a.slice(2));
          case "metadata":
            return 2 > a.length ? void 0 : kh(c.getMetadata(a[1]), a.slice(2));
          case "eventName":
            return c.getEventName();
          case "destinationId":
            return c.getDestinationId();
          default:
            throw Error(
              d +
                " is not a valid field that can be accessed\n                      from PreHit data."
            );
        }
      }
    },
    mh = function (a, b) {
      if (a) {
        if (void 0 !== a.contextValue) {
          var c;
          a: {
            var d = a.contextValue,
              e = d.keyParts;
            if (e && 0 !== e.length) {
              var f = d.namespaceType;
              switch (f) {
                case 1:
                  c = lh(e, b);
                  break a;
                case 2:
                  var g = b.macro;
                  c = g ? g[e[0]] : void 0;
                  break a;
                default:
                  throw Error("Unknown Namespace Type used: " + f);
              }
            }
            c = void 0;
          }
          return c;
        }
        if (void 0 !== a.booleanExpressionValue)
          return jh(a.booleanExpressionValue, b);
        if (void 0 !== a.booleanValue) return !!a.booleanValue;
        if (void 0 !== a.stringValue) return String(a.stringValue);
        if (void 0 !== a.integerValue) return Number(a.integerValue);
        if (void 0 !== a.doubleValue) return Number(a.doubleValue);
        throw Error(
          "Unknown field used for variable of type ExpressionValue:" + a
        );
      }
    },
    jh = function (a, b) {
      var c = a.args;
      if (!Array.isArray(c) || 0 === c.length)
        throw Error(
          'Invalid boolean expression format. Expected "args":' +
            c +
            " property to\n         be non-empty array."
        );
      var d = function (g) {
        return mh(g, b);
      };
      switch (a.type) {
        case 1:
          for (var e = 0; e < c.length; e++) if (d(c[e])) return !0;
          return !1;
        case 2:
          for (var f = 0; f < c.length; f++) if (!d(c[f])) return !1;
          return 0 < c.length;
        case 3:
          return !d(c[0]);
        case 4:
          return Bg(d(c[0]), d(c[1]), !1);
        case 5:
          return Dg(d(c[0]), d(c[1]));
        case 6:
          return Ig(d(c[0]), d(c[1]));
        case 7:
          return zg(d(c[0]), d(c[1]));
        case 8:
          return Cg(d(c[0]), d(c[1]));
        case 9:
          return Hg(d(c[0]), d(c[1]));
        case 10:
          return Fg(d(c[0]), d(c[1]));
        case 11:
          return Gg(d(c[0]), d(c[1]));
        case 12:
          return Eg(d(c[0]), d(c[1]));
        default:
          throw Error(
            'Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.'
          );
      }
    };
  ih.H = "internal.evaluateBooleanExpression";
  var nh = function (a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var oh = function (a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return qb(a, b);
  };
  var ph = function () {
    return new Date().getTime();
  };
  var qh = function (a) {
    if (null === a) return "null";
    if (a instanceof Za) return "array";
    if (a instanceof ld) return "function";
    if (a instanceof qd) {
      a = a.getValue();
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var rh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (gg || ig) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return td(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(ud(c));
      }),
    };
  };
  var sh = function (a) {
    return ub(ud(a, this.m));
  };
  var th = function (a) {
    return Number(ud(a, this.m));
  };
  var uh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var vh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var ch = "floor ceil round max min abs pow sqrt".split(" ");
  var wh = function () {
      var a = {};
      return {
        kl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        sm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    xh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return ld.prototype.invoke.apply(a, c);
      };
    },
    yh = function (a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    };
  var zh = {};
  zh.keys = function (a) {
    return new Za();
  };
  zh.values = function (a) {
    return new Za();
  };
  zh.entries = function (a) {
    return new Za();
  };
  zh.freeze = function (a) {
    return a;
  };
  zh.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.m.m;
    if (!d) throw Error("Missing program state.");
    if (d.hm) {
      try {
        d.nj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw (ib("TAGGING", 21), e);
      }
      return;
    }
    d.nj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Bh = function () {
    this.m = {};
    this.D = {};
  };
  Bh.prototype.get = function (a, b) {
    var c = this.m.hasOwnProperty(a) ? this.m[a] : void 0;
    return c;
  };
  Bh.prototype.add = function (a, b, c) {
    if (this.m.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.D.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.m[a] = c ? void 0 : nb(b) ? Yg(a, b) : Zg(a, b);
  };
  function Ch(a, b) {
    var c = void 0;
    return c;
  }
  function Dh() {
    var a = {};
    return a;
  }
  var Fh = function (a) {
      return Eh ? G.querySelectorAll(a) : null;
    },
    Gh = function (a, b) {
      if (!Eh) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Hh = !1;
  if (G.querySelectorAll)
    try {
      var Ih = G.querySelectorAll(":root");
      Ih && 1 == Ih.length && Ih[0] == G.documentElement && (Hh = !0);
    } catch (a) {}
  var Eh = Hh;
  var M = function (a) {
    ib("GTM", a);
  };
  var Jh = function (a) {
      return null == a ? "" : l(a) ? xb(String(a)) : "e0";
    },
    Lh = function (a) {
      return a.replace(Kh, "");
    },
    Nh = function (a) {
      return Mh(a.replace(/\s/g, ""));
    },
    Mh = function (a) {
      return xb(a.replace(Oh, "").toLowerCase());
    },
    Qh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Ph.test(a) ? a : "e0";
    },
    Sh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Rh.test(c)) return c;
      }
      return "e0";
    },
    Vh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (D.crypto && D.crypto.subtle) {
        if (Th.test(a)) return Promise.resolve(a);
        try {
          var b = Uh(a);
          return D.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return D.btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Uh = function (a) {
      var b;
      if (D.TextEncoder) b = new TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Oh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Rh = /^\S+@\S+\.\S+$/,
    Ph = /^\+\d{10,15}$/,
    Kh = /[.~]/g,
    Wh = /^[0-9A-Za-z_-]{43}$/,
    Th = /^[0-9A-Fa-f]{64}$/,
    Xh = {},
    Yh =
      ((Xh.email = "em"),
      (Xh.phone_number = "pn"),
      (Xh.first_name = "fn"),
      (Xh.last_name = "ln"),
      (Xh.street = "sa"),
      (Xh.city = "ct"),
      (Xh.region = "rg"),
      (Xh.country = "co"),
      (Xh.postal_code = "pc"),
      (Xh.error_code = "ec"),
      Xh),
    Zh = {},
    $h =
      ((Zh.email = "sha256_email_address"),
      (Zh.phone_number = "sha256_phone_number"),
      (Zh.first_name = "sha256_first_name"),
      (Zh.last_name = "sha256_last_name"),
      (Zh.street = "sha256_street"),
      Zh),
    bi = function (a, b) {
      a.some(function (c) {
        c.value && ai.indexOf(c.name);
      })
        ? b(a)
        : D.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && -1 !== ai.indexOf(c.name)
                ? Vh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    di = function (a, b) {
      var c = ci(a);
      bi(c, b);
    },
    ci = function (a) {
      function b(r, t, u, v) {
        var w = Jh(r);
        "" !== w &&
          (Th.test(w)
            ? h.push({ name: t, value: w, index: v })
            : h.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = Array.isArray(r) ? r : [r];
          for (var v = 0; v < u.length; ++v) {
            var w = Jh(u[v]),
              x = Th.test(w);
            t && !x && M(89);
            !t && x && M(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = $h[t];
        r[v] && (r[t] && M(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        var v = d(r, t);
        v = Array.isArray(v) ? v : [v];
        for (var w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          M(64);
          return r(t);
        };
      }
      var h = [];
      if ("https:" !== D.location.protocol)
        return h.push({ name: "error_code", value: "e3", index: void 0 }), h;
      e(a, "email", Sh);
      e(a, "phone_number", Qh);
      e(a, "first_name", g(Nh));
      e(a, "last_name", g(Nh));
      var m = a.home_address || {};
      e(m, "street", g(Mh));
      e(m, "city", g(Mh));
      e(m, "postal_code", g(Lh));
      e(m, "region", g(Mh));
      e(m, "country", g(Lh));
      var n = a.address || {};
      n = Array.isArray(n) ? n : [n];
      for (var p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Nh, p);
        f(q, "last_name", Nh, p);
        f(q, "street", Mh, p);
        f(q, "city", Mh, p);
        f(q, "postal_code", Lh, p);
        f(q, "region", Mh, p);
        f(q, "country", Lh, p);
      }
      return h;
    },
    fi = function (a, b) {
      di(a, function (c) {
        var d = ei(c);
        b(d.Lf, d.Ah);
      });
    },
    ei = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          h = Yh[e];
        h &&
          f &&
          (-1 === ai.indexOf(e) ||
            /^e\d+$/.test(f) ||
            Wh.test(f) ||
            Th.test(f)) &&
          (void 0 !== g && (h += g), b.push(h + "." + f), c++);
      }
      1 === a.length && "error_code" === a[0].name && (c = 0);
      return { Lf: encodeURIComponent(b.join("~")), Ah: c };
    },
    gi = function (a) {
      if (D.Promise)
        try {
          return new Promise(function (b) {
            fi(a, function (c, d) {
              b({ yj: c, Ah: d });
            });
          });
        } catch (b) {}
    },
    ai = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var Q = {
      g: {
        xa: "ad_personalization",
        M: "ad_storage",
        O: "ad_user_data",
        T: "analytics_storage",
        hc: "region",
        ic: "consent_updated",
        Qe: "wait_for_update",
        Xh: "app_remove",
        Yh: "app_store_refund",
        Zh: "app_store_subscription_cancel",
        ai: "app_store_subscription_convert",
        bi: "app_store_subscription_renew",
        Vj: "consent_update",
        Wf: "add_payment_info",
        Xf: "add_shipping_info",
        jc: "add_to_cart",
        kc: "remove_from_cart",
        Yf: "view_cart",
        Mb: "begin_checkout",
        mc: "select_item",
        eb: "view_item_list",
        Bb: "select_promotion",
        fb: "view_promotion",
        Ha: "purchase",
        nc: "refund",
        Ka: "view_item",
        Zf: "add_to_wishlist",
        Wj: "exception",
        di: "first_open",
        ei: "first_visit",
        ba: "gtag.config",
        Oa: "gtag.get",
        fi: "in_app_purchase",
        Nb: "page_view",
        Xj: "screen_view",
        gi: "session_start",
        Yj: "timing_complete",
        Zj: "track_social",
        Kc: "user_engagement",
        hb: "gclgb",
        Pa: "gclid",
        fa: "ads_data_redaction",
        hi: "gad_source",
        Ed: "gclid_url",
        ii: "gclsrc",
        cg: "gbraid",
        Re: "wbraid",
        la: "allow_ad_personalization_signals",
        Se: "allow_custom_scripts",
        Te: "allow_display_features",
        Fd: "allow_enhanced_conversions",
        ib: "allow_google_signals",
        Aa: "allow_interest_groups",
        bk: "app_id",
        dk: "app_installer_id",
        ek: "app_name",
        fk: "app_version",
        Cb: "auid",
        ji: "auto_detection_enabled",
        Ob: "aw_remarketing",
        Ue: "aw_remarketing_only",
        Gd: "discount",
        Hd: "aw_feed_country",
        Id: "aw_feed_language",
        da: "items",
        Jd: "aw_merchant_id",
        dg: "aw_basket_type",
        Lc: "campaign_content",
        Mc: "campaign_id",
        Nc: "campaign_medium",
        Oc: "campaign_name",
        Pc: "campaign",
        Qc: "campaign_source",
        Rc: "campaign_term",
        jb: "client_id",
        ki: "rnd",
        li: "consent_update_type",
        mi: "content_group",
        ni: "content_type",
        Ua: "conversion_cookie_prefix",
        Sc: "conversion_id",
        ra: "conversion_linker",
        oi: "conversion_linker_disabled",
        Pb: "conversion_api",
        Ve: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        Va: "cookie_flags",
        oc: "cookie_name",
        Qb: "cookie_path",
        La: "cookie_prefix",
        qc: "cookie_update",
        sc: "country",
        ya: "currency",
        Kd: "customer_lifetime_value",
        Tc: "custom_map",
        eg: "gcldc",
        Ld: "dclid",
        ri: "debug_mode",
        ja: "developer_id",
        si: "disable_merchant_reported_purchases",
        Uc: "dc_custom_params",
        ui: "dc_natural_search",
        fg: "dynamic_event_settings",
        gg: "affiliation",
        Md: "checkout_option",
        We: "checkout_step",
        hg: "coupon",
        Vc: "item_list_name",
        Xe: "list_name",
        vi: "promotions",
        Wc: "shipping",
        Ye: "tax",
        Nd: "engagement_time_msec",
        Od: "enhanced_client_id",
        Pd: "enhanced_conversions",
        ig: "enhanced_conversions_automatic_settings",
        Qd: "estimated_delivery_date",
        Ze: "euid_logged_in_state",
        Xc: "event_callback",
        gk: "event_category",
        lb: "event_developer_id_string",
        hk: "event_label",
        Yc: "event",
        Rd: "event_settings",
        Sd: "event_timeout",
        ik: "description",
        jk: "fatal",
        wi: "experiments",
        af: "firebase_id",
        uc: "first_party_collection",
        Td: "_x_20",
        nb: "_x_19",
        xi: "fledge_drop_reason",
        jg: "fledge",
        kg: "flight_error_code",
        lg: "flight_error_message",
        yi: "fl_activity_category",
        zi: "fl_activity_group",
        mg: "fl_advertiser_id",
        Ai: "fl_ar_dedupe",
        ng: "match_id",
        Bi: "fl_random_number",
        Ci: "tran",
        Di: "u",
        Ud: "gac_gclid",
        vc: "gac_wbraid",
        og: "gac_wbraid_multiple_conversions",
        pg: "ga_restrict_domain",
        bf: "ga_temp_client_id",
        wc: "gdpr_applies",
        qg: "geo_granularity",
        Db: "value_callback",
        ob: "value_key",
        kk: "google_ng",
        lk: "google_ono",
        Rb: "google_signals",
        rg: "google_tld",
        Vd: "groups",
        sg: "gsa_experiment_id",
        Wd: "iframe_state",
        Zc: "ignore_referrer",
        cf: "internal_traffic_results",
        Sb: "is_legacy_converted",
        Eb: "is_legacy_loaded",
        Xd: "is_passthrough",
        bd: "_lps",
        Ma: "language",
        Yd: "legacy_developer_id_string",
        sa: "linker",
        Tb: "accept_incoming",
        Wa: "decorate_forms",
        W: "domains",
        qb: "url_position",
        ug: "method",
        mk: "name",
        dd: "new_customer",
        vg: "non_interaction",
        Ei: "optimize_id",
        Fi: "page_hostname",
        ed: "page_path",
        Ba: "page_referrer",
        Fb: "page_title",
        wg: "passengers",
        xg: "phone_conversion_callback",
        Gi: "phone_conversion_country_code",
        yg: "phone_conversion_css_class",
        Hi: "phone_conversion_ids",
        zg: "phone_conversion_number",
        Ag: "phone_conversion_options",
        Bg: "_protected_audience_enabled",
        fd: "quantity",
        Zd: "redact_device_info",
        df: "referral_exclusion_definition",
        Ub: "restricted_data_processing",
        Ii: "retoken",
        nk: "sample_rate",
        ef: "screen_name",
        Gb: "screen_resolution",
        Ji: "search_term",
        Ia: "send_page_view",
        Vb: "send_to",
        gd: "server_container_url",
        hd: "session_duration",
        ae: "session_engaged",
        ff: "session_engaged_time",
        rb: "session_id",
        be: "session_number",
        jd: "delivery_postal_code",
        pk: "temporary_client_id",
        hf: "topmost_url",
        Ki: "tracking_id",
        jf: "traffic_type",
        za: "transaction_id",
        Hb: "transport_url",
        Cg: "trip_type",
        Wb: "update",
        Sa: "url_passthrough",
        kf: "_user_agent_architecture",
        lf: "_user_agent_bitness",
        nf: "_user_agent_full_version_list",
        pf: "_user_agent_mobile",
        qf: "_user_agent_model",
        rf: "_user_agent_platform",
        tf: "_user_agent_platform_version",
        uf: "_user_agent_wow64",
        Ca: "user_data",
        Dg: "user_data_auto_latency",
        Eg: "user_data_auto_meta",
        Fg: "user_data_auto_multi",
        Gg: "user_data_auto_selectors",
        Hg: "user_data_auto_status",
        kd: "user_data_mode",
        ce: "user_data_settings",
        Na: "user_id",
        Xa: "user_properties",
        Li: "_user_region",
        de: "us_privacy_string",
        ma: "value",
        Ig: "wbraid_multiple_conversions",
        Ri: "_host_name",
        Si: "_in_page_command",
        Ti: "_is_passthrough_cid",
        Jb: "non_personalized_ads",
        ke: "_sst_parameters",
        kb: "conversion_label",
        wa: "page_location",
        pb: "global_developer_id_string",
        xc: "tc_privacy_string",
      },
    },
    hi = {},
    ii = Object.freeze(
      ((hi[Q.g.la] = 1),
      (hi[Q.g.Te] = 1),
      (hi[Q.g.Fd] = 1),
      (hi[Q.g.ib] = 1),
      (hi[Q.g.da] = 1),
      (hi[Q.g.Qa] = 1),
      (hi[Q.g.Ra] = 1),
      (hi[Q.g.Va] = 1),
      (hi[Q.g.oc] = 1),
      (hi[Q.g.Qb] = 1),
      (hi[Q.g.La] = 1),
      (hi[Q.g.qc] = 1),
      (hi[Q.g.Tc] = 1),
      (hi[Q.g.ja] = 1),
      (hi[Q.g.fg] = 1),
      (hi[Q.g.Xc] = 1),
      (hi[Q.g.Rd] = 1),
      (hi[Q.g.Sd] = 1),
      (hi[Q.g.uc] = 1),
      (hi[Q.g.pg] = 1),
      (hi[Q.g.Rb] = 1),
      (hi[Q.g.rg] = 1),
      (hi[Q.g.Vd] = 1),
      (hi[Q.g.cf] = 1),
      (hi[Q.g.Sb] = 1),
      (hi[Q.g.Eb] = 1),
      (hi[Q.g.sa] = 1),
      (hi[Q.g.df] = 1),
      (hi[Q.g.Ub] = 1),
      (hi[Q.g.Ia] = 1),
      (hi[Q.g.Vb] = 1),
      (hi[Q.g.gd] = 1),
      (hi[Q.g.hd] = 1),
      (hi[Q.g.ff] = 1),
      (hi[Q.g.jd] = 1),
      (hi[Q.g.Hb] = 1),
      (hi[Q.g.Wb] = 1),
      (hi[Q.g.ce] = 1),
      (hi[Q.g.Xa] = 1),
      (hi[Q.g.ke] = 1),
      hi)
    );
  Object.freeze([
    Q.g.wa,
    Q.g.Ba,
    Q.g.Fb,
    Q.g.Ma,
    Q.g.ef,
    Q.g.Na,
    Q.g.af,
    Q.g.mi,
  ]);
  var ji = {},
    ki = Object.freeze(
      ((ji[Q.g.Xh] = 1),
      (ji[Q.g.Yh] = 1),
      (ji[Q.g.Zh] = 1),
      (ji[Q.g.ai] = 1),
      (ji[Q.g.bi] = 1),
      (ji[Q.g.di] = 1),
      (ji[Q.g.ei] = 1),
      (ji[Q.g.fi] = 1),
      (ji[Q.g.gi] = 1),
      (ji[Q.g.Kc] = 1),
      ji)
    ),
    li = {},
    mi = Object.freeze(
      ((li[Q.g.Wf] = 1),
      (li[Q.g.Xf] = 1),
      (li[Q.g.jc] = 1),
      (li[Q.g.kc] = 1),
      (li[Q.g.Yf] = 1),
      (li[Q.g.Mb] = 1),
      (li[Q.g.mc] = 1),
      (li[Q.g.eb] = 1),
      (li[Q.g.Bb] = 1),
      (li[Q.g.fb] = 1),
      (li[Q.g.Ha] = 1),
      (li[Q.g.nc] = 1),
      (li[Q.g.Ka] = 1),
      (li[Q.g.Zf] = 1),
      li)
    ),
    ni = Object.freeze([
      Q.g.la,
      Q.g.ib,
      Q.g.qc,
      Q.g.uc,
      Q.g.Zc,
      Q.g.Ia,
      Q.g.Wb,
    ]),
    oi = Object.freeze([].concat(ni)),
    pi = Object.freeze([Q.g.Ra, Q.g.Sd, Q.g.hd, Q.g.ff, Q.g.Nd]),
    qi = Object.freeze([].concat(pi)),
    ri = {},
    si =
      ((ri[Q.g.M] = "1"),
      (ri[Q.g.T] = "2"),
      (ri[Q.g.O] = "3"),
      (ri[Q.g.xa] = "4"),
      ri),
    ti = {},
    ui = Object.freeze(
      ((ti[Q.g.la] = 1),
      (ti[Q.g.Fd] = 1),
      (ti[Q.g.Aa] = 1),
      (ti[Q.g.Ob] = 1),
      (ti[Q.g.Ue] = 1),
      (ti[Q.g.Gd] = 1),
      (ti[Q.g.Hd] = 1),
      (ti[Q.g.Id] = 1),
      (ti[Q.g.da] = 1),
      (ti[Q.g.Jd] = 1),
      (ti[Q.g.Ua] = 1),
      (ti[Q.g.ra] = 1),
      (ti[Q.g.Qa] = 1),
      (ti[Q.g.Ra] = 1),
      (ti[Q.g.Va] = 1),
      (ti[Q.g.La] = 1),
      (ti[Q.g.ya] = 1),
      (ti[Q.g.Kd] = 1),
      (ti[Q.g.ja] = 1),
      (ti[Q.g.si] = 1),
      (ti[Q.g.Pd] = 1),
      (ti[Q.g.Qd] = 1),
      (ti[Q.g.af] = 1),
      (ti[Q.g.uc] = 1),
      (ti[Q.g.Sb] = 1),
      (ti[Q.g.Eb] = 1),
      (ti[Q.g.Ma] = 1),
      (ti[Q.g.dd] = 1),
      (ti[Q.g.wa] = 1),
      (ti[Q.g.Ba] = 1),
      (ti[Q.g.xg] = 1),
      (ti[Q.g.yg] = 1),
      (ti[Q.g.zg] = 1),
      (ti[Q.g.Ag] = 1),
      (ti[Q.g.Ub] = 1),
      (ti[Q.g.Ia] = 1),
      (ti[Q.g.Vb] = 1),
      (ti[Q.g.gd] = 1),
      (ti[Q.g.jd] = 1),
      (ti[Q.g.za] = 1),
      (ti[Q.g.Hb] = 1),
      (ti[Q.g.Wb] = 1),
      (ti[Q.g.Sa] = 1),
      (ti[Q.g.Ca] = 1),
      (ti[Q.g.Na] = 1),
      (ti[Q.g.ma] = 1),
      ti)
    ),
    vi = {},
    wi = Object.freeze(
      ((vi.search = "s"),
      (vi.youtube = "y"),
      (vi.playstore = "p"),
      (vi.shopping = "h"),
      (vi.ads = "a"),
      (vi.maps = "m"),
      vi)
    );
  Object.freeze(Q.g);
  var xi = {},
    yi = (D.google_tag_manager = D.google_tag_manager || {});
  xi.Ng = "44a0";
  xi.je = Number("0") || 0;
  xi.Ta = "dataLayer";
  xi.Fm =
    "ChAI8P3tsAYQjN2A+N+mz+4LEiUAjlm/9ptHrbu9bEX9IcIN/CC/5jC+4sCJk9QBiWYI5c6tSomGGgIiew\x3d\x3d";
  var zi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ai = { __paused: 1, __tg: 1 },
    Bi;
  for (Bi in zi) zi.hasOwnProperty(Bi) && (Ai[Bi] = 1);
  var Ci = vb("true"),
    Di,
    Ei = !1;
  Ei = !0;
  Di = Ei;
  var Fi,
    Gi = !1;
  Fi = Gi;
  var Hi,
    Ii = !1;
  Hi = Ii;
  xi.Dd = "www.googletagmanager.com";
  var Ji = "" + xi.Dd + (Di ? "/gtag/js" : "/gtm.js"),
    Ki = null,
    Li = null,
    Mi = {},
    Ni = {},
    Oi = function () {
      var a = yi.sequence || 1;
      yi.sequence = a + 1;
      return a;
    };
  xi.Sj = "true";
  var Pi = "";
  xi.Bf = Pi;
  var Qi = new (function () {
      this.m = "";
      this.J = this.D = !1;
      this.Da = this.P = this.Z = this.F = "";
    })(),
    Ri = function () {
      var a = Qi.F.length;
      return "/" === Qi.F[a - 1] ? Qi.F.substring(0, a - 1) : Qi.F;
    };
  function Si(a) {
    for (var b = {}, c = la(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Ti = new rb(),
    Ui = {},
    Vi = {},
    Yi = {
      name: xi.Ta,
      set: function (a, b) {
        k(Gb(a, b), Ui);
        Wi();
      },
      get: function (a) {
        return Xi(a, 2);
      },
      reset: function () {
        Ti = new rb();
        Ui = {};
        Wi();
      },
    },
    Xi = function (a, b) {
      return 2 != b ? Ti.get(a) : Zi(a);
    },
    Zi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Ui, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    $i = function (a, b) {
      Vi.hasOwnProperty(a) || (Ti.set(a, b), k(Gb(a, b), Ui), Wi());
    },
    aj = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Xi(c, 1);
        if (Array.isArray(d) || Va(d)) d = k(d);
        Vi[c] = d;
      }
    },
    Wi = function (a) {
      z(Vi, function (b, c) {
        Ti.set(b, c);
        k(Gb(b), Ui);
        k(Gb(b, c), Ui);
        a && delete Vi[b];
      });
    },
    bj = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Zi(a) : Ti.get(a);
      "array" === Ta(d) || "object" === Ta(d) ? (c = k(d)) : (c = d);
      return c;
    };
  var cj = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var m = g[h].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Xi(m.substring(10));
            else {
              var n = m.split(".");
              f = D[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && Eh) {
        var q = Fh(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(Vc(q[r]) || xb(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    dj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = cj(b, "email", a.email) || c;
        c = cj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = cj(f, "first_name", d[e].first_name) || c;
          c = cj(f, "last_name", d[e].last_name) || c;
          c = cj(f, "street", d[e].street) || c;
          c = cj(f, "city", d[e].city) || c;
          c = cj(f, "region", d[e].region) || c;
          c = cj(f, "country", d[e].country) || c;
          c = cj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    ej = function (a) {
      return Va(a) ? !!a.enable_code : !1;
    };
  function fj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var gj = [];
  function hj(a) {
    switch (a) {
      case 0:
        return 0;
      case 36:
        return 11;
      case 37:
        return 12;
      case 41:
        return 14;
      case 44:
        return 13;
      case 54:
        return 20;
      case 66:
        return 16;
      case 68:
        return 23;
      case 76:
        return 18;
      case 84:
        return 21;
      case 87:
        return 22;
    }
  }
  function R(a) {
    gj[a] = !0;
    var b = hj(a);
    void 0 !== b && (Kb[b] = !0);
  }
  R(26);
  R(22);
  R(23);
  R(24);
  R(25);
  R(38);
  R(42);
  R(56);
  R(28);
  R(14);
  R(83);
  R(13);
  R(91);
  R(82);
  R(41);
  R(45);
  R(67);
  R(34);
  R(7);
  R(4);
  R(60);
  R(11);
  R(80);
  R(51);
  R(52);
  R(53);
  R(48);
  R(74);
  R(89);
  R(88);
  R(65);
  R(94);
  R(92);
  R(66);
  R(5);

  R(20);
  R(70);
  Lb[1] = fj("1", 6e4);
  Lb[3] = fj("10", 1);
  Lb[2] = fj("", 50);
  R(10);
  R(68);
  function nj(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? R(a) : R(b);
  }
  function T(a) {
    return !!gj[a];
  }
  var oj = function (a) {
    ib("HEALTH", a);
  };
  var pj;
  try {
    pj = JSON.parse(
      gb(
        "eyIwIjoiQ08iLCIxIjoiQ08tU0FOIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY29tLmNvIiwiNCI6IiIsIjUiOnRydWUsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"
      )
    );
  } catch (a) {
    M(123), oj(2), (pj = {});
  }
  var qj = function () {
      return pj["0"] || "";
    },
    rj = function () {
      var a = !1;
      a = !!pj["2"];
      return a;
    },
    sj = function () {
      return !1 !== pj["6"];
    },
    tj = function () {
      var a = "";
      a = pj["4"] || "";
      return a;
    },
    uj = function () {
      var a = !1;
      a = !!pj["5"];
      return a;
    },
    vj = function () {
      var a = "";
      a = pj["3"] || "";
      return a;
    };
  var wj = /:[0-9]+$/,
    xj = /^\d+\.fls\.doubleclick\.net$/,
    yj = function (a, b, c, d) {
      for (
        var e = [], f = la(a.split("&")), g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = la(g.value.split("=")),
          m = h.next().value,
          n = na(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
        }
      }
      return c ? e : void 0;
    },
    Bj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = zj(a.protocol) || zj(D.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : D.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || D.location.hostname)
            .replace(wj, "")
            .toLowerCase());
      return Aj(a, b, c, d, e);
    },
    Aj = function (a, b, c, d, e) {
      var f,
        g = zj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Cj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(wj, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || ib("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = yj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    zj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Cj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Dj = {},
    Ej = 0,
    Fj = function (a) {
      var b = Dj[a];
      if (!b) {
        var c = G.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || ib("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(wj, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > Ej && ((Dj[a] = b), Ej++);
      }
      return b;
    },
    Gj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Fj(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var m = "" + f + g + h;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Hj = function (a) {
      var b = Fj(D.location.href),
        c = Bj(b, "host", !1);
      if (c && c.match(xj)) {
        var d = Bj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Ij = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Jj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Fj("" + c + b).href;
    }
  }
  function Kj() {
    return Qi.D || Fi;
  }
  function Lj() {
    return !!xi.Bf && "SGTM_TOKEN" !== xi.Bf.split("@@").join("");
  }
  function Mj(a) {
    for (var b = la([Q.g.gd, Q.g.Hb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function Nj(a, b) {
    return Qi.D ? "" + Ri() + (b ? Ij[a] || "" : "") : a;
  }
  var Oj = function (a) {
      var b = String(a[We.na] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Pj =
      0 <= D.location.search.indexOf("?gtm_latency=") ||
      0 <= D.location.search.indexOf("&gtm_latency=");
  var Rj = function (a, b) {
      var c = Qj();
      c.pending || (c.pending = []);
      pb(c.pending, function (d) {
        return (
          d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        );
      }) || c.pending.push({ target: a, onLoad: b });
    },
    Sj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Qj = function () {
      var a = Jc("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new Sj()), (a.tidr = b));
      return b;
    };
  var Tj = {},
    Uj = !1,
    $f = {
      ctid: "G-D0HXQDBZ94",
      canonicalContainerId: "103636687",
      zj: "G-D0HXQDBZ94|GT-5MRH436",
      Aj: "G-D0HXQDBZ94",
    };
  Tj.fe = vb("");
  var Xj = function () {
      var a = Vj();
      return Uj ? a.map(Wj) : a;
    },
    Zj = function () {
      var a = Yj();
      return Uj ? a.map(Wj) : a;
    },
    bk = function () {
      return ak($f.ctid);
    },
    ck = function () {
      return ak($f.canonicalContainerId || "_" + $f.ctid);
    },
    Vj = function () {
      return $f.zj ? $f.zj.split("|") : [$f.ctid];
    },
    Yj = function () {
      return $f.Aj ? $f.Aj.split("|") : [];
    },
    fk = function () {
      var a = dk(ek());
      if (a) {
        for (; a.parent; ) {
          var b = dk(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    dk = function (a) {
      var b = Qj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    ak = function (a) {
      return Uj ? Wj(a) : a;
    },
    Wj = function (a) {
      return "siloed_" + a;
    },
    hk = function (a) {
      return Uj ? gk(a) : a;
    };
  function gk(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  var ik = function () {
    var a = !1;
    if (a) {
      var b = Qj();
      if (b.siloed) {
        for (
          var c = [], d = Vj().map(Wj), e = Yj().map(Wj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Ff: void 0 }, g++
        )
          (f.Ff = b.siloed[g]),
            !Uj &&
            pb(
              f.Ff.isDestination ? e : d,
              (function (h) {
                return function (m) {
                  return m === h.Ff.ctid;
                };
              })(f)
            )
              ? (Uj = !0)
              : c.push(f.Ff);
        b.siloed = c;
      }
    }
  };
  function jk() {
    var a = Qj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Xj(), f = Zj(), g = {}, h = 0;
        h < a.pending.length;
        g = { Je: void 0 }, h++
      )
        (g.Je = a.pending[h]),
          pb(
            g.Je.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Je.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Je.onLoad), (d = !0))
            : c.push(g.Je);
      a.pending = c;
      if (b)
        try {
          b(ck());
        } catch (m) {}
    }
  }
  var kk = function () {
      for (
        var a = $f.ctid,
          b = Xj(),
          c = Zj(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: $f.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            Ic && (q.scriptSource = Ic);
            var r = p ? e.destination : e.container,
              t = r[n];
            t ? (p && 0 === t.state && M(93), Object.assign(t, q)) : (r[n] = q);
          },
          e = Qj(),
          f = la(b),
          g = f.next();
        !g.done;
        g = f.next()
      )
        d(g.value, !1);
      for (var h = la(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
      e.canonical[ck()] = {};
      jk();
    },
    lk = function (a) {
      return !!Qj().container[a];
    },
    mk = function (a) {
      var b = Qj().destination[a];
      return !!b && !!b.state;
    },
    ek = function () {
      return { ctid: bk(), isDestination: Tj.fe };
    };
  function nk(a) {
    var b = Qj();
    (b.siloed = b.siloed || []).push(a);
  }
  var ok = function () {
      var a = Qj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    pk = function () {
      var a = {};
      z(Qj().destination, function (b, c) {
        0 === c.state && (a[gk(b)] = c);
      });
      return a;
    },
    qk = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var rk = { sampleRate: "0.005000", Pj: "", Oj: Number("5"), yn: Number("") },
    sk = [];
  function tk(a) {
    sk.push(a);
  }
  var uk = !1,
    vk;
  if (!(vk = Pj)) {
    var wk = Math.random(),
      xk = rk.sampleRate;
    vk = wk < Number(xk);
  }
  var yk = vk,
    zk = "/a?id=" + $f.ctid,
    Ak = void 0,
    Bk = {},
    Ck = void 0,
    Dk = new (function () {
      var a = 5;
      0 < rk.Oj && (a = rk.Oj);
      this.m = 0;
      this.F = [];
      this.D = a;
    })(),
    Ek = 1e3;
  function Fk(a, b) {
    var c = Ak;
    if (void 0 === c)
      if (b) c = Oi();
      else return "";
    for (
      var d = [Nj("https://www.googletagmanager.com"), zk],
        e = la(sk),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          h = g({
            eventId: c,
            Ab: !!a,
            Of: function () {
              uk = !0;
            },
          }),
          m = la(h),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = la(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Gk() {
    Ck && (D.clearTimeout(Ck), (Ck = void 0));
    if (void 0 !== Ak && Hk) {
      var a;
      (a = Bk[Ak]) || (a = Dk.m < Dk.D ? !1 : 1e3 > zb() - Dk.F[Dk.m % Dk.D]);
      if (a || 0 >= Ek--) M(1), (Bk[Ak] = !0);
      else {
        var b = Dk.m++ % Dk.D;
        Dk.F[b] = zb();
        var c = Fk(!0);
        Rc(c);
        if (uk) {
          var d = c.replace("/a?", "/td?");
          Rc(d);
        }
        Hk = uk = !1;
      }
    }
  }
  var Hk = !1;
  function Ik(a) {
    Bk[a] ||
      (a !== Ak && (Gk(), (Ak = a)),
      (Hk = !0),
      Ck || (Ck = D.setTimeout(Gk, 500)),
      2022 <= Fk().length && Gk());
  }
  var Jk = qb();
  function Kk() {
    Jk = qb();
  }
  function Lk() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", Jk],
    ];
  }
  var Mk = "",
    Nk = [],
    Ok = !1;
  function Pk() {
    var a = [];
    Mk && a.push(["dl", encodeURIComponent(Mk)]);
    0 < Nk.length && a.push(["tdp", Nk.join(".")]);
    return a;
  }
  function Qk(a) {
    var b = Ok ? [] : Pk();
    !Ok && a.Ab && ((Ok = !0), b.length && a.Of());
    return b;
  }
  var Rk = [],
    Sk = [];
  function Tk(a) {
    -1 === Sk.indexOf(a) && (Rk.push(a), Sk.push(a));
  }
  function Uk(a) {
    if (!Rk.length) return [];
    for (var b = Pk(), c = la(Rk), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Ab && (a.Of(), (Rk.length = 0));
    return b;
  }
  var Vk = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Xk = function () {
      var a = Jc("google_tag_data", {});
      return (a.ics = a.ics || new Wk());
    },
    Wk = function () {
      this.entries = {};
      this.waitPeriodTimedOut =
        this.wasSetLate =
        this.accessedAny =
        this.accessedDefault =
        this.usedImplicit =
        this.usedUpdate =
        this.usedDefault =
        this.usedDeclare =
        this.active =
          !1;
      this.m = [];
    };
  Wk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ib("TAGGING", 19);
    void 0 == b
      ? ib("TAGGING", 18)
      : Yk(this, a, "granted" === b, c, d, e, f, g);
  };
  Wk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Yk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Yk = function (a, b, c, d, e, f, g, h) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if ("" === e || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && 0 < g && void 0 === n.update),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: void 0 !== c ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if ("" !== e || !1 !== n.default) m[b] = t;
      r &&
        D.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (ib("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, h),
            a.notifyListeners());
        }, g);
    }
  };
  aa = Wk.prototype;
  aa.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (null == c ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      h = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = la(d), n = m.next(); !n.done; n = m.next())
        Zk(this, n.value);
    } else if (void 0 !== b && h !== b)
      for (var p = la(d), q = p.next(); !q.done; q = p.next())
        Zk(this, q.value);
  };
  aa.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = "granted" === b;
      this.clearTimeout(a, d, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if ("" === d || m === e || (m === d ? h !== e : !m && !h)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (null == b ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.implicit;
    return void 0 !== e ? (e ? 3 : 4) : 0;
  };
  aa.addListener = function (a, b) {
    this.m.push({ consentTypes: a, al: b });
  };
  var Zk = function (a, b) {
    for (var c = 0; c < a.m.length; ++c) {
      var d = a.m[c];
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Bj = !0);
    }
  };
  Wk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.m.length; ++c) {
      var d = this.m[c];
      if (d.Bj) {
        d.Bj = !1;
        try {
          d.al({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var $k = function (a) {
    $k[" "](a);
    return a;
  };
  $k[" "] = function () {};
  var bl = function () {
    var a = al,
      b = "jh";
    if (a.jh && a.hasOwnProperty(b)) return a.jh;
    var c = new a();
    return (a.jh = c);
  };
  var al = function () {
    var a = {};
    this.m = function () {
      var b = Vk.m,
        c = Vk.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.D = function () {
      a[Vk.m] = !0;
    };
  };
  var cl = !1,
    dl = !1,
    el = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
    };
  function fl(a) {
    var b = Xk();
    if ("ad_user_data" === a)
      if (Mb(22)) {
        var c = b.getConsentState("ad_storage", el);
        if (2 !== c && 4 !== c) return c;
      } else Mb(21) && (a = "ad_storage");
    return b.getConsentState(a, el);
  }
  var gl = function (a) {
      Xk().accessedAny = !0;
      return (l(a) ? [a] : a).every(function (b) {
        switch (fl(b)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    hl = function (a) {
      Xk().accessedAny = !0;
      return fl(a);
    },
    il = function (a) {
      for (var b = {}, c = la(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = !1 !== el.corePlatformServices[e];
      }
      return b;
    },
    jl = function (a) {
      var b = Xk();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    kl = function () {
      if (!bl().m()) return !1;
      var a = Xk();
      a.accessedAny = !0;
      return a.active;
    },
    ll = function (a, b) {
      if (Mb(21)) {
        for (
          var c = [],
            d = a.find(function (h) {
              return "ad_storage" === h;
            }),
            e = la(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var g = f.value;
          if ("ad_user_data" === g) {
            if (d) continue;
            c.push("ad_storage");
          }
          c.push(g);
        }
        Xk().addListener(c, b);
      } else Xk().addListener(a, b);
    },
    ml = function (a, b) {
      Xk().notifyListeners(a, b);
    },
    nl = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!jl(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ll(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ol = function (a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          gl(n) && !f[n] && h.push(n);
        }
        return h;
      }
      function d(h) {
        for (var m = 0; m < h.length; m++) f[h[m]] = !0;
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length &&
        (d(g),
        ll(e, function (h) {
          function m(q) {
            0 !== q.length && (d(q), (h.consentTypes = q), a(h));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : D.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function pl() {}
  function ql() {}
  var rl = [Q.g.M, Q.g.T, Q.g.O, Q.g.xa],
    sl,
    tl,
    ul = function (a) {
      for (
        var b = a[Q.g.hc], c = Array.isArray(b) ? b : [b], d = { ze: 0 };
        d.ze < c.length;
        d = { ze: d.ze }, ++d.ze
      )
        z(
          a,
          (function (e) {
            return function (f, g) {
              if (f !== Q.g.hc) {
                var h = c[e.ze],
                  m = qj(),
                  n = pj["1"] || "";
                dl = !0;
                cl && ib("TAGGING", 20);
                Xk().declare(f, g, h, m, n);
              }
            };
          })(d)
        );
    },
    vl = function (a) {
      !tl && sl && Tk("crc");
      tl = !0;
      var b = a[Q.g.hc];
      b && M(40);
      var c = a[Q.g.Qe];
      c && M(41);
      for (
        var d = Array.isArray(b) ? b : [b], e = { Ae: 0 };
        e.Ae < d.length;
        e = { Ae: e.Ae }, ++e.Ae
      )
        z(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== Q.g.hc && g !== Q.g.Qe) {
                var m = d[f.Ae],
                  n = Number(c),
                  p = qj(),
                  q = pj["1"] || "";
                n = void 0 === n ? 0 : n;
                cl = !0;
                dl && ib("TAGGING", 20);
                Xk().default(g, h, m, p, q, n, el);
              }
            };
          })(e)
        );
    },
    wl = function (a, b) {
      sl = !0;
      z(a, function (c, d) {
        cl = !0;
        dl && ib("TAGGING", 20);
        Xk().update(c, d, el);
      });
      ml(b.eventId, b.priorityId);
    },
    xl = function (a) {
      a.hasOwnProperty("all") &&
        z(wi, function (b) {
          el.corePlatformServices[b] = "granted" === a.all;
          el.usedCorePlatformServices = !0;
        });
      z(a, function (b, c) {
        "all" !== b &&
          ((el.corePlatformServices[b] = "granted" === c),
          (el.usedCorePlatformServices = !0));
      });
    },
    W = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return gl(b);
      });
    },
    yl = function (a, b) {
      ll(a, b);
    },
    zl = function (a, b) {
      ol(a, b);
    },
    Al = function (a, b) {
      nl(a, b);
    },
    Bl = function () {
      var a = [Q.g.M, Q.g.xa, Q.g.O];
      Xk().waitForUpdate(a, 500, el);
    },
    Cl = function (a) {
      for (var b = la(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Xk().clearTimeout(d, void 0, el);
      }
      ml();
    };
  var Dl = function () {
    if (void 0 === yi.pscdl) {
      var a = function (b) {
        yi.pscdl = b;
      };
      try {
        "cookieDeprecationLabel" in Gc
          ? (a("pending"), Gc.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
    }
  };
  var El = /[A-Z]+/,
    Fl = /\s/,
    Gl = function (a, b) {
      if (l(a)) {
        a = xb(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (El.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var h = g(f[1]);
                2 === h.length && ((f[1] = h[0]), f.push(h[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Fl.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, ia: d + "-" + f[0], ka: f };
          }
        }
      }
    },
    Il = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Gl(a[d], b);
        e && (c[e.id] = e);
      }
      Hl(c);
      var f = [];
      z(c, function (g, h) {
        f.push(h);
      });
      return f;
    };
  function Hl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.ka[Jl[2]] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Kl = {},
    Jl =
      ((Kl[0] = 0),
      (Kl[1] = 0),
      (Kl[2] = 1),
      (Kl[3] = 0),
      (Kl[4] = 1),
      (Kl[5] = 2),
      (Kl[6] = 0),
      (Kl[7] = 0),
      (Kl[8] = 0),
      Kl);
  var Ll = [];
  function Ml(a) {
    if (!Ll.length) return [];
    var b = [["tdc", Ll.join("!")]];
    a.Ab && (a.Of(), (Ll.length = 0));
    return b;
  }
  var Nl = { initialized: 11, complete: 12, interactive: 13 },
    Ol = {},
    Pl = Object.freeze(((Ol[Q.g.Ia] = !0), Ol)),
    Ql =
      0 <= G.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= G.location.search.indexOf("&gtm_diagnostics="),
    Sl = function (a, b, c) {
      if (yk && "config" === a && !(1 < Gl(b).ka.length)) {
        var d,
          e = Jc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = k(c.J);
        k(c.m, f);
        var g = [],
          h;
        for (h in d) {
          var m = Rl(d[h], f);
          m.length && (Ql && console.log(m), g.push(h));
        }
        g.length &&
          (g.length && yk && Ll.push(b + "*" + g.join(".")),
          ib("TAGGING", Nl[G.readyState] || 14));
        d[b] = f;
      }
    };
  function Tl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Rl(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Pl[q] : t;
      },
      f;
    for (f in Tl(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        m = e(f, b),
        n = "object" === Ta(h) || "array" === Ta(h),
        p = "object" === Ta(m) || "array" === Ta(m);
      if (n && p) Rl(h, m, c, g);
      else if (n || p || h !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Ul = function (a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.m = c;
      this.P = d;
      this.F = e;
      this.J = f;
      this.D = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Vl = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.m);
          c.push(a.P);
          c.push(a.F);
          c.push(a.J);
          c.push(a.D);
          break;
        case 2:
          c.push(a.m);
          break;
        case 1:
          c.push(a.P);
          c.push(a.F);
          c.push(a.J);
          c.push(a.D);
          break;
        case 4:
          c.push(a.m), c.push(a.P), c.push(a.F), c.push(a.J);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = la(Vl(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (void 0 !== g[b]) return g[b];
      }
      return c;
    },
    Wl = function (a) {
      for (
        var b = {}, c = Vl(a, 4), d = la(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = la(f), h = g.next();
          !h.done;
          h = g.next()
        )
          b[h.value] = 1;
      return Object.keys(b);
    },
    Xl = function (a, b, c) {
      function d(n) {
        Va(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Vl(a, void 0 === c ? 3 : c);
      g.reverse();
      for (var h = la(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Yl = function (a) {
      for (
        var b = [Q.g.Pc, Q.g.Lc, Q.g.Mc, Q.g.Nc, Q.g.Oc, Q.g.Qc, Q.g.Rc],
          c = Vl(a, 3),
          d = la(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, h = !1, m = la(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((g[p] = f[p]), (h = !0));
        }
        var q = h ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Zl = function (a, b) {
      this.wf = a;
      this.xf = b;
      this.F = {};
      this.sb = {};
      this.m = {};
      this.J = {};
      this.md = {};
      this.Ya = {};
      this.D = {};
      this.Da = function () {};
      this.Z = function () {};
      this.P = !1;
    },
    $l = function (a, b) {
      a.F = b;
      return a;
    },
    am = function (a, b) {
      a.sb = b;
      return a;
    },
    bm = function (a, b) {
      a.m = b;
      return a;
    },
    cm = function (a, b) {
      a.J = b;
      return a;
    },
    dm = function (a, b) {
      a.md = b;
      return a;
    },
    em = function (a, b) {
      a.Ya = b;
      return a;
    },
    fm = function (a, b) {
      a.D = b || {};
      return a;
    },
    gm = function (a, b) {
      a.Da = b;
      return a;
    },
    hm = function (a, b) {
      a.Z = b;
      return a;
    },
    im = function (a, b) {
      a.P = b;
      return a;
    },
    jm = function (a) {
      return new Ul(a.wf, a.xf, a.F, a.sb, a.m, a.J, a.Ya, a.D, a.Da, a.Z, a.P);
    };
  var km = {};
  function lm(a, b, c) {
    yk && void 0 !== a && ((km[a] = km[a] || []), km[a].push(c + b), Ik(a));
  }
  function mm(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = km[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete km[b];
    return d;
  }
  var om = function (a, b) {
      var c = Gl(ak(a), !0);
      c && nm.register(c, b);
    },
    pm = function (a, b, c, d) {
      var e = Gl(c, d.isGtmEvent);
      e && nm.push("event", [b, a], e, d);
    },
    qm = function (a, b, c, d) {
      var e = Gl(c, d.isGtmEvent);
      e && nm.push("get", [a, b], e, d);
    },
    sm = function (a) {
      var b = Gl(ak(a), !0),
        c;
      b ? (c = rm(nm, b).m) : (c = {});
      return c;
    },
    tm = function (a, b) {
      var c = Gl(ak(a), !0);
      if (c) {
        var d = nm,
          e = k(b);
        k(rm(d, c).m, e);
        rm(d, c).m = e;
      }
    },
    um = function () {
      this.status = 1;
      this.P = {};
      this.m = {};
      this.D = {};
      this.Z = null;
      this.J = {};
      this.F = !1;
    },
    vm = function (a, b, c, d) {
      var e = zb();
      this.type = a;
      this.D = e;
      this.m = b;
      this.args = c;
      this.messageContext = d;
    },
    wm = function () {
      this.D = {};
      this.F = {};
      this.m = [];
    },
    rm = function (a, b) {
      var c = b.ia;
      return (a.D[c] = a.D[c] || new um());
    },
    xm = function (a, b, c, d) {
      if (d.m) {
        var e = rm(a, d.m),
          f = e.Z;
        if (f) {
          var g = k(c),
            h = k(e.P[d.m.id]),
            m = k(e.J),
            n = k(e.m),
            p = k(a.F),
            q = {};
          if (yk)
            try {
              q = k(Ui);
            } catch (v) {
              M(72);
            }
          var r = d.m.prefix,
            t = function (v) {
              lm(d.messageContext.eventId, r, v);
            },
            u = jm(
              im(
                hm(
                  gm(
                    fm(
                      dm(
                        cm(
                          em(
                            bm(
                              am(
                                $l(
                                  new Zl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            lm(d.messageContext.eventId, r, "1"),
              Sl(d.type, d.m.id, u),
              f(d.m.id, b, d.D, u);
          } catch (v) {
            lm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  wm.prototype.register = function (a, b, c) {
    var d = rm(this, a);
    3 !== d.status &&
      ((d.Z = b), (d.status = 3), c && (k(d.m, c), (d.m = c)), this.flush());
  };
  wm.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === rm(this, c).status &&
        ((rm(this, c).status = 2), this.push("require", [{}], c, {})),
      rm(this, c).F && (d.deferrable = !1));
    this.m.push(new vm(a, c, b, d));
    d.deferrable || this.flush();
  };
  wm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.m.length;
      e = { yc: void 0, bh: void 0 }
    ) {
      var f = this.m[0],
        g = f.m;
      if (f.messageContext.deferrable)
        !g || rm(this, g).F
          ? ((f.messageContext.deferrable = !1), this.m.push(f))
          : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== rm(this, g).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              k(Gb(r, t), b.F);
            });
            break;
          case "config":
            var h = rm(this, g);
            e.yc = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.yc);
                };
              })(e)
            );
            var m = !!e.yc[Q.g.Wb];
            delete e.yc[Q.g.Wb];
            var n = g.ia === g.id;
            m || (n ? (h.J = {}) : (h.P[g.id] = {}));
            (h.F && m) || xm(this, Q.g.ba, e.yc, f);
            h.F = !0;
            n ? k(e.yc, h.J) : (k(e.yc, h.P[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.bh = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  k(Gb(t, u), r.bh);
                };
              })(e)
            );
            xm(this, f.args[1], e.bh, f);
            break;
          case "get":
            var p = {},
              q = ((p[Q.g.ob] = f.args[0]), (p[Q.g.Db] = f.args[1]), p);
            xm(this, Q.g.Oa, q, f);
        }
        this.m.shift();
        ym(this, f);
      }
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var ym = function (a, b) {
      if ("require" !== b.type)
        if (b.m)
          for (var c = rm(a, b.m).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.D)
            if (a.D.hasOwnProperty(e)) {
              var f = a.D[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    nm = new wm();
  var zm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Am = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Bm = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Cm() {
    return lc ? !!sc && !!sc.platform : !1;
  }
  function Dm() {
    return vc("iPhone") && !vc("iPod") && !vc("iPad");
  }
  function Em() {
    Dm() || vc("iPad") || vc("iPod");
  }
  xc();
  wc() || vc("Trident") || vc("MSIE");
  vc("Edge");
  !vc("Gecko") ||
    (-1 != rc().toLowerCase().indexOf("webkit") && !vc("Edge")) ||
    vc("Trident") ||
    vc("MSIE") ||
    vc("Edge");
  -1 != rc().toLowerCase().indexOf("webkit") && !vc("Edge") && vc("Mobile");
  Cm() || vc("Macintosh");
  Cm() || vc("Windows");
  (Cm() ? "Linux" === sc.platform : vc("Linux")) || Cm() || vc("CrOS");
  Cm() || vc("Android");
  Dm();
  vc("iPad");
  vc("iPod");
  Em();
  rc().toLowerCase().indexOf("kaios");
  var Fm = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Gm = /#|$/,
    Hm = function (a, b) {
      var c = a.search(Gm),
        d = Fm(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Im = /[?&]($|#)/,
    Jm = function (a, b, c) {
      for (
        var d, e = a.search(Gm), f = 0, g, h = [];
        0 <= (g = Fm(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Im, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Km = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              $k(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Lm = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Mm(a) {
    if (!a || !G.head) return null;
    var b = Nm("META");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Om = function (a) {
      if (D.top == D) return 0;
      if (void 0 === a ? 0 : a) {
        var b = D.location.ancestorOrigins;
        if (b) return b[b.length - 1] == D.location.origin ? 1 : 2;
      }
      return Km(D.top) ? 1 : 2;
    },
    Nm = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Pm(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Nm("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = kc(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Bm(e, "load", f);
      Bm(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Rm = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Lm(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Qm(c, b);
    },
    Qm = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Pm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Sm = function () {
    this.P = this.P;
    this.F = this.F;
  };
  Sm.prototype.P = !1;
  Sm.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.F || (this.F = []), this.F.push(void 0 !== b ? Fa(a, b) : a));
  };
  var Tm = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Um = function (a, b) {
      b = void 0 === b ? {} : b;
      Sm.call(this);
      this.D = a;
      this.m = null;
      this.Da = {};
      this.sb = 0;
      var c;
      this.Ya = null != (c = b.ym) ? c : 500;
      var d;
      this.Z = null != (d = b.nn) ? d : !1;
      this.J = null;
    };
  xa(Um, Sm);
  var fn = function (a) {
    return "function" === typeof a.D.__tcfapi || null != Vm(a);
  };
  Um.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Z },
      d = Am(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.Ya &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Ya));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Tm(c)),
          (c.internalBlockOnErrors = b.Z),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      gn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Um.prototype.removeEventListener = function (a) {
    a && a.listenerId && gn(this, "removeEventListener", null, a.listenerId);
  };
  var jn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var m;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = hn(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && hn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === h
            ? a.purpose && a.vendor
              ? hn(a.purpose.legitimateInterests, b) &&
                hn(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    hn = function (a, b) {
      return !(!a || !a[b]);
    },
    gn = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.D.__tcfapi) {
        var e = a.D.__tcfapi;
        e(b, 2, c, d);
      } else if (Vm(a)) {
        kn(a);
        var f = ++a.sb;
        a.Da[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Vm = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.D, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    kn = function (a) {
      a.J ||
        ((a.J = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.Da[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Bm(a.D, "message", a.J));
    },
    ln = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Tm(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Rm({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var mn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function nn() {
    var a = yi.tcf || {};
    return (yi.tcf = a);
  }
  var on = function () {
      return new Um(D, { ym: -1 });
    },
    un = function () {
      var a = nn(),
        b = on();
      fn(b) && !pn() && !qn() && M(124);
      if (!a.active && fn(b)) {
        pn() &&
          ((a.active = !0),
          (a.fc = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Xk().active = !0),
          (a.tcString = "tcunavailable"));
        Bl();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              rn(a), Cl([Q.g.M, Q.g.xa, Q.g.O]), (Xk().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              qn() && (a.active = !0),
              !sn(c) || pn() || qn())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in mn) mn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (sn(c)) {
                var g = {},
                  h;
                for (h in mn)
                  if (mn.hasOwnProperty(h))
                    if ("1" === h) {
                      var m,
                        n = c,
                        p = { jl: !0 };
                      p = void 0 === p ? {} : p;
                      m = ln(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : "tcunavailable" === n.tcString
                          ? !p.vj
                          : (p.vj || void 0 !== n.gdprApplies || p.jl) &&
                            (p.vj ||
                              ("string" === typeof n.tcString &&
                                n.tcString.length))
                          ? jn(n, "1", 0)
                          : !0
                        : !1;
                      g["1"] = m;
                    } else g[h] = jn(c, h, mn[h]);
                d = g;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.fc = d;
                var q = {},
                  r = ((q[Q.g.M] = a.fc["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (Cl([Q.g.M, Q.g.xa, Q.g.O]), (Xk().active = !0))
                  : ((r[Q.g.xa] =
                      a.fc["3"] && a.fc["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[Q.g.O] =
                          a.fc["1"] && a.fc["7"] ? "granted" : "denied")
                      : Cl([Q.g.O]),
                    wl(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: tn() || "",
                      }
                    ));
              }
            } else Cl([Q.g.M, Q.g.xa, Q.g.O]);
          });
        } catch (c) {
          rn(a), Cl([Q.g.M, Q.g.xa, Q.g.O]), (Xk().active = !0);
        }
      }
    };
  function rn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function sn(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var pn = function () {
    return !0 === D.gtag_enable_tcf_support;
  };
  function qn() {
    return !0 === nn().enableAdvertiserConsentMode;
  }
  var tn = function () {
      var a = nn();
      if (a.active) return a.tcString;
    },
    vn = function () {
      var a = nn();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    wn = function (a) {
      if (!mn.hasOwnProperty(String(a))) return !0;
      var b = nn();
      return b.active && b.fc ? !!b.fc[String(a)] : !0;
    };
  var xn = [Q.g.M, Q.g.T, Q.g.O, Q.g.xa],
    yn = {},
    zn = ((yn[Q.g.M] = 1), (yn[Q.g.T] = 2), yn);
  function An(a) {
    if (void 0 === a) return 0;
    switch (V(a, Q.g.la)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var Bn = function (a) {
      var b = An(a);
      if (3 === b) return !1;
      switch (hl(Q.g.xa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    Cn = function () {
      return kl() || !gl(Q.g.M) || !gl(Q.g.T);
    },
    Dn = function () {
      var a = {},
        b;
      for (b in zn) zn.hasOwnProperty(b) && (a[zn[b]] = hl(b));
      return "G1" + Ve(a[1] || 0) + Ve(a[2] || 0);
    },
    En = {},
    Fn =
      ((En[Q.g.M] = 0), (En[Q.g.T] = 1), (En[Q.g.O] = 2), (En[Q.g.xa] = 3), En);
  function Gn(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Hn = function (a) {
      for (var b = "1", c = 0; c < xn.length; c++) {
        var d = b,
          e,
          f = xn[c],
          g = el.delegatedConsentTypes[f];
        e = void 0 === g ? 0 : Fn.hasOwnProperty(g) ? 12 | Fn[g] : 8;
        var h = Xk();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = (e << 2) | Gn(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Gn(m.declare) << 4) | (Gn(m.default) << 2) | Gn(m.update)
            ]);
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((kl() ? 1 : 0) << 2) | An(a)
      ];
      return n + p;
    },
    In = function () {
      if (!gl(Q.g.O)) return "-";
      for (
        var a = Object.keys(wi), b = il(a), c = "", d = la(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += wi[f]);
      }
      return c || "-";
    },
    Jn = function () {
      return sj() || ((pn() || qn()) && "1" === vn()) ? "1" : "0";
    },
    Kn = function () {
      return (sj() ? !0 : !(!pn() && !qn()) && "1" === vn()) || !gl(Q.g.O);
    },
    Ln = function () {
      var a = "0",
        b = "0",
        c;
      var d = nn();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var g = nn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var h = 0;
      sj() && (h |= 1);
      "1" === vn() && (h |= 2);
      pn() && (h |= 4);
      var m;
      var n = nn();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (h |= 8);
      Xk().waitPeriodTimedOut && (h |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]
      );
    };
  var Mn = function () {
    var a = !1;
    return a;
  };
  var Nn = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    On = function (a, b) {
      var c = $f.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = $f.ctid;
      d.gm = xi.je;
      d.km = xi.Ng;
      d.Jl = Tj.fe ? 2 : 1;
      d.pe = $f.canonicalContainerId;
      d.pe !== a && (d.Qf = a);
      T(64) ? (d.Kj = 2) : T(63) && (d.Kj = 1);
      Di ? ((d.Mf = Nn[c]), d.Mf || (d.Mf = 0)) : (d.Mf = Hi ? 13 : 10);
      Qi.J
        ? ((d.Kf = 0), (d.Mk = 2))
        : Fi
        ? (d.Kf = 1)
        : Mn()
        ? (d.Kf = 2)
        : (d.Kf = 3);
      var e = {};
      e[6] = Uj;
      d.Pk = e;
      var f;
      var g = d.Mf,
        h = d.Kf;
      void 0 === g
        ? (f = "")
        : (h || (h = 0), (f = "" + Qg(1, 1) + Ue((g << 2) | h)));
      var m = d.Mk,
        n = 4 + f + (m ? "" + Qg(2, 1) + Ue(m) : ""),
        p,
        q = d.km;
      p = q && Pg.test(q) ? "" + Qg(3, 2) + q : "";
      var r,
        t = d.gm;
      r = t ? "" + Qg(4, 1) + Ue(t) : "";
      var u;
      var v = d.ctid;
      if (v && b) {
        var w = v.split("-"),
          x = w[0].toUpperCase();
        if ("GTM" !== x && "OPT" !== x) u = "";
        else {
          var y = w[1];
          u = "" + Qg(5, 3) + Ue(1 + y.length) + (d.Jl || 0) + y;
        }
      } else u = "";
      var B = d.Kj,
        A = d.pe,
        E = d.Qf,
        F = d.wn,
        C =
          n +
          p +
          r +
          u +
          (B ? "" + Qg(6, 1) + Ue(B) : "") +
          (A ? "" + Qg(7, 3) + Ue(A.length) + A : "") +
          (E ? "" + Qg(8, 3) + Ue(E.length) + E : "") +
          (F ? "" + Qg(9, 3) + Ue(F.length) + F : ""),
        H;
      var N = d.Pk;
      N = void 0 === N ? {} : N;
      for (
        var O = [], U = la(Object.keys(N)), X = U.next();
        !X.done;
        X = U.next()
      ) {
        var P = X.value;
        O[Number(P)] = N[P];
      }
      if (O.length) {
        var S = Qg(10, 3),
          ma;
        if (0 === O.length) ma = Ue(0);
        else {
          for (var ka = [], da = 0, Ba = !1, Da = 0; Da < O.length; Da++) {
            Ba = !0;
            var ya = Da % 6;
            O[Da] && (da |= 1 << ya);
            5 === ya && (ka.push(Ue(da)), (da = 0), (Ba = !1));
          }
          Ba && ka.push(Ue(da));
          ma = ka.join("");
        }
        var qa = ma;
        H = "" + S + Ue(qa.length) + qa;
      } else H = "";
      return C + H;
    };
  function Pn(a) {
    return "null" !== a.origin;
  }
  var Qn = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Tn = function (a, b, c, d) {
      return Rn(d) ? Qn(a, String(b || Sn()), c) : [];
    },
    Wn = function (a, b, c, d, e) {
      if (Rn(e)) {
        var f = Un(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Vn(
            f,
            function (g) {
              return g.Uk;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Vn(
            f,
            function (g) {
              return g.Wl;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Xn(a, b, c, d) {
    var e = Sn(),
      f = window;
    Pn(f) && (f.document.cookie = a);
    var g = Sn();
    return e != g || (void 0 != c && 0 <= Tn(b, g, !1, d).indexOf(c));
  }
  var ao = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!Rn(c.yb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Yn(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date
        ? (m = c.expires.toUTCString())
        : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Nl);
      g = e(g, "samesite", c.lm);
      c.mm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Zn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!$n(u, c.path) && Xn(v, a, b, c.yb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return $n(n, c.path) ? 1 : Xn(g, a, b, c.yb) ? 0 : 1;
    },
    bo = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return ao(a, b, c);
    };
  function Vn(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c
        ? d.push(h)
        : void 0 === f || m < f
        ? ((e = [h]), (f = m))
        : m === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Un(a, b, c) {
    for (var d = [], e = Tn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: g.join("."), Uk: 1 * m[0] || 1, Wl: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Yn = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    co = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    eo = /(^|\.)doubleclick\.net$/i,
    $n = function (a, b) {
      return (
        eo.test(window.document.location.hostname) || ("/" === b && co.test(a))
      );
    },
    Sn = function () {
      return Pn(window) ? window.document.cookie : "";
    },
    Zn = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      eo.test(e) || co.test(e) || a.push("none");
      return a;
    },
    Rn = function (a) {
      return a && bl().m()
        ? (l(a) ? [a] : a).every(function (b) {
            return jl(b) && gl(b);
          })
        : !0;
    },
    fo = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    go = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    },
    ho = function (a, b) {
      var c = "" + fo(a),
        d = go(b);
      1 < d && (c += "-" + d);
      return c;
    };
  var io = function (a) {
      var b = Math.round(2147483647 * Math.random()),
        c;
      if (a) {
        var d = 1,
          e,
          f,
          g;
        if (a)
          for (d = 0, f = a.length - 1; 0 <= f; f--)
            (g = a.charCodeAt(f)),
              (d = ((d << 6) & 268435455) + g + (g << 14)),
              (e = d & 266338304),
              (d = 0 !== e ? d ^ (e >> 21) : d);
        c = String(b ^ (d & 2147483647));
      } else c = String(b);
      return c;
    },
    jo = function (a) {
      return [io(a), Math.round(zb() / 1e3)].join(".");
    },
    ko = function (a, b, c, d, e) {
      var f = fo(b);
      return Wn(a, f, go(c), d, e);
    },
    lo = function (a, b, c, d) {
      return [b, ho(c, d), a].join(".");
    };
  function mo(a, b, c, d) {
    var e,
      f = Number(null != a.xb ? a.xb : void 0);
    0 !== f && (e = new Date((b || zb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      yb: d,
    };
  }
  var no;
  var ro = function () {
      var a = oo,
        b = po,
        c = qo(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Sc(G, "mousedown", d);
        Sc(G, "keyup", d);
        Sc(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    so = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      qo().decorators.push(f);
    },
    to = function (a, b, c) {
      for (var d = qo().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              p = !!g.sameHost;
            if (m && (p || n !== G.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Cb(e, g.callback());
        }
      }
      return e;
    };
  function qo() {
    var a = Jc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var uo = /(.*?)\*(.*?)\*(.*)/,
    vo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    wo = /^(?:www\.|m\.|amp\.)+/,
    xo = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function yo(a) {
    var b = xo.exec(a);
    if (b) return { xh: b[1], query: b[2], fragment: b[3] };
  }
  function zo(a, b) {
    var c = [
        Gc.userAgent,
        new Date().getTimezoneOffset(),
        Gc.userLanguage || Gc.language,
        Math.floor(zb() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = no)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    no = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ no[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Ao() {
    return function (a) {
      var b = Fj(D.location.href),
        c = b.search.replace("?", ""),
        d = yj(c, "_gl", !1, !0) || "";
      a.query = Bo(d) || {};
      var e = Bj(b, "fragment"),
        f;
      var g = -1;
      if (Eb(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        0 < h && (g = h + 3 + 2);
      }
      if (0 > g) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Bo(f || "") || {};
    };
  }
  var Co = function (a) {
      var b = Ao(),
        c = qo();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Cb(d, e.query), a && Cb(d, e.fragment));
      return d;
    },
    Bo = function (a) {
      try {
        var b = Do(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = gb(d[e + 1]);
            c[f] = g;
          }
          ib("TAGGING", 6);
          return c;
        }
      } catch (h) {
        ib("TAGGING", 8);
      }
    };
  function Do(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = uo.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === zo(h, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return h;
        ib("TAGGING", 7);
      }
    }
  }
  function Eo(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = yo(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (h = "?" + f(h.substring(1)));
    return "" + g.xh + h + m;
  }
  function Fo(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(fb(String(x))));
          }
        var y = v.join("*");
        u = ["1", zo(y), y].join("*");
        d
          ? (Mb(13) || Mb(11) || !p) && Go("_gl", u, a, p, q)
          : Ho("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = to(b, 1, d),
      f = to(b, 2, d),
      g = to(b, 4, d),
      h = to(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Mb(11) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) && Io(m, h[m], a);
  }
  function Io(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? Ho(a, b, c)
      : "form" === c.tagName.toLowerCase() && Go(a, b, c);
  }
  function Ho(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Mb(16) || d)) {
        var h = D.location.href,
          m = yo(c.href),
          n = yo(h);
        g = !(m && n && m.xh === n.xh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Eo(a, b, c.href, d, e);
      gc.test(p) && (c.href = p);
    }
  }
  function Go(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = Eo(a, b, c.action, d, e);
          gc.test(g) && (c.action = g);
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = G.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function oo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Fo(e, e.hostname);
      }
    } catch (g) {}
  }
  function po(a) {
    try {
      if (a.action) {
        var b = Bj(Fj(a.action), "host");
        Fo(a, b);
      }
    } catch (c) {}
  }
  var Jo = function (a, b, c, d) {
      ro();
      so(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Ko = function (a, b) {
      ro();
      so(a, [Aj(D.location, "host", !0)], b, !0, !0);
    },
    Lo = function () {
      var a = G.location.hostname,
        b = vo.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(wo, ""),
        m = e.replace(wo, ""),
        n;
      if (!(n = h === m)) {
        var p = "." + m;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Mo = function (a, b) {
      return !1 === a ? !1 : a || b || Lo();
    };
  var No = ["1"],
    Oo = {},
    Po = {},
    Uo = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Qo(a.prefix);
      if (!Oo[c])
        if (Ro(c, a.path, a.domain)) {
          var d = Po[Qo(a.prefix)];
          So(a, d ? d.id : void 0, d ? d.sh : void 0);
        } else {
          var e = Hj("auiddc");
          if (e) ib("TAGGING", 17), (Oo[c] = e);
          else if (b) {
            var f = Qo(a.prefix),
              g = jo();
            if (0 === To(f, g, a)) {
              var h = Jc("google_tag_data", {});
              h._gcl_au || (h._gcl_au = g);
            }
            Ro(c, a.path, a.domain);
          }
        }
    };
  function So(a, b, c) {
    var d = Qo(a.prefix),
      e = Oo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(zb() / 1e3)));
          To(d, h, a, 1e3 * g);
        }
      }
    }
  }
  function To(a, b, c, d) {
    var e = lo(b, "1", c.domain, c.path),
      f = mo(c, d);
    f.yb = Vo();
    return bo(a, e, f);
  }
  function Ro(a, b, c) {
    var d = ko(a, b, c, No, Vo());
    if (!d) return !1;
    Wo(a, d);
    return !0;
  }
  function Wo(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Oo[a] = c.slice(0, 2).join(".")),
        (Po[a] = { id: c.slice(2, 4).join("."), sh: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Po[a] = { id: c.slice(0, 2).join("."), sh: Number(c[2]) || 0 })
      : (Oo[a] = b);
  }
  function Qo(a) {
    return (a || "_gcl") + "_au";
  }
  function Xo(a) {
    function b() {
      gl(c) && a();
    }
    var c = Vo();
    nl(function () {
      b();
      gl(c) || ol(b, c);
    }, c);
  }
  function Yo(a) {
    var b = Co(!0),
      c = Qo(a.prefix);
    Xo(function () {
      var d = b[c];
      if (d) {
        Wo(c, d);
        var e = 1e3 * Number(Oo[c].split(".")[1]);
        if (e) {
          ib("TAGGING", 16);
          var f = mo(a, e);
          f.yb = Vo();
          var g = lo(d, "1", a.domain, a.path);
          bo(c, g, f);
        }
      }
    });
  }
  function Zo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        h = ko(a, e.path, e.domain, No, Vo());
      h && (g[a] = h);
      return g;
    };
    Xo(function () {
      Jo(f, b, c, d);
    });
  }
  function Vo() {
    return Mb(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var $o = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Kh: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function ap(a, b) {
    var c = $o(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Kh] || (d[c[e].Kh] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Kh].push(g);
      }
    }
    return d;
  }
  var bp = {},
    cp =
      ((bp.k = { Ja: /^[\w-]+$/ }),
      (bp.b = { Ja: /^[\w-]+$/, Fh: !0 }),
      (bp.i = { Ja: /^[1-9]\d*$/ }),
      bp);
  var dp = {},
    ep =
      ((dp[5] = {
        version: "2",
        Dm: ["2"],
        Hj: "ad_storage",
        oj: ["k", "i", "b"],
      }),
      dp);
  function fp(a, b) {
    var c = b.Ja;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function gp(a) {
    for (
      var b = la(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { se: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.se = cp[e];
      d.se
        ? d.se.Fh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (h) {
                      return fp(h, g.se);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && fp(f, d.se)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function hp(a) {
    var b = {},
      c = ep[5];
    if (c) {
      for (
        var d = c.oj, e = la(a.split("$")), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value,
          h = g[0];
        if (-1 !== d.indexOf(h))
          try {
            var m = decodeURIComponent(g.substring(1)),
              n = cp[h];
            n && (n.Fh ? ((b[h] = b[h] || []), b[h].push(m)) : (b[h] = m));
          } catch (p) {}
      }
      return gp(b);
    }
  }
  function ip(a) {
    var b = ep[5];
    if (b) {
      for (var c = [], d = la(b.oj), e = d.next(); !e.done; e = d.next()) {
        var f = e.value,
          g = cp[f];
        if (g) {
          var h = a[f];
          if (void 0 !== h)
            if (g.Fh && Array.isArray(h))
              for (var m = la(h), n = m.next(); !n.done; n = m.next())
                c.push(encodeURIComponent("" + f + n.value));
            else c.push(encodeURIComponent("" + f + h));
        }
      }
      return c.join("$");
    }
  }
  function jp(a) {
    var b = ep[5];
    if (b) {
      for (
        var c = [], d = Tn(a, void 0, void 0, b.Hj), e = la(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value.split("."),
          h = g.shift();
        if (-1 !== b.Dm.indexOf(h)) {
          g.shift();
          var m = g.join(".");
          c.push(hp(m));
        }
      }
      return c;
    }
  }
  function kp(a, b, c, d) {
    c = c || {};
    var e = ip(b);
    if (e) {
      var f = ep[5],
        g = [f.version, ho(c.domain, c.path), e].join(".");
      bo(a, g, mo(c, d, void 0, f.Hj));
    }
  }
  var lp = /^\w+$/,
    mp = /^[\w-]+$/,
    np = {
      ag: "_ag",
      aw: "_aw",
      dc: "_dc",
      gb: "_gb",
      gf: "_gf",
      gp: "_gp",
      ha: "_ha",
    };
  function op() {
    return Mb(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var pp = function (a) {
      return !bl().m() || gl(a);
    },
    qp = function (a, b) {
      function c() {
        var d = pp(b);
        d && a();
        return d;
      }
      nl(function () {
        c() || ol(c, b);
      }, b);
    },
    sp = function (a) {
      return rp(a).map(function (b) {
        return b.aa;
      });
    },
    up = function (a) {
      return tp(a)
        .filter(function (b) {
          return b.aa;
        })
        .map(function (b) {
          return b.aa;
        });
    },
    tp = function (a) {
      var b = vp(a.prefix),
        c = wp("gb", b),
        d = wp("ag", b);
      if (!d || !c) return [];
      var e = function (h) {
          return function (m) {
            m.type = h;
            return m;
          };
        },
        f = rp(c).map(e("gb")),
        g = xp(d).map(e("ag"));
      return f.concat(g).sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
    };
  function yp(a, b, c, d, e) {
    var f = pb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = zp(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  var rp = function (a) {
      for (
        var b = [], c = Tn(a, G.cookie, void 0, op()), d = la(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Ap(e.value);
        if (null != f) {
          var g = f;
          yp(b, g.version, g.aa, g.timestamp, g.labels);
        }
      }
      b.sort(function (h, m) {
        return m.timestamp - h.timestamp;
      });
      return Bp(b);
    },
    xp = function (a) {
      if (!Mb(20)) return [];
      for (
        var b = jp(a) || [], c = [], d = la(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          g = f,
          h = Cp(f);
        h && yp(c, "2", g.k, h, g.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    };
  function zp(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function vp(a) {
    return a && "string" == typeof a && a.match(lp) ? a : "_gcl";
  }
  function Dp(a, b) {
    var c = Mb(20),
      d = Fj(a),
      e = Bj(d, "query", !1, void 0, "gclid"),
      f = Bj(d, "query", !1, void 0, "gclsrc"),
      g = Bj(d, "query", !1, void 0, "wbraid"),
      h;
    c && (h = Bj(d, "query", !1, void 0, "gbraid"));
    var m = Bj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !h))) {
      var n = d.hash.replace("#", "");
      e = e || yj(n, "gclid", !1);
      f = f || yj(n, "gclsrc", !1);
      g = g || yj(n, "wbraid", !1);
      c && (h = h || yj(n, "gbraid", !1));
    }
    return Ep(e, f, m, g, h);
  }
  var Fp = function () {
      return Dp(D.location.href, !0);
    },
    Ep = function (a, b, c, d, e) {
      var f = {},
        g = function (h, m) {
          f[m] || (f[m] = []);
          f[m].push(h);
        };
      f.gclid = a;
      f.gclsrc = b;
      f.dclid = c;
      if (void 0 !== a && a.match(mp))
        switch (b) {
          case void 0:
            g(a, "aw");
            break;
          case "aw.ds":
            g(a, "aw");
            g(a, "dc");
            break;
          case "ds":
            g(a, "dc");
            break;
          case "3p.ds":
            g(a, "dc");
            break;
          case "gf":
            g(a, "gf");
            break;
          case "ha":
            g(a, "ha");
        }
      c && g(c, "dc");
      void 0 !== d && mp.test(d) && ((f.wbraid = d), g(d, "gb"));
      Mb(20) && void 0 !== e && mp.test(e) && ((f.gbraid = e), g(e, "ag"));
      return f;
    },
    Hp = function (a) {
      var b = Fp();
      if (Mb(18)) {
        for (
          var c = !0, d = la(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = Dp(D.document.referrer, !1));
      }
      Gp(b, !1, a);
    };
  function Gp(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = vp(c.prefix);
    d = d || zb();
    var g = Math.round(d / 1e3),
      h = op(),
      m = !1,
      n = !1,
      p = function () {
        if (pp(h)) {
          var q = mo(c, d, !0);
          q.yb = h;
          for (
            var r = function (C, H) {
                var N = wp(C, f);
                N && (bo(N, H, q), "gb" !== C && (m = !0));
              },
              t = function (C) {
                var H = ["GCL", g, C];
                0 < e.length && H.push(e.join("."));
                return H.join(".");
              },
              u = la(["aw", "dc", "gf", "ha", "gp"]),
              v = u.next();
            !v.done;
            v = u.next()
          ) {
            var w = v.value;
            a[w] && r(w, t(a[w][0]));
          }
          if (!m && a.gb) {
            var x = a.gb[0],
              y = wp("gb", f);
            (!b &&
              rp(y).some(function (C) {
                return C.aa === x && C.labels && 0 < C.labels.length;
              })) ||
              r("gb", t(x));
          }
        }
        if (!n && Mb(20) && a.gbraid && pp("ad_storage") && ((n = !0), !m)) {
          var B = a.gbraid,
            A = wp("ag", f);
          if (
            b ||
            !xp(A).some(function (C) {
              return C.aa === B && C.labels && 0 < C.labels.length;
            })
          ) {
            var E = {},
              F = ((E.k = B), (E.i = g), (E.b = e), E);
            kp(A, F, c, d);
          }
        }
      };
    nl(function () {
      p();
      pp(h) || ol(p, h);
    }, h);
  }
  var Jp = function (a, b) {
      var c = Co(!0);
      qp(function () {
        for (var d = vp(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== np[f]) {
            var g = wp(f, d),
              h = c[g];
            if (h) {
              var m = Math.min(Ip(h), zb()),
                n;
              b: {
                for (
                  var p = m, q = Tn(g, G.cookie, void 0, op()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (Ip(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = mo(b, m, !0);
                t.yb = op();
                bo(g, h, t);
              }
            }
          }
        }
        Gp(Ep(c.gclid, c.gclsrc), !1, b);
      }, op());
    },
    Kp = function (a) {
      if (Mb(20)) {
        var b = Co(!0),
          c = vp(a.prefix),
          d = wp("ag", c);
        qp(
          function () {
            if (d) {
              var e = b[d];
              if (e) {
                var f = hp(e);
                if (f) {
                  var g = Cp(f);
                  g || (g = zb());
                  var h;
                  a: {
                    var m = g;
                    if (Mb(20))
                      for (var n = jp(d), p = 0; p < n.length; ++p)
                        if (Cp(n[p]) > m) {
                          h = !0;
                          break a;
                        }
                    h = !1;
                  }
                  h || ((f.i = Math.round(g / 1e3)), kp(d, f, a, g));
                }
              }
            }
          },
          ["ad_storage"]
        );
      }
    },
    wp = function (a, b) {
      var c = np[a];
      if (void 0 !== c) return b + c;
    },
    Ip = function (a) {
      return 0 !== Lp(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Cp(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0;
  }
  function Ap(a) {
    var b = Lp(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Lp(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !mp.test(a[2])
      ? []
      : a;
  }
  var Mp = function (a, b, c, d, e) {
      if (Array.isArray(b) && Pn(D)) {
        var f = vp(e),
          g = function () {
            for (var h = {}, m = 0; m < a.length; ++m) {
              var n = wp(a[m], f);
              if (n) {
                var p = Tn(n, G.cookie, void 0, op());
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        qp(function () {
          Jo(g, b, c, d);
        }, op());
      }
    },
    Np = function (a, b, c, d) {
      if (Array.isArray(a) && Pn(D) && Mb(20)) {
        var e = vp(d),
          f = function () {
            var g = {},
              h = wp("ag", e);
            if (h) {
              var m = jp(h);
              if (m.length) {
                var n = m.sort(function (p, q) {
                  return Cp(q) - Cp(p);
                })[0];
                g[h] = ip(n);
              }
              return g;
            }
          };
        qp(
          function () {
            Jo(f, a, b, c);
          },
          ["ad_storage"]
        );
      }
    },
    Bp = function (a) {
      return a.filter(function (b) {
        return mp.test(b.aa);
      });
    },
    Op = function (a, b) {
      if (Pn(D)) {
        for (var c = vp(b.prefix), d = {}, e = 0; e < a.length; e++)
          np[a[e]] && (d[a[e]] = np[a[e]]);
        qp(function () {
          z(d, function (f, g) {
            var h = Tn(c + g, G.cookie, void 0, op());
            h.sort(function (t, u) {
              return Ip(u) - Ip(t);
            });
            if (h.length) {
              var m = h[0],
                n = Ip(m),
                p = 0 !== Lp(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Lp(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Gp(q, !0, b, n, p);
            }
          });
        }, op());
      }
    },
    Pp = function (a) {
      Mb(20) &&
        qp(
          function () {
            var b = vp(a.prefix),
              c = wp("ag", b);
            if (c) {
              var d = jp(c);
              if (d.length) {
                var e = d.sort(function (m, n) {
                    return Cp(n) - Cp(m);
                  })[0],
                  f = Cp(e),
                  g = e.b,
                  h = {};
                h.gbraid = e.k;
                Gp(h, !0, a, f, g);
              }
            }
          },
          ["ad_storage"]
        );
    };
  function Qp(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Rp = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (kl()) {
        var c = Fp();
        if (Qp(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          Mb(20) && b(d, "gbraid", c.gbraid);
          Ko(function () {
            return d;
          }, 3);
          Ko(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Sp = function (a) {
      if (!Mb(11)) return null;
      var b = Co(!0).gad_source;
      if (null != b) return (D.location.hash = ""), b;
      if (Mb(12)) {
        var c = Fj(D.location.href);
        b = Bj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Fp();
        if (Qp(d, a)) return "0";
      }
      return null;
    },
    Tp = function (a) {
      var b = Sp(a);
      null != b &&
        Ko(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    };
  function Up(a, b, c) {
    if (b.length) {
      for (var d = 0; d < b.length; d++)
        -1 === (b[d].labels || []).indexOf(c) ? a.push(0) : a.push(1);
      if (1 !== a[0]) return b[0];
    }
  }
  var Vp = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!pp(op())) return e;
      var f = rp(a),
        g = Up(e, f, b);
      if (g && !d) {
        var h = g.timestamp,
          m = [g.version, Math.round(h / 1e3), g.aa]
            .concat(g.labels || [], [b])
            .join("."),
          n = mo(c, h, !0);
        n.yb = op();
        bo(a, m, n);
      }
      return e;
    },
    Wp = function (a, b) {
      var c = [];
      b = b || {};
      var d = tp(b),
        e = Up(c, d, a);
      if (e) {
        var f = vp(b.prefix),
          g = wp(e.type, f);
        if (!g) return c;
        var h = e.version,
          m = e.aa,
          n = e.labels,
          p = e.timestamp,
          q = Math.round(p / 1e3);
        if ("ag" === e.type) {
          var r = {},
            t = ((r.k = m), (r.i = q), (r.b = (n || []).concat([a])), r);
          kp(g, t, b, p);
        } else if ("gb" === e.type) {
          var u = [h, q, m].concat(n || [], [a]).join("."),
            v = mo(b, p, !0);
          v.yb = op();
          bo(g, u, v);
        }
      }
      return c;
    };
  function Xp(a, b) {
    var c = vp(b),
      d = wp(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? xp(d) : rp(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Yp(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Zp = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = Math.max(Xp("aw", a), Yp(pp(op()) ? ap() : {})),
      d = Math.max(Xp("gb", a), Yp(pp(op()) ? ap("_gac_gb", !0) : {}));
    Mb(20) && b && (d = Math.max(d, Xp("ag", a)));
    return d > c;
  };
  var $p = function (a, b, c) {
      var d = (yi.joined_auid = yi.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    aq = function () {
      var a = Fj(D.location.href),
        b = Bj(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = yj(c, "gad_source", !1);
      }
      return b;
    },
    bq = function () {
      var a = Fj(D.location.href).search.replace("?", "");
      return "1" === yj(a, "gad", !1, !0);
    },
    cq = function () {
      var a = 1 === Om(!0) ? D.top.location.href : D.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    dq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = Bp(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    fq = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Hj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = vp(b);
      if ("_gcl" === e) {
        var f = !W(eq()) && c,
          g;
        g = Fp()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = wp(a, e);
      return h ? sp(h) : [];
    },
    gq = function (a) {
      var b = eq();
      Al(function () {
        a();
        W(b) || ol(a, b);
      }, b);
    },
    eq = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    hq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    iq = /^www.googleadservices.com$/,
    jq = function (a, b) {
      return fq("aw", a, b);
    },
    kq = function (a, b) {
      return fq("dc", a, b);
    },
    lq = function (a, b, c, d) {
      var e = Fp(),
        f = [],
        g = e.gclid,
        h = e.dclid,
        m = e.gclsrc || "aw",
        n = bq(),
        p = aq();
      !g ||
        ("aw.ds" !== m && "aw" !== m && "ds" !== m && "3p.ds" !== m) ||
        f.push({ aa: g, xe: m });
      h && f.push({ aa: h, xe: "ds" });
      0 === f.length && e.wbraid && f.push({ aa: e.wbraid, xe: "gb" });
      0 === f.length && "aw.ds" === m && f.push({ aa: "", xe: "aw.ds" });
      gq(function () {
        if ((T(41) && T(79)) || W(Q.g.M)) {
          var q = W(eq());
          Uo(a);
          var r;
          if (q && ((r = Oo[Qo(a.prefix)]), void 0 === r && !T(41))) return;
          var t = [];
          if (q || !d) t = f;
          var u = [];
          r && u.push("auid=" + r);
          var v = G.referrer ? Bj(Fj(G.referrer), "host") : "";
          0 === t.length &&
            (hq.test(v) || iq.test(v)) &&
            t.push({ aa: "", xe: "" });
          if (0 !== t.length || n || void 0 !== p) {
            v && u.push("ref=" + encodeURIComponent(v));
            var w = cq();
            u.push("url=" + encodeURIComponent(w));
            u.push("tft=" + zb());
            var x = dd();
            void 0 !== x && u.push("tfd=" + Math.round(x));
            var y = Om(!0);
            u.push("frm=" + y);
            n && u.push("gad=1");
            void 0 !== p && u.push("gad_source=" + encodeURIComponent(p));
            var B = c;
            void 0 === B && (B = nm.F[Q.g.la]);
            var A = {},
              E = jm($l(new Zl(0), ((A[Q.g.la] = B), A)));
            u.push("gtm=" + On(b));
            Cn() && u.push("gcs=" + Dn());
            u.push("gcd=" + Hn(E));
            Kn() && u.push("dma_cps=" + In());
            u.push("dma=" + Jn());
            Bn(E) ? u.push("npa=0") : u.push("npa=1");
            fn(on()) && u.push("tcfd=" + Ln());
            var F = vn();
            F && u.push("gdpr=" + F);
            var C = tn();
            C && u.push("gdpr_consent=" + C);
            T(16) && u.push("apve=" + (T(17) ? 1 : 0));
            Qi.m && u.push("tag_exp=" + Qi.m);
            var H = q
              ? "https://adservice.google.com/pagead/regclk"
              : "https://adservice.googlesyndication.com/pagead/regclk";
            if (0 < t.length)
              for (var N = 0; N < t.length; N++) {
                var O = t[N],
                  U = O.aa,
                  X = O.xe;
                if (!$p(a.prefix, X + "." + U, void 0 !== r)) {
                  var P = H + "?" + u.join("&");
                  "" !== U
                    ? (P =
                        "gb" === X
                          ? P + "&wbraid=" + U
                          : P + "&gclid=" + U + "&gclsrc=" + X)
                    : "aw.ds" === X && (P += "&gclsrc=aw.ds");
                  Zc(P);
                }
              }
            else if (
              (n || void 0 !== p) &&
              !$p(a.prefix, "gad", void 0 !== r)
            ) {
              var S = H + "?" + u.join("&");
              Zc(S);
            }
          }
        }
      });
    };
  var mq,
    nq = !1;
  function oq() {
    nq = !0;
    mq = mq || {};
  }
  var pq = function (a) {
    nq || oq();
    return mq[a];
  };
  var qq = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.m = {};
    this.metadata = k(c.eventMetadata || {});
    this.isAborted = !1;
  };
  qq.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && l(d) && T(48))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.m[a] = d);
  };
  var rq = function (a, b, c) {
    var d = pq(a.target.ia);
    return d && void 0 !== d[b] ? d[b] : c;
  };
  var sq = function () {
    yi.dedupe_gclid || (yi.dedupe_gclid = "" + jo());
    return yi.dedupe_gclid;
  };
  var tq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    uq = /^www.googleadservices.com$/,
    wq = function (a) {
      a || (a = vq());
      return a.Cm
        ? !1
        : a.xl || a.yl || a.Al || a.zl || a.ih || a.fh || a.il || a.nl
        ? !0
        : !1;
    },
    vq = function () {
      var a = {},
        b = Co(!0);
      a.Cm = !!b._up;
      var c = Fp();
      a.xl = void 0 !== c.aw;
      a.yl = void 0 !== c.dc;
      a.Al = void 0 !== c.wbraid;
      a.zl = void 0 !== c.gbraid;
      var d = Fj(D.location.href),
        e = Bj(d, "query", !1, void 0, "gad");
      a.ih = void 0 !== e;
      if (!a.ih) {
        var f = d.hash.replace("#", ""),
          g = yj(f, "gad", !1);
        a.ih = void 0 !== g;
      }
      a.fh = Bj(d, "query", !1, void 0, "gad_source");
      if (void 0 === a.fh) {
        var h = d.hash.replace("#", ""),
          m = yj(h, "gad_source", !1);
        a.fh = m;
      }
      var n = G.referrer ? Bj(Fj(G.referrer), "host") : "";
      a.nl = tq.test(n);
      a.il = uq.test(n);
      return a;
    };
  var xq = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    yq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    zq = /^\d+\.fls\.doubleclick\.net$/,
    Aq = /;gac=([^;?]+)/,
    Bq = /;gacgb=([^;?]+)/,
    Cq = /;gclaw=([^;?]+)/,
    Dq = /;gclgb=([^;?]+)/;
  function Eq(a, b) {
    if (zq.test(G.location.host)) {
      var c = G.location.href.match(b);
      return c && 2 == c.length && c[1].match(xq)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Fq = function (a, b, c) {
    var d = pp(op()) ? ap("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Vp("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (m) {
            return 1 === m;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { fl: f ? e.join(";") : "", bl: Eq(d, Bq) };
  };
  function Gq(a, b, c) {
    if (zq.test(G.location.host)) {
      var d = G.location.href.match(c);
      if (d && 2 == d.length && d[1].match(yq)) return [{ aa: d[1] }];
    } else {
      if ("gclid" === b) return rp((a || "_gcl") + "_aw");
      if ("wbraid" === b) return rp((a || "_gcl") + "_gb");
      if ("braids" === b) return tp({ prefix: a });
    }
    return [];
  }
  var Hq = function (a) {
      return Gq(a, "gclid", Cq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Iq = function (a) {
      return Gq(a, "wbraid", Dq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Jq = function (a) {
      return Gq(a, "braids", Dq)
        .map(function (b) {
          return b.aa;
        })
        .join(".");
    },
    Kq = function (a, b) {
      b = void 0 === b ? !1 : b;
      return zq.test(G.location.host)
        ? !(Cq.test(G.location.href) || Aq.test(G.location.href))
        : Zp(a, b);
    },
    Lq = function (a, b) {
      var c = T(54),
        d;
      d = (void 0 === c ? 0 : c)
        ? Wp(a, b)
        : Vp(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === d.length ||
        d.every(function (e) {
          return 0 === e;
        })
        ? ""
        : d.join(".");
    };
  var Mq = function () {
    if (nb(D.__uspapi)) {
      var a = "";
      try {
        D.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Qq = function (a) {
      if (a.eventName === Q.g.ba && "page_view" === a.metadata.hit_type)
        if (T(17)) {
          a.metadata.redact_click_ids =
            null != V(a.o, Q.g.fa) && !1 !== V(a.o, Q.g.fa) && !W(Nq());
          var b = Oq(a),
            c = !1 !== V(a.o, Q.g.ra);
          c || (a.m[Q.g.oi] = "1");
          var d = vp(b.prefix);
          if (!a.metadata.consent_updated) {
            var e = V(a.o, Q.g.Sa),
              f = V(a.o, Q.g.sa) || {};
            Pq({ pd: c, vd: f, Bd: e, ac: b });
            var g;
            var h = (yi.ads_pageview = yi.ads_pageview || {});
            g = h[d] ? !1 : (h[d] = !0);
            if (!g) {
              a.isAborted = !0;
              return;
            }
          }
          a.m[Q.g.Yc] = Q.g.Nb;
          if (a.metadata.consent_updated)
            (a.m[Q.g.Yc] = Q.g.Vj), (a.m[Q.g.ic] = "1");
          else {
            var m = Fp();
            a.m[Q.g.Ed] = m.gclid;
            a.m[Q.g.Ld] = m.dclid;
            a.m[Q.g.ii] = m.gclsrc;
            a.m[Q.g.Ed] ||
              a.m[Q.g.Ld] ||
              ((a.m[Q.g.Re] = m.wbraid), (a.m[Q.g.cg] = m.gbraid));
            a.m[Q.g.Ba] = G.referrer ? Bj(Fj(G.referrer), "host") : "";
            a.m[Q.g.wa] = cq();
            a.m[Q.g.hi] = aq();
            a.m[Q.g.Wd] = Om(!0);
            var n = vq();
            wq(n) && (a.m[Q.g.bd] = "1");
            a.m[Q.g.ki] = sq();
          }
          var p = W(Nq());
          c && p && (Uo(b), (a.m[Q.g.Cb] = Oo[Qo(b.prefix)]));
          a.m[Q.g.hb] = void 0;
          a.m[Q.g.Pa] = void 0;
          var q = T(54);
          if (!a.m[Q.g.Ed] && !a.m[Q.g.Ld] && Kq(d, q)) {
            var r = q ? up(b) : sp(d + "_gb");
            0 < r.length && (a.m[Q.g.hb] = r.join("."));
          } else if (!a.m[Q.g.Re] && p) {
            var t = sp(d + "_aw");
            0 < t.length && (a.m[Q.g.Pa] = t.join("."));
          }
          a.o.isGtmEvent && (a.o.m[Q.g.la] = nm.F[Q.g.la]);
          Bn(a.o) ? (a.m[Q.g.Jb] = !1) : (a.m[Q.g.Jb] = !0);
          a.metadata.add_tag_timing = !0;
          var u = Mq();
          void 0 !== u && (a.m[Q.g.de] = u || "error");
          var v = vn();
          v && (a.m[Q.g.wc] = v);
          var w = tn();
          w && (a.m[Q.g.xc] = w);
          a.metadata.speculative = !1;
        } else a.isAborted = !0;
    },
    Nq = function () {
      return T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
    },
    Oq = function (a) {
      return {
        prefix: V(a.o, Q.g.Ua) || V(a.o, Q.g.La),
        domain: V(a.o, Q.g.Qa),
        xb: V(a.o, Q.g.Ra),
        flags: V(a.o, Q.g.Va),
      };
    },
    Rq = function (a, b) {
      var c = a.pd,
        d = a.Qf,
        e = a.allowAdPersonalizationSignals,
        f = a.wd,
        g = a.pn;
      Pq({ pd: c, vd: a.vd, Bd: a.Bd, ac: b });
      c && !0 !== g && lq(b, d, e, f);
    },
    Pq = function (a) {
      var b = a.vd,
        c = a.Bd,
        d = a.ac;
      a.pd &&
        (Mo(b[Q.g.Tb], !!b[Q.g.W]) && (Jp(Sq, d), Kp(d), Yo(d)),
        Hp(d),
        Op(Sq, d),
        Pp(d));
      b[Q.g.W] &&
        (Mp(Sq, b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d.prefix),
        Np(b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d.prefix),
        Zo(Qo(d.prefix), b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d),
        Zo("FPAU", b[Q.g.W], b[Q.g.qb], !!b[Q.g.Wa], d));
      c && Rp(Tq);
      Tp(Tq);
    },
    Uq = function (a, b, c, d) {
      var e = a.Nj,
        f = a.callback,
        g = a.xj;
      if ("function" === typeof f)
        if (e === Q.g.Pa && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === Q.g.Cb ? (M(65), Uo(b, !1), f(Oo[Qo(b.prefix)])) : f(g);
    },
    Sq = ["aw", "dc", "gb"],
    Tq = ["aw", "dc", "gb", "ag"];
  function Vq(a) {
    var b = V(a.o, Q.g.Eb),
      c = V(a.o, Q.g.Sb);
    b && !c
      ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Kc && M(131),
        (a.isAborted = !0))
      : !b && c && (M(132), (a.isAborted = !0));
  }
  function Wq(a) {
    var b = W(Q.g.M) ? yi.pscdl : "denied";
    null != b && (a.m[Q.g.Ve] = b);
  }
  var er = function (a, b, c, d) {
    var e = Pc(),
      f;
    if (1 === e)
      a: {
        var g = Ji;
        g = g.toLowerCase();
        for (
          var h = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = G.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(h) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != D.location.protocol ? a : b) + c;
  };
  function rr(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.m[b];
      },
      setHitData: function (b, c) {
        a.m[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.m[b] && (a.m[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.o, b);
      },
      tj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.m);
      },
    };
  }
  var tr = function (a) {
      var b = sr[a.target.ia];
      if (!a.isAborted && b)
        for (var c = rr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    ur = function (a, b) {
      var c = sr[a];
      c || (c = sr[a] = []);
      c.push(b);
    },
    sr = {};
  var yr = function () {
      var a = D.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    zr = function (a) {
      if (G.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !D.getComputedStyle)
        return !0;
      var c = D.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = D.getComputedStyle(d, null));
      }
      return !1;
    };
  var Ar = function () {
      var a = G.body,
        b = G.documentElement || (a && a.parentElement),
        c,
        d;
      if (G.compatMode && "BackCompat" !== G.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    Br = function (a) {
      var b = Ar(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var Cr = [],
    Dr = !(!D.IntersectionObserver || !D.IntersectionObserverEntry),
    Er = function (a, b, c) {
      for (
        var d = new D.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < Cr.length; f++) if (!Cr[f]) return (Cr[f] = d), f;
      return Cr.push(d) - 1;
    },
    Fr = function (a, b, c) {
      function d(h, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: 0 < m,
            rootBounds: n,
            target: h,
            time: zb(),
          };
        I(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, m) {
        return h - m;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var m = Br(b[h]);
          if (m > e[h])
            for (; f[h] < c.length - 1 && m >= c[f[h] + 1]; )
              d(b[h], m), f[h]++;
          else if (m < e[h])
            for (; 0 <= f[h] && m <= c[f[h]]; ) d(b[h], m), f[h]--;
          e[h] = m;
        }
      };
    },
    Gr = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (Dr) {
        var e = !1;
        I(function () {
          e || Fr(a, b, c)();
        });
        return Er(
          function (f) {
            e = !0;
            for (var g = { Be: 0 }; g.Be < f.length; g = { Be: g.Be }, g.Be++)
              I(
                (function (h) {
                  return function () {
                    return a(f[h.Be]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return D.setInterval(Fr(a, b, c), 1e3);
    },
    Hr = function (a) {
      Dr
        ? 0 <= a &&
          a < Cr.length &&
          Cr[a] &&
          (Cr[a].disconnect(), (Cr[a] = void 0))
        : D.clearInterval(a);
    };
  var Jr = function (a, b, c) {
      var d = a.element,
        e = { X: a.X, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = Ir(d));
      c && (e.isVisible = !zr(d));
      return e;
    },
    Kr = function (a, b, c) {
      return Jr({ element: a.element, X: a.X, qa: "1" }, b, c);
    },
    Lr = function (a) {
      var b = !!a.sd + "." + !!a.ud;
      a && a.ue && a.ue.length && (b += "." + a.ue.join("."));
      a &&
        a.ub &&
        (b += "." + a.ub.email + "." + a.ub.phone + "." + a.ub.address);
      return b;
    },
    Or = function (a) {
      if (0 != a.length) {
        var b;
        b = Mr(a, function (c) {
          return !Nr.test(c.X);
        });
        b = Mr(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Mr(b, function (c) {
          return !zr(c.element);
        });
        return b[0];
      }
    },
    Pr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Gh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Mr = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Ir = function (a) {
      var b;
      if (a === G.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Ir(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Rr = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(Qr);
          if (f) {
            var g = f[0],
              h;
            if (D.location) {
              var m = Aj(D.location, "host", !0);
              h = 0 <= g.toLowerCase().indexOf(m);
            } else h = !1;
            h || b.push({ element: d, X: g });
          }
        }
      }
      return b;
    },
    Vr = function () {
      var a = [],
        b = G.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && 1e4 > d;
        d++
      ) {
        var e = c[d];
        if (
          !(0 <= Sr.indexOf(e.tagName.toUpperCase())) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && 1e4 > g; g++)
            if (!(0 <= Tr.indexOf(e.children[g].tagName.toUpperCase()))) {
              f = !0;
              break;
            }
          (!f || (T(21) && -1 !== Ur.indexOf(e.tagName))) && a.push(e);
        }
      }
      return { elements: a, status: 1e4 < c.length ? "2" : "1" };
    },
    Wr = !1;
  var Qr = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    Xr = /@(gmail|googlemail)\./i,
    Nr = /support|noreply/i,
    Sr = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Tr = ["BR"],
    Yr = { Jm: "1", Xm: "2", Nm: "3", Rm: "4", Gm: "5", Ym: "6", Tm: "7" },
    Zr = {},
    Ur = ["INPUT", "SELECT"];
  var rs = function (a) {
      a = a || { sd: !0, ud: !0, Nf: void 0 };
      a.ub = a.ub || { email: !0, phone: !1, address: !1 };
      var b = Lr(a),
        c = Zr[b];
      if (c && 200 > zb() - c.timestamp) return c.result;
      var d = Vr(),
        e = d.status,
        f = [],
        g,
        h,
        m = [];
      if (!T(21)) {
        if (a.ub && a.ub.email) {
          var n = Rr(d.elements);
          f = Pr(n, a && a.ue);
          g = Or(f);
          10 < n.length && (e = "3");
        }
        !a.Nf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Kr(f[p], a.sd, a.ud));
        m = m.slice(0, 10);
      } else if (a.ub) {
      }
      g && (h = Kr(g, a.sd, a.ud));
      var E = { elements: m, Bh: h, status: e };
      Zr[b] = { timestamp: zb(), result: E };
      return E;
    },
    ss = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.X.length + ":" + Xr.test(a.X)
      );
    };
  var us = function (a) {
      return rq(a, Q.g.Rb, V(a.o, Q.g.Rb)) || ts(a);
    },
    ts = function (a) {
      return T(86) && rq(a, "google_ng", !1) ? !0 : !!rq(a, "google_ono", !1);
    },
    vs = function (a) {
      if (a.metadata.is_merchant_center || !Mj(a.o)) return !1;
      if (!V(a.o, Q.g.gd)) {
        var b = V(a.o, Q.g.uc);
        return !0 === b || "true" === b;
      }
      return !0;
    },
    ws = function (a) {
      var b = a.metadata.user_data;
      if (Va(b)) return b;
    },
    xs = function (a, b) {
      var c = rq(a, Q.g.Rd, a.o.D[Q.g.Rd]);
      if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName];
    },
    ys = function (a, b, c) {
      a.m[Q.g.ke] || (a.m[Q.g.ke] = {});
      a.m[Q.g.ke][b] = c;
    };
  var zs = {
    Ek: Number("") || 500,
    sk: Number("") || 5e3,
    Ui: Number("20") || 10,
    Uj: Number("") || 5e3,
  };
  function As(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var Bs = function (a, b) {
    var c;
    return c;
  };
  var Cs = "https://" + xi.Dd,
    Ds = Cs + "/gtm/static/",
    Es = Number("") || 5,
    Fs = Number("") || 50,
    Gs = Cs,
    Hs = Ds,
    Is = !1,
    Js = 0,
    Ks = qb();
  function Ws() {
    var a = !1;
    return a;
  }
  function Xs(a) {
    var b = Math.round(zb());
  }
  function Zs(a, b, c) {}
  function Ts(a, b, c, d) {}
  function Ms(a, b, c, d, e) {}
  function $s(a, b, c, d, e) {}
  function at(a, b, c, d) {}
  function Ys() {}
  function bt(a) {
    var b = {},
      c = ["tv.1"],
      d = 0;
    var u = c.join("~");
    return { X: b, Lf: u };
  }
  function ct(a) {
    var b;
    if (Uj) {
      var c;
      b = !!(null == a
        ? 0
        : null == (c = a.eventMetadata.is_sw_selected)
        ? 0
        : c[0]);
    } else b = T(64) && T(73) && !Kj();
    return b;
  }
  function Ns(a) {
    var b;
    if (Uj) {
      var c;
      b = !!(null == a
        ? 0
        : null == (c = a.eventMetadata.is_sw_selected)
        ? 0
        : c[1]);
    } else b = T(62);
    return b;
  }
  var dt = void 0;
  function et(a) {
    var b = [];
    return b;
  }
  var ft = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  yc();
  Dm() || vc("iPod");
  vc("iPad");
  !vc("Android") || zc() || yc() || xc() || vc("Silk");
  zc();
  !vc("Safari") ||
    zc() ||
    (wc() ? 0 : vc("Coast")) ||
    xc() ||
    (wc() ? 0 : vc("Edge")) ||
    (wc() ? uc("Microsoft Edge") : vc("Edg/")) ||
    (wc() ? uc("Opera") : vc("OPR")) ||
    yc() ||
    vc("Silk") ||
    vc("Android") ||
    Em();
  var gt = {},
    ht = null,
    it = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ht) {
        ht = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = g.concat(h[m].split(""));
          gt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ht[q] && (ht[q] = p);
          }
        }
      }
      for (
        var r = gt[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          E = r[((x & 3) << 4) | (y >> 4)],
          F = r[((y & 15) << 2) | (B >> 6)],
          C = r[B & 63];
        t[w++] = "" + A + E + F + C;
      }
      var H = 0,
        N = u;
      switch (b.length - v) {
        case 2:
          (H = b[v + 1]), (N = r[(H & 15) << 2] || u);
        case 1:
          var O = b[v];
          t[w] = "" + r[O >> 2] + r[((O & 3) << 4) | (H >> 4)] + N + u;
      }
      return t.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var jt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function kt(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function lt() {
    var a = D.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function mt() {
    var a, b;
    return null !=
      (b = null == (a = D.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function nt(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function ot() {
    var a = D;
    if (!nt(a)) return null;
    var b = kt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(jt)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var pt,
    qt = function () {
      if (nt(D) && ((pt = zb()), !mt())) {
        var a = ot();
        a &&
          (a.then(function () {
            M(95);
          }),
          a.catch(function () {
            M(96);
          }));
      }
    },
    st = function (a) {
      var b = rt.Am,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (m) {}
        },
        d = lt();
      if (d) c(d);
      else {
        var e = mt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = D.setTimeout(function () {
            c.De || ((c.De = !0), M(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.De || ((c.De = !0), M(104), D.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.De || ((c.De = !0), M(105), D.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    tt = function (a, b) {
      a &&
        ((b.m[Q.g.kf] = a.architecture),
        (b.m[Q.g.lf] = a.bitness),
        a.fullVersionList &&
          (b.m[Q.g.nf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.m[Q.g.pf] = a.mobile ? "1" : "0"),
        (b.m[Q.g.qf] = a.model),
        (b.m[Q.g.rf] = a.platform),
        (b.m[Q.g.tf] = a.platformVersion),
        (b.m[Q.g.uf] = a.wow64 ? "1" : "0"));
    };
  function ut() {
    return "attribution-reporting";
  }
  function vt(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var wt = !1;
  function xt() {
    if (vt("join-ad-interest-group") && nb(Gc.joinAdInterestGroup)) return !0;
    wt || (Mm(""), (wt = !0));
    return vt("join-ad-interest-group") && nb(Gc.joinAdInterestGroup);
  }
  function zt(a, b) {
    var c = void 0 == Lb[3] ? 1 : Lb[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (1 === c) {
        var f = G.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(G.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = G.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var h = g,
      m =
        ((null == h ? void 0 : h.length) || 0) >=
        (void 0 == Lb[2] ? 50 : Lb[2]),
      n;
    if ((n = 1 <= e.length)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p && zb() - p < (void 0 == Lb[1] ? 6e4 : Lb[1])
        ? (ib("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (1 === c)
        if (1 <= e.length) At(e[0]);
        else {
          if (m) {
            ib("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? At(e[0]) : m && At(h[0]);
      Qc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: zb() }
      );
    }
  }
  function At(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Bt() {
    return "https://td.doubleclick.net";
  }
  var ru = function (a, b) {
      var c = {},
        d = function (f, g) {
          var h;
          h = !0 === g ? "1" : !1 === g ? "0" : encodeURIComponent(String(g));
          c[f] = h;
        };
      z(a.m, function (f, g) {
        var h = qu[f];
        h &&
          void 0 !== g &&
          "" !== g &&
          (!a.metadata.redact_click_ids ||
            (f !== Q.g.Ed && f !== Q.g.Ld && f !== Q.g.Re && f !== Q.g.cg) ||
            (g = "0"),
          d(h, g));
      });
      d("gtm", On(a.metadata.source_canonical_id));
      Cn() && d("gcs", Dn());
      d("gcd", Hn(a.o));
      Kn() && d("dma_cps", In());
      d("dma", Jn());
      fn(on()) && d("tcfd", Ln());
      Qi.m && d("tag_exp", Qi.m);
      if (a.metadata.add_tag_timing) {
        d("tft", zb());
        var e = dd();
        void 0 !== e && d("tfd", Math.round(e));
      }
      T(16) && d("apve", T(17) ? "1" : "0");
      b(c);
    },
    su = function (a) {
      ru(a, function (b) {
        var c = [];
        z(b, function (f, g) {
          c.push(f + "=" + g);
        });
        var d;
        d =
          "page_view" === a.metadata.hit_type
            ? Nj(
                W(T(41) ? [Q.g.M, Q.g.O] : [Q.g.M])
                  ? "https://www.google.com"
                  : "https://pagead2.googlesyndication.com",
                !0
              ) + "/ccm/collect"
            : void 0;
        var e = d + "?" + c.join("&");
        Zc(e);
        if (nb(a.o.onSuccess)) a.o.onSuccess();
      });
    },
    tu = {},
    qu =
      ((tu[Q.g.ic] = "gcu"),
      (tu[Q.g.hb] = "gclgb"),
      (tu[Q.g.Pa] = "gclaw"),
      (tu[Q.g.hi] = "gad_source"),
      (tu[Q.g.Ed] = "gclid"),
      (tu[Q.g.ii] = "gclsrc"),
      (tu[Q.g.cg] = "gbraid"),
      (tu[Q.g.Re] = "wbraid"),
      (tu[Q.g.Cb] = "auid"),
      (tu[Q.g.ki] = "rnd"),
      (tu[Q.g.oi] = "ncl"),
      (tu[Q.g.eg] = "gcldc"),
      (tu[Q.g.Ld] = "dclid"),
      (tu[Q.g.lb] = "edid"),
      (tu[Q.g.Yc] = "en"),
      (tu[Q.g.wc] = "gdpr"),
      (tu[Q.g.pb] = "gdid"),
      (tu[Q.g.Wd] = "frm"),
      (tu[Q.g.bd] = "lps"),
      (tu[Q.g.Yd] = "did"),
      (tu[Q.g.wa] = "dl"),
      (tu[Q.g.Ba] = "dr"),
      (tu[Q.g.xc] = "gdpr_consent"),
      (tu[Q.g.de] = "us_privacy"),
      (tu[Q.g.Jb] = "npa"),
      tu);
  var uu = {
    K: {
      Nh: "ads_conversion_hit",
      Cd: "container_execute_start",
      Qh: "container_setup_end",
      Tf: "container_setup_start",
      Oh: "container_blocking_end",
      Ph: "container_execute_end",
      Rh: "container_yield_end",
      Uf: "container_yield_start",
      Ni: "event_execute_end",
      Mi: "event_evaluation_end",
      Jg: "event_evaluation_start",
      Oi: "event_setup_end",
      ee: "event_setup_start",
      Pi: "ga4_conversion_hit",
      he: "page_load",
      Wm: "pageview",
      Yb: "snippet_load",
      dj: "tag_callback_error",
      ej: "tag_callback_failure",
      fj: "tag_callback_success",
      gj: "tag_execute_end",
      nd: "tag_execute_start",
    },
  };
  function vu() {
    function a(c, d) {
      var e = jb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var wu = !1;
  var dv = function (a, b) {},
    ev = function (a, b) {},
    fv = function (a, b) {},
    gv = function (a, b) {},
    hv = function () {
      var a = {};
      return a;
    },
    Wu = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    iv = function () {},
    jv = function (a, b) {},
    kv = function (a, b, c) {},
    lv = function () {};
  var mv = function (a, b) {
    var c = D,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var nv = function (a, b, c) {
    var d = Hm(a, "fmt");
    if (b) {
      var e = Hm(a, "random"),
        f = Hm(a, "label") || "";
      if (!e) return !1;
      var g = it(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!mv(g, b)) return !1;
    }
    d && 4 != d && (a = Jm(a, "rfmt", d));
    var h = Jm(a, "fmt", 4);
    Oc(
      h,
      function () {
        D.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((D.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      G.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  function Ev(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var gw = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      aw().addRestriction(0, a, b, c);
    },
    hw = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      aw().addRestriction(1, a, b, c);
    },
    iw = function () {
      var a = ck();
      return aw().getRestrictions(1, a);
    },
    jw = function () {
      this.m = {};
      this.D = {};
    },
    kw = function (a, b) {
      var c = a.m[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.m[b] = c));
      return c;
    };
  jw.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.D[b]) {
      var e = kw(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  jw.prototype.getRestrictions = function (a, b) {
    var c = kw(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        oa(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        oa(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, g;
      return [].concat(
        oa(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        oa(
          (null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  jw.prototype.getExternalRestrictions = function (a, b) {
    var c = kw(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  jw.prototype.removeExternalRestrictions = function (a) {
    var b = kw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function aw() {
    var a = yi.r;
    a || ((a = new jw()), (yi.r = a));
    return a;
  }
  var lw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    mw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    nw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ow =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    qw = function (a) {
      var b = Xi("gtm.allowlist") || Xi("gtm.whitelist");
      b && M(9);
      Di && (b = ["google", "gtagfl", "lcl", "zone"]);
      lw.test(D.location && D.location.hostname) &&
        (Di
          ? M(116)
          : (M(117),
            pw &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Db(wb(b), mw),
        d = Xi("gtm.blocklist") || Xi("gtm.blacklist");
      d || ((d = Xi("tagTypeBlacklist")) && M(3));
      d ? M(8) : (d = []);
      lw.test(D.location && D.location.hostname) &&
        ((d = wb(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= wb(d).indexOf("google") && M(2);
      var e = d && Db(wb(d), nw),
        f = {};
      return function (g) {
        var h = g && g[We.na];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var m = Ni[h] || [],
          n = T(10) ? !0 : a(h, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      M(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = sb(e, m || []);
            u && M(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = sb(e, ow));
        return (f[h] = v);
      };
    },
    pw = !1;
  pw = !0;
  var rw = function () {
    Uj &&
      gw(ck(), function (a) {
        var b = Gf(a.entityId),
          c;
        if (Lf(b)) {
          var d = b[We.na];
          if (!d) throw "Error: No function name given for function call.";
          var e = yf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Ev(b[We.na], 4);
        return c;
      });
  };
  var tw = function (a, b, c, d, e) {
      if (!sw()) {
        var f = d.siloed ? Wj(a) : a;
        if (!lk(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + xi.Ta,
            h = 0 === a.indexOf("GTM-");
          h || (g += "&cx=c");
          T(57) && (g += "&gtm=" + On());
          var m = Lj();
          m && (g += "&sign=" + xi.Bf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = Kj() ? Jj(b, n + g) : void 0;
          if (!p) {
            var q = xi.Dd + n;
            m && Ic && h
              ? ((q = Ic.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (p = er("https://", "http://", q + g)))
              : (p = Qi.D ? Ri() + n + g : er("https://", "http://", q + g));
          }
          d.siloed && nk({ ctid: f, isDestination: !1 });
          var r = ek();
          Qj().container[f] = { state: 1, context: d, parent: r };
          Rj({ ctid: f, isDestination: !1 }, e);
          Oc(p);
        }
      }
    },
    uw = function (a, b, c, d) {
      if (!sw()) {
        var e = c.siloed ? Wj(a) : a;
        if (!mk(e))
          if (!c.siloed && ok())
            (Qj().destination[e] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: ek(),
            }),
              Rj({ ctid: e, isDestination: !0 }, d),
              M(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              xi.Ta +
              "&cx=c";
            T(57) && (f += "&gtm=" + On());
            Lj() && (f += "&sign=" + xi.Bf);
            var g = Kj() ? Jj(b, f) : void 0;
            g || (g = Qi.D ? Ri() + f : er("https://", "http://", xi.Dd + f));
            c.siloed && nk({ ctid: e, isDestination: !0 });
            Qj().destination[e] = { state: 1, context: c, parent: ek() };
            Rj({ ctid: e, isDestination: !0 }, d);
            Oc(g);
          }
      }
    };
  function sw() {
    if (Mn()) {
      return !0;
    }
    return !1;
  }
  var vw = !1,
    ww = 0,
    xw = [];
  function yw(a) {
    if (!vw) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        vw = !0;
        for (var e = 0; e < xw.length; e++) I(xw[e]);
      }
      xw.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function zw() {
    if (!vw && 140 > ww) {
      ww++;
      try {
        G.documentElement.doScroll("left"), yw();
      } catch (a) {
        D.setTimeout(zw, 50);
      }
    }
  }
  var Aw = function (a) {
    vw ? a() : xw.push(a);
  };
  var Bw = function () {
    this.J = 0;
    this.m = {};
  };
  Bw.prototype.addListener = function (a, b, c) {
    var d = ++this.J;
    this.m[a] = this.m[a] || {};
    this.m[a][String(d)] = { listener: b, zb: c };
    return d;
  };
  Bw.prototype.D = function (a, b) {
    var c = this.m[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Bw.prototype.F = function (a, b) {
    var c = [];
    z(this.m[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.zb || 0 <= b.indexOf(e.zb)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Cw = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: bk(),
    };
  };
  var Ew = function (a, b) {
      this.m = !1;
      this.J = [];
      this.P = { tags: [] };
      this.Z = !1;
      this.D = this.F = 0;
      Dw(this, a, b);
    },
    Fw = function (a, b, c, d) {
      if (Ai.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Va(d) && (e = k(d, e));
      e.id = c;
      e.status = "timeout";
      return a.P.tags.push(e) - 1;
    },
    Gw = function (a, b, c, d) {
      var e = a.P.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Hw = function (a) {
      if (!a.m) {
        for (var b = a.J, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.J.length = 0;
      }
    },
    Dw = function (a, b, c) {
      void 0 !== b && a.Df(b);
      c &&
        D.setTimeout(function () {
          return Hw(a);
        }, Number(c));
    };
  Ew.prototype.Df = function (a) {
    var b = this,
      c = Bb(function () {
        return I(function () {
          a(bk(), b.P);
        });
      });
    this.m ? c() : this.J.push(c);
  };
  var Iw = function (a) {
      a.F++;
      return Bb(function () {
        a.D++;
        a.Z && a.D >= a.F && Hw(a);
      });
    },
    Jw = function (a) {
      a.Z = !0;
      a.D >= a.F && Hw(a);
    };
  var Kw = {},
    Mw = function () {
      return D[Lw()];
    };
  function Lw() {
    return D.GoogleAnalyticsObject || "ga";
  }
  var Pw = function () {
      var a = bk();
    },
    Qw = function (a, b) {
      return function () {
        var c = Mw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Vw = ["es", "1"],
    Ww = {},
    Xw = {};
  function Yw(a, b) {
    if (yk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Ww[a] = [
        ["e", c],
        ["eid", a],
      ];
      Ik(a);
    }
  }
  function Zw(a) {
    var b = a.eventId,
      c = a.Ab;
    if (!Ww[b]) return [];
    var d = [];
    Xw[b] || d.push(Vw);
    d.push.apply(d, oa(Ww[b]));
    c && (Xw[b] = !0);
    return d;
  }
  var $w = {},
    ax = {},
    bx = {};
  function cx(a, b, c, d) {
    yk &&
      T(67) &&
      ((void 0 === d ? 0 : d)
        ? ((bx[b] = bx[b] || 0), ++bx[b])
        : void 0 !== c
        ? ((ax[a] = ax[a] || {}), (ax[a][b] = Math.round(c)))
        : (($w[a] = $w[a] || {}), ($w[a][b] = ($w[a][b] || 0) + 1)));
  }
  function dx(a) {
    var b = a.eventId,
      c = a.Ab,
      d = $w[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete $w[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function ex(a) {
    var b = a.eventId,
      c = a.Ab,
      d = ax[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ax[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function fx() {
    for (
      var a = [], b = la(Object.keys(bx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + bx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var gx = {},
    hx = {};
  function ix(a, b, c) {
    if (yk && b) {
      var d = Oj(b);
      gx[a] = gx[a] || [];
      gx[a].push(c + d);
      var e = (Lf(b) ? "1" : "2") + d;
      hx[a] = hx[a] || [];
      hx[a].push(e);
      Ik(a);
    }
  }
  function jx(a) {
    var b = a.eventId,
      c = a.Ab,
      d = [],
      e = gx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = hx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete gx[b], delete hx[b]);
    return d;
  }
  function kx(a, b, c, d) {
    var e = wf[a],
      f = lx(a, b, c, d);
    if (!f) return null;
    var g = If(e[We.bj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = kx(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.sj ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function lx(a, b, c, d) {
    function e() {
      if (f[We.wk]) h();
      else {
        var w = Jf(f, c, []),
          x = w[We.Rj];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!W(x[y])) {
              h();
              return;
            }
        var B = Fw(c.Zb, String(f[We.na]), Number(f[We.me]), w[We.xk]),
          A = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var C = zb() - F;
            ix(c.id, wf[a], "5");
            Gw(c.Zb, B, "success", C);
            T(58) && kv(c, f, uu.K.fj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var C = zb() - F;
            ix(c.id, wf[a], "6");
            Gw(c.Zb, B, "failure", C);
            T(58) && kv(c, f, uu.K.ej);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ix(c.id, f, "1");
        var E = function () {
          oj(3);
          var C = zb() - F;
          ix(c.id, f, "7");
          Gw(c.Zb, B, "exception", C);
          T(58) && kv(c, f, uu.K.dj);
          A || ((A = !0), h());
        };
        T(58) && jv(c, f);
        var F = zb();
        try {
          Hf(w, { event: c, index: a, type: 1 });
        } catch (C) {
          E(C);
        }
        T(58) && kv(c, f, uu.K.gj);
      }
    }
    var f = wf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = If(f[We.ij], c, []);
    if (n && n.length) {
      var p = n[0],
        q = kx(p.index, { onSuccess: g, onFailure: h, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.sj ? m : q;
    }
    if (f[We.Vi] || f[We.zk]) {
      var r = f[We.Vi] ? xf : c.vm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Bb(e);
        var v = mx(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function mx(a, b, c) {
    var d = [],
      e = [];
    b[a] = nx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ox;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = px;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function nx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ox(a) {
    a();
  }
  function px(a, b) {
    b();
  }
  var rx = function (a, b) {
      return 1 === arguments.length ? qx("set", a) : qx("set", a, b);
    },
    sx = function (a, b) {
      return 1 === arguments.length ? qx("config", a) : qx("config", a, b);
    },
    tx = function (a, b, c) {
      c = c || {};
      c[Q.g.Vb] = a;
      return qx("event", b, c);
    };
  function qx(a) {
    return arguments;
  }
  var ux = function () {
    this.m = [];
    this.D = [];
  };
  ux.prototype.enqueue = function (a, b, c) {
    var d = this.m.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.m.push(f);
    for (var g = 0; g < this.D.length; g++)
      try {
        this.D[g](f);
      } catch (h) {}
  };
  ux.prototype.listen = function (a) {
    this.D.push(a);
  };
  ux.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  ux.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.m.length; d++) {
      var e = this.m[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.m = c;
    return b;
  };
  var wx = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = $f.canonicalContainerId;
      vx().enqueue(a, b, c);
    },
    yx = function () {
      var a = xx;
      vx().listen(a);
    };
  function vx() {
    var a = yi.mb;
    a || ((a = new ux()), (yi.mb = a));
    return a;
  }
  var Gx = function (a) {
      var b = yi.zones;
      return b
        ? b.getIsAllowedFn(Xj(), a)
        : function () {
            return !0;
          };
    },
    Hx = function () {
      hw(ck(), function (a) {
        var b = a.originalEventData["gtm.uniqueEventId"],
          c = yi.zones;
        return c ? c.isActive(Xj(), b) : !0;
      });
      gw(ck(), function (a) {
        var b = a.entityId,
          c = a.securityGroups;
        return Gx(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
      });
    };
  var Kx = function (a, b) {
    for (var c = [], d = 0; d < wf.length; d++)
      if (a[d]) {
        var e = wf[d];
        var f = Iw(b.Zb);
        try {
          var g = kx(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = e[We.na];
            if (!h) throw "Error: No function name given for function call.";
            var m = yf[h];
            c.push({
              Lj: d,
              Cj: (m ? m.priorityOverride || 0 : 0) || Ev(e[We.na], 1) || 0,
              execute: g,
            });
          } else Ix(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Jx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  var Mx = function (a, b) {
    if (!Lx) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Lx.F(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Iw(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Jx(a, b) {
    var c,
      d = b.Cj,
      e = a.Cj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Lj,
        h = b.Lj;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Ix(a, b) {
    if (yk) {
      var c = function (d) {
        var e = b.isBlocked(wf[d]) ? "3" : "4",
          f = If(wf[d][We.bj], b, []);
        f && f.length && c(f[0].index);
        ix(b.id, wf[d], e);
        var g = If(wf[d][We.ij], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Nx = !1,
    Lx;
  var Ox = function () {
    Lx || (Lx = new Bw());
    return Lx;
  };
  var Tx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(58)) {
    }
    if ("gtm.js" === d) {
      if (Nx) return !1;
      Nx = !0;
    }
    var e,
      f = !1,
      g = iw(),
      h = k(a);
    if (
      g.every(function (u) {
        return u({ originalEventData: h });
      })
    )
      e = Gx(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Gx(Number.MAX_SAFE_INTEGER);
    }
    Yw(b, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Px(e, h, f),
        vm: [],
        logMacroError: function () {
          M(6);
          oj(0);
        },
        cachedModelValues: Qx(),
        Zb: new Ew(function () {
          if (T(58)) {
          }
          m && m.apply(m, [].slice.call(arguments, 0));
        }, n),
        originalEventData: h,
      };
    T(67) && yk && (p.reportMacroDiscrepancy = cx);
    T(58) && fv(p.id, p.name);
    var q = Tf(p);
    T(58) && gv(p.id, p.name);
    f && (q = Rx(q));
    if (T(58)) {
    }
    var r = Kx(q, p),
      t = !1;
    t = Mx(a, p.Zb);
    Jw(p.Zb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Pw();
    return Sx(q, r) || t;
  };
  function Qx() {
    var a = {};
    a.event = bj("event", 1);
    a.ecommerce = bj("ecommerce", 1);
    a.gtm = bj("gtm");
    a.eventModel = bj("eventModel");
    return a;
  }
  function Px(a, b, c) {
    var d = qw(a);
    return function (e) {
      if (d(e)) return !0;
      var f = e && e[We.na];
      if (!f || "string" != typeof f) return !0;
      f = f.replace(/^_*/, "");
      var g,
        h = ck();
      g = aw().getRestrictions(0, h);
      var m = b;
      c && ((m = k(b)), (m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var n = Ni[f] || [], p = la(g), q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = q.value;
        try {
          if (!r({ entityId: f, securityGroups: n, originalEventData: m }))
            return !0;
        } catch (t) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Rx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(wf[c][We.na]);
        if (zi[d] || void 0 !== wf[c][We.Ak] || Ev(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Sx(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && wf[c] && !Ai[String(wf[c][We.na])]) return !0;
    return !1;
  }
  var Wf;
  var Ux = {},
    Vx = {},
    Wx = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { zh: void 0, hh: void 0 }, f++
      ) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (((e.zh = Gl(g, b)), e.zh)) {
            var h = Zj();
            pb(
              h,
              (function (r) {
                return function (t) {
                  return r.zh.ia === t;
                };
              })(e)
            )
              ? c.push(g)
              : d.push(g);
          }
        } else {
          var m = Ux[g] || [];
          e.hh = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.hh[t] = !0);
              };
            })(e)
          );
          for (var n = Xj(), p = 0; p < n.length; p++)
            if (e.hh[n[p]]) {
              c = c.concat(Zj());
              break;
            }
          var q = Vx[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Ll: c, Pl: d };
    },
    Xx = function (a) {
      z(Ux, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yx = function (a) {
      z(Vx, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zx = "HA GF G UA AW DC MC".split(" "),
    $x = !1,
    ay = !1,
    by = !1,
    cy = !1;
  function dy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Oi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var ey = void 0,
    fy = void 0;
  function gy(a, b, c) {
    var d = k(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = k(b);
    k(c, e);
    wx(sx(Xj()[0], e), a.eventId, d);
  }
  function hy(a) {
    for (var b = la([Q.g.gd, Q.g.Hb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || nm.F[d];
      if (e) return e;
    }
  }
  var iy = [
      Q.g.gd,
      Q.g.Hb,
      Q.g.uc,
      Q.g.jb,
      Q.g.rb,
      Q.g.Na,
      Q.g.sa,
      Q.g.La,
      Q.g.Qa,
      Q.g.Qb,
    ],
    jy = {
      config: function (a, b) {
        var c = dy(a, b);
        if (!(2 > a.length) && l(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Va(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Gl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!Tj.fe) {
                var m = dk(ek());
                if (qk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = { Vl: dk(n), Kl: p };
                  break a;
                }
              }
              h = void 0;
            }
            var q = h;
            q && ((f = q.Vl), (g = q.Kl));
            Yw(c.eventId, "gtag.config");
            var r = e.ia,
              t = e.id !== r;
            if (t ? -1 === Zj().indexOf(r) : -1 === Xj().indexOf(r)) {
              if (!b.inheritParentConfig && !d[Q.g.Eb]) {
                var u = hy(d);
                if (t)
                  uw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var v = d;
                  ey ? gy(b, v, ey) : fy || (fy = k(v));
                } else
                  tw(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (M(128), g && M(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                fy
                  ? (gy(b, fy, x), (w = !1))
                  : ((!x[Q.g.Wb] && Ci && ey) || (ey = k(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!by && ((by = !0), ay))
                for (var B = la(iy), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    Tk("erc");
                    break;
                  }
              if (Ci && !t && !d[Q.g.Wb]) {
                var E = cy;
                cy = !0;
                if (E) return;
              }
              $x || M(43);
              if (!b.noTargetGroup)
                if (t) {
                  Yx(e.id);
                  var F = e.id,
                    C = d[Q.g.Vd] || "default";
                  C = String(C).split(",");
                  for (var H = 0; H < C.length; H++) {
                    var N = Vx[C[H]] || [];
                    Vx[C[H]] = N;
                    0 > N.indexOf(F) && N.push(F);
                  }
                } else {
                  Xx(e.id);
                  var O = e.id,
                    U = d[Q.g.Vd] || "default";
                  U = U.toString().split(",");
                  for (var X = 0; X < U.length; X++) {
                    var P = Ux[U[X]] || [];
                    Ux[U[X]] = P;
                    0 > P.indexOf(O) && P.push(O);
                  }
                }
              delete d[Q.g.Vd];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") ||
                (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete d[Q.g.Xc];
              for (var ma = t ? [e.id] : Zj(), ka = 0; ka < ma.length; ka++) {
                var da = d,
                  Ba = ma[ka],
                  Da = k(b),
                  ya = Gl(Ba, Da.isGtmEvent);
                ya && nm.push("config", [da], ya, Da);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = dy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.O] && M(139), e[Q.g.xa] && M(140));
          "default" === d
            ? vl(e)
            : "update" === d
            ? wl(e, c)
            : "declare" === d && b.fromContainerExecution && ul(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && l(c)) {
          var d;
          if (2 < a.length) {
            if ((!Va(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = k(e)),
            e[Q.g.Xc] && (g.eventCallback = e[Q.g.Xc]),
            e[Q.g.Sd] && (g.eventTimeout = e[Q.g.Sd]));
          var h = dy(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[Q.g.Vb];
          void 0 === r &&
            ((r = Xi(Q.g.Vb, 2)), void 0 === r && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Wx(t, b.isGtmEvent),
              v = u.Ll,
              w = u.Pl;
            if (w.length)
              for (var x = hy(q), y = 0; y < w.length; y++) {
                var B = Gl(w[y], b.isGtmEvent);
                B &&
                  uw(B.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Il(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var E;
            !A.length ||
              (null == (E = b.eventMetadata) ? 0 : E.em_event) ||
              (ay = !0);
            Yw(m, c);
            for (var F = [], C = 0; C < A.length; C++) {
              var H = A[C],
                N = k(b);
              if (-1 !== Zx.indexOf(hk(H.prefix))) {
                var O = k(d),
                  U = N.eventMetadata || {};
                U.hasOwnProperty("is_external_event") ||
                  (U.is_external_event = !N.fromContainerExecution);
                N.eventMetadata = U;
                delete O[Q.g.Xc];
                pm(c, O, H.id, N);
              }
              F.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            0 < A.length
              ? (g.eventModel[Q.g.Vb] = F.join())
              : delete g.eventModel[Q.g.Vb];
            $x || M(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[Q.g.Sb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && l(a[1]) && l(a[2]) && nb(a[3])) {
          var c = Gl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            $x || M(43);
            var f = hy();
            if (
              !pb(Zj(), function (h) {
                return c.ia === h;
              })
            )
              uw(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Zx.indexOf(hk(c.prefix))) {
              dy(a, b);
              var g = {};
              pl(k(((g[Q.g.ob] = d), (g[Q.g.Db] = e), g)));
              qm(
                d,
                function (h) {
                  I(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          $x = !0;
          var c = dy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && l(a[1]) && nb(a[2])) {
          if ((Xf(a[1], a[2]), M(74), "all" === a[1])) {
            M(75);
            var b = !1;
            try {
              b = a[2](bk(), "unknown", {});
            } catch (c) {}
            b || M(76);
          }
        } else M(73);
      },
      set: function (a, b) {
        var c;
        2 == a.length && Va(a[1])
          ? (c = k(a[1]))
          : 3 == a.length &&
            l(a[1]) &&
            ((c = {}),
            Va(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = k(a[2]))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = dy(a, b),
            e = d.eventId,
            f = d.priorityId;
          k(c);
          var g = k(c);
          nm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ky = { policy: !0 };
  var my = function (a) {
    if (ly(a)) return a;
    this.m = a;
  };
  my.prototype.getUntrustedMessageValue = function () {
    return this.m;
  };
  var ly = function (a) {
    return !a || "object" !== Ta(a) || Va(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  my.prototype.getUntrustedMessageValue = my.prototype.getUntrustedMessageValue;
  var ny = !1,
    oy = [];
  function py() {
    if (!ny) {
      ny = !0;
      for (var a = 0; a < oy.length; a++) I(oy[a]);
    }
  }
  var qy = function (a) {
    ny ? I(a) : oy.push(a);
  };
  var ry = 0,
    sy = {},
    ty = [],
    uy = [],
    vy = !1,
    wy = !1;
  function xy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var yy = function (a) {
      return D[xi.Ta].push(a);
    },
    zy = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return yy(a);
    },
    Ay = function (a, b) {
      if (!ob(b) || 0 > b) b = 0;
      var c = yi[xi.Ta],
        d = 0,
        e = !1,
        f = void 0;
      f = D.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (D.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function By(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      "_clear" !== e && (c && $i(e), $i(e, f));
    });
    Ki || (Ki = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Oi()), (a["gtm.uniqueEventId"] = d), $i("gtm.uniqueEventId", d));
    return Tx(a);
  }
  function Cy(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (tb(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Dy() {
    var a;
    if (uy.length) a = uy.shift();
    else if (ty.length) a = ty.shift();
    else return;
    var b;
    var c = a;
    if (vy || !Cy(c.message)) b = c;
    else {
      vy = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Oi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      ty.unshift(h, c);
      if (yk) {
        var m = $f.ctid;
        if (m) {
          var n,
            p = dk(ek());
          n = p && p.context;
          var q,
            r = Fj(D.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = $f.canonicalContainerId,
            w = Tj.fe;
          yk &&
            (Mk || (Mk = q),
            Nk.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Ey() {
    for (var a = !1, b; !wy && (b = Dy()); ) {
      wy = !0;
      delete Ui.eventModel;
      Wi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) wy = !1;
      else {
        e.fromContainerExecution && aj();
        try {
          if (nb(d))
            try {
              d.call(Yi);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Xi(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (tb(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = jy[d[0]];
                  if (q && (!e.fromContainerExecution || !ky[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = By(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Wi(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = sy[String(r)] || [], u = 0; u < t.length; u++)
              uy.push(Fy(t[u]));
            t.length && uy.sort(xy);
            delete sy[String(r)];
            r > ry && (ry = r);
          }
          wy = !1;
        }
      }
    }
    return !a;
  }
  function Gy() {
    if (T(58)) {
      var a = Hy();
    }
    var b = Ey();
    if (T(58)) {
    }
    try {
      var c = bk(),
        d = D[xi.Ta].hide;
      if (d && void 0 !== d[c] && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && !0 === d[f]) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function xx(a) {
    if (ry < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      sy[b] = sy[b] || [];
      sy[b].push(a);
    } else
      uy.push(Fy(a)),
        uy.sort(xy),
        I(function () {
          wy || Ey();
        });
  }
  function Fy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Iy = function () {
      function a(f) {
        var g = {};
        if (ly(f)) {
          var h = f;
          f = ly(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Jc(xi.Ta, []),
        c = (yi[xi.Ta] = yi[xi.Ta] || {});
      !0 === c.pruned && M(83);
      sy = vx().get();
      yx();
      Aw(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      qy(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < yi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new my(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        ty.push.apply(ty, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (M(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Ey() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      ty.push.apply(ty, e);
      if (Hy()) {
        if (T(58)) {
        }
        I(Gy);
      }
    },
    Hy = function () {
      var a = !0;
      return a;
    };
  function Jy(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = zb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ky(a) {
    return a && 0 === a.indexOf("pending:") ? Jy(a.substr(8)) : !1;
  }

  var ez = function () {};
  var fz = function () {};
  fz.prototype.toString = function () {
    return "undefined";
  };
  var gz = new fz();
  function nz(a, b) {
    function c(g) {
      var h = Fj(g),
        m = Bj(h, "protocol"),
        n = Bj(h, "host", !0),
        p = Bj(h, "port"),
        q = Bj(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function oz(a) {
    return pz(a) ? 1 : 0;
  }
  function pz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = k(a, {});
        k({ arg1: c[d], any_of: void 0 }, e);
        if (oz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Cg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < yg.length; g++) {
                var h = yg[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return zg(b, c);
      case "_eq":
        return Dg(b, c);
      case "_ge":
        return Eg(b, c);
      case "_gt":
        return Gg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Fg(b, c);
      case "_lt":
        return Hg(b, c);
      case "_re":
        return Bg(b, c, a.ignore_case);
      case "_sw":
        return Ig(b, c);
      case "_um":
        return nz(b, c);
    }
    return !1;
  }
  function qz() {
    var a = [
      ["cv", "1"],
      ["rv", xi.Ng],
      [
        "tc",
        wf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    xi.je && a.push(["x", xi.je]);
    Qi.m && a.push(["tag_exp", Qi.m]);
    return a;
  }
  function rz() {
    var a = qj();
    return a.length ? [["exp_geo", a]] : [];
  }
  var sz;
  function tz() {
    try {
      null != sz || (sz = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = sz) ? 0 : a.length) ? [["exp_tz", sz]] : [];
  }
  function uz(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = ed().getEntriesByType("resource");
      } catch (g) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ("script" === f && e.name === a.scriptSource)
            return { im: d, jm: c };
          c[f] = 1 + (c[f] || 0);
        }
        M(146);
      } else M(145);
    }
  }
  function vz() {
    if (yk && T(70)) {
      var a = fk();
      if (!a) M(144);
      else if (a.canonicalContainerId) {
        var b = uz(a);
        if (b) {
          var c = !1;
          tk(function (d) {
            if (c) return [];
            d.Ab && (c = !0);
            d.Of();
            return [
              ["rtg", a.canonicalContainerId],
              ["rlo", b.im],
              ["slo", b.jm.script || 0],
            ];
          });
        }
      }
    }
  }
  var wz = function () {
      return !1;
    },
    xz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function yz() {
    var a = zz;
    return function (b, c, d) {
      var e = d && d.event;
      Az(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new ab();
      z(c, function (r, t) {
        var u = td(t, void 0, f);
        void 0 === u && void 0 !== t && M(44);
        g.set(r, u);
      });
      a.m.m.J = Qf();
      var h = {
        nj: dg(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Df:
          void 0 !== e
            ? function (r) {
                return e.Zb.Df(r);
              }
            : void 0,
        bc: function () {
          return b;
        },
        log: function () {},
        Zk: { index: d && d.index, type: d && d.type, name: d && d.name },
        hm: !!Ev(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (h.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (wz()) {
        var m = xz(),
          n = void 0,
          p = void 0;
        h.cb = {
          Jh: [],
          ne: {},
          vb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          th: wh(),
        };
        h.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, { level: r, source: p, message: u });
          }
        };
      }
      var q = Se(a, h, [b, g]);
      a.m.m.J = void 0;
      q instanceof Ha && "return" === q.m && (q = q.D);
      return ud(q, void 0, f);
    };
  }
  function Az(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    nb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    nb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function Bz(a, b) {
    var c = this;
  }
  Bz.R = "addConsentListener";
  var Cz;
  var Dz = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Cz)
        try {
          a[b]();
        } catch (c) {
          M(77);
        }
      else a[b]();
  };
  function Ez(a, b, c) {
    var d = this,
      e;
    K(
      this.getName(),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments
    ),
      Dz([
        function () {
          return L(d, "listen_data_layer", a);
        },
      ]),
      (e = Ox().addListener(a, ud(b), c));
    return e;
  }
  Ez.H = "internal.addDataLayerEventListener";
  function Fz(a, b, c) {}
  Fz.R = "addDocumentEventListener";
  function Gz(a, b, c, d) {}
  Gz.R = "addElementEventListener";
  function Hz(a) {
    return a.m.m;
  }
  function Iz(a) {}
  Iz.R = "addEventCallback";
  var Jz = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": cd(a, "className"),
        "gtm.elementId": a["for"] || Uc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || cd(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        cd(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Kz = function (a) {
      yi.hasOwnProperty("autoEventsSettings") || (yi.autoEventsSettings = {});
      var b = yi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Lz = function (a, b, c) {
      Kz(a)[b] = c;
    },
    Mz = function (a, b, c, d) {
      var e = Kz(a),
        f = Ab(e, b, d);
      e[b] = c(f);
    },
    Nz = function (a, b, c) {
      var d = Kz(a);
      return Ab(d, b, c);
    },
    Oz = function (a, b) {
      Nz(a, "init", !1) || (Lz(a, "init", !0), b());
    },
    Pz = function (a) {
      return "string" === typeof a ? a : String(Oi());
    };
  var Qz = ["input", "select", "textarea"],
    Rz = ["button", "hidden", "image", "reset", "submit"],
    Sz = function (a) {
      var b = a.tagName.toLowerCase();
      return 0 > Qz.indexOf(b) ||
        ("input" === b && 0 <= Rz.indexOf(a.type.toLowerCase()))
        ? !1
        : !0;
    },
    Tz = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : G.getElementById(a.form)
        : Yc(a, ["form"], 100);
    },
    Uz = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Sz(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  function Yz(a) {}
  Yz.H = "internal.addFormAbandonmentListener";
  function Zz(a, b, c, d) {}
  Zz.H = "internal.addFormData";
  var $z = {},
    aA = [],
    bA = {},
    cA = 0,
    dA = 0;
  var fA = function () {
      Sc(G, "change", function (a) {
        for (var b = 0; b < aA.length; b++) aA[b](a);
      });
      Sc(D, "pagehide", function () {
        eA();
      });
    },
    eA = function () {
      z(bA, function (a, b) {
        var c = $z[a];
        c &&
          z(b, function (d, e) {
            gA(e, c);
          });
      });
    },
    jA = function (a, b) {
      var c = "" + a;
      if ($z[c]) $z[c].push(b);
      else {
        var d = [b];
        $z[c] = d;
        var e = bA[c];
        e || ((e = {}), (bA[c] = e));
        aA.push(function (f) {
          var g = f.target;
          if (g) {
            var h = Tz(g);
            if (h) {
              var m = hA(h, "gtmFormInteractId", function () {
                  return cA++;
                }),
                n = hA(g, "gtmFormInteractFieldId", function () {
                  return dA++;
                }),
                p = e[m];
              p
                ? (p.Lb &&
                    (D.clearTimeout(p.Lb),
                    p.wb.dataset.gtmFormInteractFieldId !== n && gA(p, d)),
                  (p.wb = g),
                  iA(p, d, a))
                : ((e[m] = { form: h, wb: g, Ne: 0, Lb: null }),
                  iA(e[m], d, a));
            }
          }
        });
      }
    },
    gA = function (a, b) {
      var c = a.form,
        d = a.wb,
        e = Jz(c, "gtm.formInteract"),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] = c.getAttribute("name");
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldPosition"] = Uz(c, d, "gtmFormInteractFieldId");
      e["gtm.interactSequenceNumber"] = a.Ne;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] = d.getAttribute("name");
      e["gtm.interactedFormFieldType"] = d.getAttribute("type");
      for (var g = 0; g < b.length; g++) b[g](e);
      a.Ne++;
      a.Lb = null;
    },
    iA = function (a, b, c) {
      c
        ? (a.Lb = D.setTimeout(function () {
            gA(a, b);
          }, c))
        : gA(a, b);
    },
    hA = function (a, b, c) {
      var d = a.dataset[b];
      if (d) return d;
      d = String(c());
      return (a.dataset[b] = d);
    };
  function kA(a, b) {
    K(this.getName(), ["callback:!Fn", "options:?*"], arguments);
    var c = ud(b) || {},
      d = Number(c.interval);
    if (!d || 0 > d) d = 0;
    var e = ud(a),
      f;
    Nz("pix.fil", "init")
      ? (f = Nz("pix.fil", "reg"))
      : (fA(), (f = jA), Lz("pix.fil", "reg", jA), Lz("pix.fil", "init", !0));
    f(d, e);
  }
  kA.H = "internal.addFormInteractionListener";
  var mA = function (a, b, c) {
      var d = Jz(a, "gtm.formSubmit");
      d["gtm.interactedFormName"] = a.getAttribute("name");
      d["gtm.interactedFormLength"] = a.length;
      d["gtm.willOpenInCurrentWindow"] = !b && lA(a);
      c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
      var e = a.action;
      e && e.tagName && (e = a.cloneNode(!1).action);
      d["gtm.elementUrl"] = e;
      d["gtm.formCanceled"] = b;
      return d;
    },
    nA = function (a, b) {
      var c = Nz("pix.fsl", a ? "nv.mwt" : "mwt", 0);
      D.setTimeout(b, c);
    },
    oA = function (a, b, c, d, e) {
      var f = Nz("pix.fsl", c ? "nv.mwt" : "mwt", 0),
        g = Nz("pix.fsl", c ? "runIfCanceled" : "runIfUncanceled", []);
      if (!g.length) return !0;
      var h = mA(a, c, e);
      M(121);
      if ("https://www.facebook.com/tr/" === h["gtm.elementUrl"])
        return M(122), !0;
      if (d && f) {
        for (var m = Jb(b, g.length), n = 0; n < g.length; ++n) g[n](h, m);
        return m.done;
      }
      for (var p = 0; p < g.length; ++p) g[p](h, function () {});
      return !0;
    },
    pA = function () {
      var a = [],
        b = function (c) {
          return pb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          return d ? d.button : null;
        },
      };
    },
    lA = function (a) {
      var b = cd(a, "target");
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    qA = function () {
      var a = pA(),
        b = HTMLFormElement.prototype.submit;
      Sc(
        G,
        "click",
        function (c) {
          var d = c.target;
          if (
            d &&
            (d = Yc(d, ["button", "input"], 100)) &&
            ("submit" == d.type || "image" == d.type) &&
            d.name &&
            Uc(d, "value")
          ) {
            var e = Tz(d);
            e && a.store(e, d);
          }
        },
        !1
      );
      Sc(
        G,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || !1 === c.returnValue,
            f = lA(d) && !e,
            g = a.get(d),
            h = !0,
            m = function () {
              if (h) {
                var n,
                  p = {};
                g &&
                  ((n = G.createElement("input")),
                  (n.type = "hidden"),
                  (n.name = g.name),
                  (n.value = g.value),
                  d.appendChild(n),
                  g.hasAttribute("formaction") &&
                    ((p.action = d.getAttribute("action")),
                    Ec(d, fc(g.getAttribute("formaction")))),
                  g.hasAttribute("formenctype") &&
                    ((p.enctype = d.getAttribute("enctype")),
                    d.setAttribute("enctype", g.getAttribute("formenctype"))),
                  g.hasAttribute("formmethod") &&
                    ((p.method = d.getAttribute("method")),
                    d.setAttribute("method", g.getAttribute("formmethod"))),
                  g.hasAttribute("formvalidate") &&
                    ((p.validate = d.getAttribute("validate")),
                    d.setAttribute("validate", g.getAttribute("formvalidate"))),
                  g.hasAttribute("formtarget") &&
                    ((p.target = d.getAttribute("target")),
                    d.setAttribute("target", g.getAttribute("formtarget"))));
                b.call(d);
                n &&
                  (d.removeChild(n),
                  p.hasOwnProperty("action") && Ec(d, p.action),
                  p.hasOwnProperty("enctype") &&
                    d.setAttribute("enctype", p.enctype),
                  p.hasOwnProperty("method") &&
                    d.setAttribute("method", p.method),
                  p.hasOwnProperty("validate") &&
                    d.setAttribute("validate", p.validate),
                  p.hasOwnProperty("target") &&
                    d.setAttribute("target", p.target));
              }
            };
          if (oA(d, m, e, f, g)) return (h = !1), c.returnValue;
          nA(e, m);
          e || (c.preventDefault && c.preventDefault(), (c.returnValue = !1));
          return !1;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0,
          e = function () {
            d && b.call(c);
          };
        oA(c, e, !1, lA(c)) ? (b.call(c), (d = !1)) : nA(!1, e);
      };
    };
  function rA(a, b) {
    K(this.getName(), ["callback:!Fn", "options:?PixieMap"], arguments);
    var c = ud(b) || {},
      d = c.waitForCallbacks,
      e = c.waitForCallbacksTimeout,
      f = c.checkValidation;
    e = e && 0 < e ? e : 2e3;
    var g = ud(a);
    if (d) {
      var h = function (n) {
        return Math.max(e, n);
      };
      Mz("pix.fsl", "mwt", h, 0);
      f || Mz("pix.fsl", "nv.mwt", h, 0);
    }
    var m = function (n) {
      n.push(g);
      return n;
    };
    Mz("pix.fsl", "runIfUncanceled", m, []);
    f || Mz("pix.fsl", "runIfCanceled", m, []);
    Nz("pix.fsl", "init") || (qA(), Lz("pix.fsl", "init", !0));
  }
  rA.H = "internal.addFormSubmitListener";
  function wA(a) {}
  wA.H = "internal.addGaSendListener";
  function xA(a) {
    if (!a) return {};
    var b = a.Zk;
    return Cw(b.type, b.index, b.name);
  }
  function yA(a) {
    return a ? { originatingEntity: xA(a) } : {};
  }
  var zA = function (a, b) {
    this.tagId = a;
    this.pe = b;
  };
  function AA(a, b) {
    var c = this,
      d;
    return d;
  }
  AA.H = "internal.loadGoogleTag";
  function BA(a) {
    return new ld("", function (b) {
      var c = J(this, b);
      if (c instanceof ld)
        return new ld("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = k(Hz(this));
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return J(e, m);
            }),
            h = Ma(this.m);
          h.m = f;
          return c.ab.apply(c, [h].concat(oa(g)));
        });
    });
  }
  function CA(a, b, c) {
    var d = this;
  }
  CA.H = "internal.addGoogleTagRestriction";
  var DA = {},
    EA = [];
  var LA = function (a, b) {};
  LA.H = "internal.addHistoryChangeListener";
  function MA(a, b, c) {}
  MA.R = "addWindowEventListener";
  function NA(a, b) {
    return !0;
  }
  NA.R = "aliasInWindow";
  function OA(a, b, c) {}
  OA.H = "internal.appendRemoteConfigParameter";
  function PA() {
    var a = 2;
    return a;
  }
  function QA(a, b) {
    var c;
    return c;
  }
  QA.R = "callInWindow";
  function RA(a) {}
  RA.R = "callLater";
  function SA(a) {}
  SA.H = "callOnDomReady";
  function TA(a) {}
  TA.H = "callOnWindowLoad";
  function UA(a, b) {
    var c;
    return c;
  }
  UA.H = "internal.computeGtmParameter";
  function VA(a, b) {
    var c;
    var d = td(c, this.m, PA());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  VA.R = "copyFromDataLayer";
  function WA(a) {
    var b = void 0;
    return b;
  }
  WA.H = "internal.copyFromDataLayerCache";
  function XA(a) {
    var b;
    return b;
  }
  XA.R = "copyFromWindow";
  function YA(a) {
    var b = void 0;
    return td(b, this.m, PA());
  }
  YA.H = "internal.copyKeyFromWindow";
  function ZA(a, b) {
    var c;
    K(this.getName(), ["preHit:!PixieMap", "dustOptions:?PixieMap"], arguments);
    var d = ud(b) || {},
      e = ud(a, this.m, 1).tj(),
      f = e.o;
    d.omitEventContext && (f = jm(new Zl(e.o.eventId, e.o.priorityId)));
    var g = new qq(e.target, e.eventName, f);
    d.omitHitData || k(e.m, g.m);
    d.omitMetadata ? (g.metadata = {}) : k(e.metadata, g.metadata);
    g.isAborted = e.isAborted;
    c = td(rr(g), this.m, 1);
    return c;
  }
  ZA.H = "internal.copyPreHit";
  function $A(a, b) {
    var c = null,
      d = PA();
    return td(c, this.m, d);
  }
  $A.R = "createArgumentsQueue";
  function aB(a) {
    return td(
      function (c) {
        var d = Mw();
        if ("function" === typeof c)
          d(function () {
            c(function (f, g, h) {
              var m = Mw(),
                n = m && m.getByName && m.getByName(f);
              return zm(D.gaplugins.Linker, n).decorate(g, h);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[1 === e.length ? e[0] : e[1]] && d.apply(null, c);
        } else if ("isLoaded" === c) return !!d.loaded;
      },
      this.m,
      1
    );
  }
  aB.H = "internal.createGaCommandQueue";
  function bB(a) {
    return td(
      function () {
        if (!nb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.m,
      PA()
    );
  }
  bB.R = "createQueue";
  function cB(a, b) {
    var c = null;
    return c;
  }
  cB.H = "internal.createRegex";
  var dB = { dn: "shared_user_id", fn: "shared_user_id_requested" };
  function eB() {
    var a = {};
    return a;
  }
  function fB(a) {}
  fB.H = "internal.declareConsentState";
  function gB(a) {
    var b = "";
    return b;
  }
  gB.H = "internal.decodeUrlHtmlEntities";
  function hB(a, b, c) {
    var d;
    return d;
  }
  hB.H = "internal.decorateUrlWithGaCookies";
  function iB(a) {
    var b;
    L(this, "detect_user_provided_data", "auto");
    var c = ud(a) || {},
      d = rs({
        sd: !!c.includeSelector,
        ud: !!c.includeVisibility,
        ue: c.excludeElementSelectors,
        ub: c.fieldFilters,
        Nf: !!c.selectMultipleElements,
      });
    b = new ab();
    var e = new Za();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(jB(f[g]));
    void 0 !== d.Bh && b.set("preferredEmailElement", jB(d.Bh));
    b.set("status", d.status);
    return b;
  }
  var jB = function (a) {
    var b = new ab();
    b.set("userData", a.X);
    b.set("tagName", a.tagName);
    void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
    void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
    if (T(21)) {
    } else
      switch (a.type) {
        case "1":
          b.set("type", "email");
      }
    return b;
  };
  iB.H = "internal.detectUserProvidedData";
  function mB(a, b) {
    return b;
  }
  mB.H = "internal.enableAutoEventOnClick";
  var nB = !!D.MutationObserver,
    oB = void 0,
    pB = function (a) {
      if (!oB) {
        var b = function () {
          var c = G.body;
          if (c)
            if (nB)
              new MutationObserver(function () {
                for (var e = 0; e < oB.length; e++) I(oB[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Sc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  I(function () {
                    d = !1;
                    for (var e = 0; e < oB.length; e++) I(oB[e]);
                  }));
              });
            }
        };
        oB = [];
        G.body ? b() : I(b);
      }
      oB.push(a);
    },
    qB = function (a) {
      if (oB)
        for (var b = 0; b < oB.length; b++) oB[b] === a && oB.splice(b, 1);
    };
  function vB(a, b) {
    return b;
  }
  vB.H = "internal.enableAutoEventOnElementVisibility";
  function wB() {}
  wB.H = "internal.enableAutoEventOnError";
  var xB = {},
    yB = [],
    zB = {},
    AB = 0,
    BB = 0;
  var DB = function () {
      z(zB, function (a, b) {
        var c = xB[a];
        c &&
          z(b, function (d, e) {
            CB(e, c);
          });
      });
    },
    GB = function (a, b) {
      var c = "" + b;
      if (xB[c]) xB[c].push(a);
      else {
        var d = [a];
        xB[c] = d;
        var e = zB[c];
        e || ((e = {}), (zB[c] = e));
        yB.push(function (f) {
          var g = f.target;
          if (g) {
            var h = Tz(g);
            if (h) {
              var m = EB(h, "gtmFormInteractId", function () {
                  return AB++;
                }),
                n = EB(g, "gtmFormInteractFieldId", function () {
                  return BB++;
                });
              if (null !== m && null !== n) {
                var p = e[m];
                p
                  ? (p.Lb &&
                      (D.clearTimeout(p.Lb),
                      p.wb.getAttribute("data-gtm-form-interact-field-id") !==
                        n && CB(p, d)),
                    (p.wb = g),
                    FB(p, d, b))
                  : ((e[m] = { form: h, wb: g, Ne: 0, Lb: null }),
                    FB(e[m], d, b));
              }
            }
          }
        });
      }
    },
    CB = function (a, b) {
      var c = a.form,
        d = a.wb,
        e = Jz(c, "gtm.formInteract", b),
        f = c.action;
      f && f.tagName && (f = c.cloneNode(!1).action);
      e["gtm.elementUrl"] = f;
      e["gtm.interactedFormName"] =
        null != c.getAttribute("name") ? c.getAttribute("name") : void 0;
      e["gtm.interactedFormLength"] = c.length;
      e["gtm.interactedFormField"] = d;
      e["gtm.interactedFormFieldId"] = d.id;
      e["gtm.interactedFormFieldName"] =
        null != d.getAttribute("name") ? d.getAttribute("name") : void 0;
      e["gtm.interactedFormFieldPosition"] = Uz(c, d, "gtmFormInteractFieldId");
      e["gtm.interactedFormFieldType"] =
        null != d.getAttribute("type") ? d.getAttribute("type") : void 0;
      e["gtm.interactSequenceNumber"] = a.Ne;
      yy(e);
      a.Ne++;
      a.Lb = null;
    },
    FB = function (a, b, c) {
      c
        ? (a.Lb = D.setTimeout(function () {
            CB(a, b);
          }, c))
        : CB(a, b);
    },
    EB = function (a, b, c) {
      var d;
      try {
        if ((d = a.dataset[b])) return d;
        d = String(c());
        a.dataset[b] = d;
      } catch (e) {
        d = null;
      }
      return d;
    };
  function HB(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    Dz([
      function () {
        return L(c, "detect_form_interaction_events");
      },
    ]);
    b = Pz(b);
    var d = a && Number(a.get("interval"));
    (0 < d && isFinite(d)) || (d = 0);
    if (Nz("fil", "init", !1)) {
      var e = Nz("fil", "reg");
      if (e) e(b, d);
      else throw Error("Failed to register trigger: " + b);
    } else
      Sc(G, "change", function (f) {
        for (var g = 0; g < yB.length; g++) yB[g](f);
      }),
        Sc(D, "pagehide", function () {
          DB();
        }),
        GB(b, d),
        Lz("fil", "reg", GB),
        Lz("fil", "init", !0);
    return b;
  }
  HB.H = "internal.enableAutoEventOnFormInteraction";
  var IB = function (a, b, c, d, e) {
      var f = Nz("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? Nz("fsl", "nv.ids", []) : Nz("fsl", "ids", []);
      if (!g.length) return !0;
      var h = Jz(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      M(121);
      if ("https://www.facebook.com/tr/" === m) return M(122), !0;
      h["gtm.elementUrl"] = m;
      h["gtm.formCanceled"] = c;
      null != a.getAttribute("name") &&
        (h["gtm.interactedFormName"] = a.getAttribute("name"));
      e &&
        ((h["gtm.formSubmitElement"] = e),
        (h["gtm.formSubmitElementText"] = e.value));
      if (d && f) {
        if (!zy(h, Ay(b, f), f)) return !1;
      } else zy(h, function () {}, f || 2e3);
      return !0;
    },
    JB = function () {
      var a = [],
        b = function (c) {
          return pb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          if (d) return d.button;
        },
      };
    },
    KB = function (a) {
      var b = a.target;
      return b && "_self" !== b && "_parent" !== b && "_top" !== b ? !1 : !0;
    },
    LB = function () {
      var a = JB(),
        b = HTMLFormElement.prototype.submit;
      Sc(
        G,
        "click",
        function (c) {
          var d = c.target;
          if (
            d &&
            (d = Yc(d, ["button", "input"], 100)) &&
            ("submit" == d.type || "image" == d.type) &&
            d.name &&
            Uc(d, "value")
          ) {
            var e = Tz(d);
            e && a.store(e, d);
          }
        },
        !1
      );
      Sc(
        G,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || !1 === c.returnValue,
            f = KB(d) && !e,
            g = a.get(d),
            h = !0;
          if (
            IB(
              d,
              function () {
                if (h) {
                  var m,
                    n = {};
                  g &&
                    ((m = G.createElement("input")),
                    (m.type = "hidden"),
                    (m.name = g.name),
                    (m.value = g.value),
                    d.appendChild(m),
                    g.hasAttribute("formaction") &&
                      ((n.action = d.getAttribute("action")),
                      Ec(d, fc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") &&
                      ((n.enctype = d.getAttribute("enctype")),
                      d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") &&
                      ((n.method = d.getAttribute("method")),
                      d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") &&
                      ((n.validate = d.getAttribute("validate")),
                      d.setAttribute(
                        "validate",
                        g.getAttribute("formvalidate")
                      )),
                    g.hasAttribute("formtarget") &&
                      ((n.target = d.getAttribute("target")),
                      d.setAttribute("target", g.getAttribute("formtarget"))));
                  b.call(d);
                  m &&
                    (d.removeChild(m),
                    n.hasOwnProperty("action") && Ec(d, n.action),
                    n.hasOwnProperty("enctype") &&
                      d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") &&
                      d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") &&
                      d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") &&
                      d.setAttribute("target", n.target));
                }
              },
              e,
              f,
              g
            )
          )
            h = !1;
          else
            return (
              e ||
                (c.preventDefault && c.preventDefault(), (c.returnValue = !1)),
              !1
            );
          return c.returnValue;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        IB(
          c,
          function () {
            d && b.call(c);
          },
          !1,
          KB(c)
        ) && (b.call(c), (d = !1));
      };
    };
  function MB(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    Dz([
      function () {
        return L(c, "detect_form_submit_events", { waitForTags: !!d });
      },
    ]);
    var e = a && a.get("checkValidation");
    b = Pz(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      (0 < f && isFinite(f)) || (f = 2e3);
      var g = function (m) {
        return Math.max(f, m);
      };
      Mz("fsl", "mwt", g, 0);
      e || Mz("fsl", "nv.mwt", g, 0);
    }
    var h = function (m) {
      m.push(b);
      return m;
    };
    Mz("fsl", "ids", h, []);
    e || Mz("fsl", "nv.ids", h, []);
    Nz("fsl", "init", !1) || (LB(), Lz("fsl", "init", !0));
    return b;
  }
  MB.H = "internal.enableAutoEventOnFormSubmit";
  function RB() {
    var a = this;
  }
  RB.H = "internal.enableAutoEventOnGaSend";
  var SB = {},
    TB = [];
  var VB = function (a, b) {
      var c = "" + b;
      if (SB[c]) SB[c].push(a);
      else {
        var d = [a];
        SB[c] = d;
        var e = UB("gtm.historyChange-v2"),
          f = -1;
        TB.push(function (g) {
          0 <= f && D.clearTimeout(f);
          b
            ? (f = D.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    UB = function (a) {
      var b = D.location.href,
        c = {
          source: null,
          state: D.history.state || null,
          url: Cj(Fj(b)),
          U: Bj(Fj(b), "fragment"),
        };
      return function (d, e) {
        var f = c,
          g = {};
        g[f.source] = !0;
        g[d.source] = !0;
        if (!g.popstate || !g.hashchange || f.U != d.U) {
          var h = {
            event: a,
            "gtm.historyChangeSource": d.source,
            "gtm.oldUrlFragment": c.U,
            "gtm.newUrlFragment": d.U,
            "gtm.oldHistoryState": c.state,
            "gtm.newHistoryState": d.state,
            "gtm.oldUrl": c.url,
            "gtm.newUrl": d.url,
          };
          e && (h["gtm.triggers"] = e.join(","));
          c = d;
          yy(h);
        }
      };
    },
    WB = function (a, b) {
      var c = D.history,
        d = c[a];
      if (nb(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = D.location.href;
            b({
              source: a,
              state: e,
              url: Cj(Fj(h)),
              U: Bj(Fj(h), "fragment"),
            });
          };
        } catch (e) {}
    },
    YB = function (a) {
      D.addEventListener("popstate", function (b) {
        var c = XB(b);
        a({
          source: "popstate",
          state: b.state,
          url: Cj(Fj(c)),
          U: Bj(Fj(c), "fragment"),
        });
      });
    },
    ZB = function (a) {
      D.addEventListener("hashchange", function (b) {
        var c = XB(b);
        a({
          source: "hashchange",
          state: null,
          url: Cj(Fj(c)),
          U: Bj(Fj(c), "fragment"),
        });
      });
    },
    XB = function (a) {
      var b, c;
      return (
        (null == (b = a.target)
          ? void 0
          : null == (c = b.location)
          ? void 0
          : c.href) || D.location.href
      );
    };
  function $B(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    Dz([
      function () {
        return L(c, "detect_history_change_events");
      },
    ]);
    var d = a && a.get("useV2EventName") ? "ehl" : "hl",
      e = Number(a && a.get("interval"));
    (0 < e && isFinite(e)) || (e = 0);
    if (!Nz(d, "init", !1)) {
      var f;
      "ehl" === d
        ? ((f = function (h) {
            for (var m = 0; m < TB.length; m++) TB[m](h);
          }),
          (b = Pz(b)),
          VB(b, e),
          Lz(d, "reg", VB))
        : (f = UB("gtm.historyChange"));
      ZB(f);
      YB(f);
      WB("pushState", f);
      WB("replaceState", f);
      Lz(d, "init", !0);
    } else if ("ehl" === d) {
      var g = Nz(d, "reg");
      g && ((b = Pz(b)), g(b, e));
    }
    "hl" === d && (b = void 0);
    return b;
  }
  $B.H = "internal.enableAutoEventOnHistoryChange";
  var aC = ["http://", "https://", "javascript:", "file://"];
  var bC = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = cd(b, "href");
      if (
        -1 !== c.indexOf(":") &&
        !aC.some(function (h) {
          return 0 === c.indexOf(h);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = cd(b, "target");
      if ((e && "_self" !== e && "_parent" !== e && "_top" !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = Cj(Fj(c)),
          g = Cj(Fj(D.location.href));
        return f !== g;
      }
      return !0;
    },
    cC = function (a, b) {
      for (
        var c = Bj(
            Fj(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                cd(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    dC = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.kh || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Yc(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = Nz("lcl", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? Nz("lcl", "nv.ids", []) : Nz("lcl", "ids", []);
            for (var h = [], m = 0; m < g.length; m++) {
              var n = g[m],
                p = Nz("lcl", "aff.map", {})[n];
              (p && !cC(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = bC(c, d),
                r = Jz(d, "gtm.linkClick", h);
              r["gtm.elementText"] = Vc(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var t = !!pb(
                    String(cd(d, "rel") || "").split(" "),
                    function (x) {
                      return "noreferrer" === x.toLowerCase();
                    }
                  ),
                  u = D[(cd(d, "target") || "_self").substring(1)],
                  v = !0,
                  w = Ay(function () {
                    var x;
                    if ((x = v && u)) {
                      var y;
                      a: if (t) {
                        var B;
                        try {
                          B = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (A) {
                          if (!G.createEvent) {
                            y = !1;
                            break a;
                          }
                          B = G.createEvent("MouseEvents");
                          B.initEvent(c.type, !0, !0);
                        }
                        B.kh = !0;
                        c.target.dispatchEvent(B);
                        y = !0;
                      } else y = !1;
                      x = !y;
                    }
                    x && (u.location.href = cd(d, "href"));
                  }, f);
                if (zy(r, w, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else zy(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Sc(G, "click", b, !1);
      Sc(G, "auxclick", b, !1);
    };
  function eC(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = ud(a);
    Dz([
      function () {
        return L(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = Pz(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var m = function (p) {
        return Math.max(h, p);
      };
      Mz("lcl", "mwt", m, 0);
      f || Mz("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    Mz("lcl", "ids", n, []);
    f || Mz("lcl", "nv.ids", n, []);
    g &&
      Mz(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    Nz("lcl", "init", !1) || (dC(), Lz("lcl", "init", !0));
    return b;
  }
  eC.H = "internal.enableAutoEventOnLinkClick";
  var fC, gC;
  var hC = function (a) {
      return Nz("sdl", a, {});
    },
    iC = function (a, b, c) {
      if (b) {
        var d = Array.isArray(a) ? a : [a];
        Mz(
          "sdl",
          c,
          function (e) {
            for (var f = 0; f < d.length; f++) {
              var g = String(d[f]);
              e.hasOwnProperty(g) || (e[g] = []);
              e[g].push(b);
            }
            return e;
          },
          {}
        );
      }
    },
    lC = function () {
      var a = function () {
        jC();
        kC(a, !0);
      };
      return a;
    },
    mC = function () {
      var a = 250,
        b = !1;
      G.scrollingElement &&
        G.documentElement &&
        D.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d ? (c = D.setTimeout(e, a)) : ((c = 0), jC(), kC(f));
          d = !1;
        },
        f = function () {
          b && fC();
          c ? (d = !0) : ((c = D.setTimeout(e, a)), Lz("sdl", "pending", !0));
        };
      return f;
    },
    kC = function (a, b) {
      Nz("sdl", "init", !1) &&
        !nC() &&
        (b ? Tc(D, "scrollend", a) : Tc(D, "scroll", a),
        Tc(D, "resize", a),
        Lz("sdl", "init", !1));
    },
    jC = function () {
      var a = fC(),
        b = a.Wg,
        c = a.Xg,
        d = (b / gC.scrollWidth) * 100,
        e = (c / gC.scrollHeight) * 100;
      oC(b, "horiz.pix", "PIXELS", "horizontal");
      oC(d, "horiz.pct", "PERCENT", "horizontal");
      oC(c, "vert.pix", "PIXELS", "vertical");
      oC(e, "vert.pct", "PERCENT", "vertical");
      Lz("sdl", "pending", !1);
    },
    oC = function (a, b, c, d) {
      var e = hC(b),
        f = {},
        g;
      for (g in e)
        if (((f = { yd: f.yd }), (f.yd = g), e.hasOwnProperty(f.yd))) {
          var h = Number(f.yd);
          if (!(a < h)) {
            var m = {};
            yy(
              ((m.event = "gtm.scrollDepth"),
              (m["gtm.scrollThreshold"] = h),
              (m["gtm.scrollUnits"] = c.toLowerCase()),
              (m["gtm.scrollDirection"] = d),
              (m["gtm.triggers"] = e[f.yd].join(",")),
              m)
            );
            Mz(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.yd];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
    },
    qC = function () {
      Mz(
        "sdl",
        "scr",
        function (a) {
          a || (a = G.scrollingElement || (G.body && G.body.parentNode));
          return (gC = a);
        },
        !1
      );
      Mz(
        "sdl",
        "depth",
        function (a) {
          a || (a = pC());
          return (fC = a);
        },
        !1
      );
    },
    pC = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Ar(),
          d = c.height;
        a = Math.max(gC.scrollLeft + c.width, a);
        b = Math.max(gC.scrollTop + d, b);
        return { Wg: a, Xg: b };
      };
    },
    nC = function () {
      return !!(
        Object.keys(hC("horiz.pix")).length ||
        Object.keys(hC("horiz.pct")).length ||
        Object.keys(hC("vert.pix")).length ||
        Object.keys(hC("vert.pct")).length
      );
    };
  function rC(a, b) {
    var c = this;
    K(this.getName(), ["options:!PixieMap", "triggerId:?*"], arguments);
    Dz([
      function () {
        return L(c, "detect_scroll_events");
      },
    ]);
    qC();
    if (!gC) return;
    b = Pz(b);
    var d = ud(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        iC(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        iC(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        iC(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        iC(d.verticalThresholds, b, "vert.pct");
    }
    Nz("sdl", "init", !1)
      ? Nz("sdl", "pending", !1) ||
        I(function () {
          return jC();
        })
      : (Lz("sdl", "init", !0),
        Lz("sdl", "pending", !0),
        I(function () {
          jC();
          if (nC()) {
            var e = mC();
            "onscrollend" in D
              ? ((e = lC()), Sc(D, "scrollend", e))
              : Sc(D, "scroll", e);
            Sc(D, "resize", e);
          } else Lz("sdl", "init", !1);
        }));
    return b;
  }
  rC.H = "internal.enableAutoEventOnScroll";
  function sC(a) {
    return function () {
      if (a.Cc && a.Ec >= a.Cc) a.Ac && D.clearInterval(a.Ac);
      else {
        a.Ec++;
        var b = zb();
        yy({
          event: a.eventName,
          "gtm.timerId": a.Ac,
          "gtm.timerEventNumber": a.Ec,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Cc,
          "gtm.timerStartTime": a.Oe,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Oe,
          "gtm.triggers": a.Lh,
        });
      }
    };
  }
  function tC(a, b) {
    return b;
  }
  tC.H = "internal.enableAutoEventOnTimer";
  var uC = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((zb() - e) * g.playbackRate) / 1e3 : 0;
      e = zb();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, m) {
        var n = a(),
          p = n.Yg,
          q =
            void 0 !== m
              ? Math.round(m)
              : void 0 !== h
              ? Math.round(n.Yg * h)
              : Math.round(n.pj),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          t = G.hidden ? !1 : 0.5 <= Br(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = Jz(c, "gtm.video", u);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = t;
        return v;
      },
      Ij: function () {
        e = zb();
      },
      od: function () {
        d();
      },
    };
  };
  var Dc = ia(["data-gtm-yt-inspected-"]),
    vC = ["www.youtube.com", "www.youtube-nocookie.com"],
    wC,
    xC = !1;
  var yC = function (a, b, c) {
      var d = a.map(function (g) {
        return { Fa: g, Me: g, Ke: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { Fa: g * c, Me: void 0, Ke: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, h) {
        return g.Fa - h.Fa;
      });
      return f;
    },
    zC = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    AC = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    BC = function (a, b) {
      var c, d;
      function e() {
        t = uC(
          function () {
            return {
              url: w,
              title: x,
              Yg: v,
              pj: a.getCurrentTime(),
              playbackRate: y,
            };
          },
          b.zb,
          a.getIframe()
        );
        v = 0;
        x = w = "";
        y = 1;
        return f;
      }
      function f(F) {
        switch (F) {
          case 1:
            v = Math.round(a.getDuration());
            w = a.getVideoUrl();
            if (a.getVideoData) {
              var C = a.getVideoData();
              x = C ? C.title : "";
            }
            y = a.getPlaybackRate();
            b.Sg ? yy(t.createEvent("start")) : t.od();
            u = yC(b.Dh, b.Ch, a.getDuration());
            return g(F);
          default:
            return f;
        }
      }
      function g() {
        B = a.getCurrentTime();
        A = yb().getTime();
        t.Ij();
        r();
        return h;
      }
      function h(F) {
        var C;
        switch (F) {
          case 0:
            return n(F);
          case 2:
            C = "pause";
          case 3:
            var H = a.getCurrentTime() - B;
            C =
              1 < Math.abs(((yb().getTime() - A) / 1e3) * y - H)
                ? "seek"
                : C || "buffering";
            a.getCurrentTime() && (b.Rg ? yy(t.createEvent(C)) : t.od());
            q();
            return m;
          case -1:
            return e(F);
          default:
            return h;
        }
      }
      function m(F) {
        switch (F) {
          case 0:
            return n(F);
          case 1:
            return g(F);
          case -1:
            return e(F);
          default:
            return m;
        }
      }
      function n() {
        for (; d; ) {
          var F = c;
          D.clearTimeout(d);
          F();
        }
        b.Qg && yy(t.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (D.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (u.length && 0 !== y) {
          var F = -1,
            C;
          do {
            C = u[0];
            if (C.Fa > a.getDuration()) return;
            F = (C.Fa - a.getCurrentTime()) / y;
            if (0 > F && (u.shift(), 0 === u.length)) return;
          } while (0 > F);
          c = function () {
            d = 0;
            c = p;
            0 < u.length &&
              u[0].Fa === C.Fa &&
              (u.shift(), yy(t.createEvent("progress", C.Ke, C.Me)));
            r();
          };
          d = D.setTimeout(c, 1e3 * F);
        }
      }
      var t,
        u = [],
        v,
        w,
        x,
        y,
        B,
        A,
        E = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (F) {
          E = E(F);
        },
        onPlaybackRateChange: function (F) {
          B = a.getCurrentTime();
          A = yb().getTime();
          t.od();
          y = F;
          q();
          r();
        },
      };
    },
    DC = function (a) {
      I(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            CC(d[f], a);
        }
        var c = G;
        b();
        pB(b);
      });
    },
    CC = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.zb) &&
        (Cc(a, "data-gtm-yt-inspected-" + b.zb), EC(a, b.we))
      ) {
        a.id || (a.id = FC());
        var c = D.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = BC(d, b),
          f = {},
          g;
        for (g in e)
          (f = { Ee: f.Ee }),
            (f.Ee = g),
            e.hasOwnProperty(f.Ee) &&
              d.addEventListener(
                f.Ee,
                (function (h) {
                  return function (m) {
                    return e[h.Ee](m.data);
                  };
                })(f)
              );
      }
    },
    EC = function (a, b) {
      var c = a.getAttribute("src");
      if (GC(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=")
            ? (d = c + e + "enablejsapi=1")
            : (wC ||
                ((wC = G.location.protocol + "//" + G.location.hostname),
                G.location.port && (wC += ":" + G.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(wC)));
          var f;
          f = Sb(d);
          a.src = Qb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    GC = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < vC.length; c++)
        if (0 <= a.indexOf("//" + vC[c] + "/" + b)) return !0;
      return !1;
    },
    FC = function () {
      var a = Math.round(1e9 * Math.random()) + "";
      return G.getElementById(a) ? FC() : a;
    };
  function HC(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:!PixieMap", "triggerId:?*"], arguments);
    Dz([
      function () {
        return L(c, "detect_youtube_activity_events", {
          fixMissingApi: !!a.get("fixMissingApi"),
        });
      },
    ]);
    b = Pz(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = AC(ud(a.get("progressThresholdsPercent"))),
      h = zC(ud(a.get("progressThresholdsTimeInSeconds"))),
      m = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || h.length)) return;
    var n = { Sg: d, Qg: e, Rg: f, Ch: g, Dh: h, we: m, zb: b },
      p = D.YT,
      q = function () {
        DC(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = D.onYouTubeIframeAPIReady;
    D.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    I(function () {
      for (
        var t = G.getElementsByTagName("script"), u = t.length, v = 0;
        v < u;
        v++
      ) {
        var w = t[v].getAttribute("src");
        if (GC(w, "iframe_api") || GC(w, "player_api")) return b;
      }
      for (
        var x = G.getElementsByTagName("iframe"), y = x.length, B = 0;
        B < y;
        B++
      )
        if (!xC && EC(x[B], n.we))
          return Oc("https://www.youtube.com/iframe_api"), (xC = !0), b;
    });
    return b;
  }
  HC.H = "internal.enableAutoEventOnYouTubeActivity";
  var IC;
  function JC(a) {
    var b = !1;
    return b;
  }
  JC.H = "internal.evaluateMatchingRules";
  var pD = function () {
    var a = !0;
    (wn(7) && wn(9) && wn(10)) || (a = !1);
    return a;
  };
  function kE(a, b, c, d) {}
  kE.H = "internal.executeEventProcessor";
  function lE(a) {
    var b = void 0;
    return td(b, this.m, 1);
  }
  lE.H = "internal.executeJavascriptString";
  var mE = function (a) {
    var b;
    return b;
  };
  var nE = null;
  function oE() {
    var a = new ab();
    L(this, "read_container_data"),
      T(35) && nE
        ? (a = nE)
        : (a.set("containerId", "G-D0HXQDBZ94"),
          a.set("version", "1"),
          a.set("environmentName", ""),
          a.set("debugMode", gg),
          a.set("previewMode", ig),
          a.set("environmentMode", hg),
          a.set("firstPartyServing", Kj()),
          a.set("containerUrl", Ic),
          a.Ib(),
          T(35) && (nE = a));
    return a;
  }
  oE.R = "getContainerVersion";
  function pE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  pE.R = "getCookieValues";
  function qE() {
    return qj();
  }
  qE.H = "internal.getCountryCode";
  function rE() {
    var a = [];
    a = Zj();
    return td(a);
  }
  rE.H = "internal.getDestinationIds";
  function sE(a, b) {
    var c = null;
    return c;
  }
  sE.H = "internal.getElementAttribute";
  function tE(a) {
    var b = null;
    return b;
  }
  tE.H = "internal.getElementById";
  function uE(a) {
    var b = "";
    return b;
  }
  uE.H = "internal.getElementInnerText";
  function vE(a, b) {
    var c = null;
    return c;
  }
  vE.H = "internal.getElementProperty";
  function wE(a) {
    var b;
    return b;
  }
  wE.H = "internal.getElementValue";
  function xE(a) {
    var b = 0;
    return b;
  }
  xE.H = "internal.getElementVisibilityRatio";
  function yE(a) {
    var b = null;
    return b;
  }
  yE.H = "internal.getElementsByCssSelector";
  function zE(a) {
    var b = void 0;
    L(this, "read_event_data", a);
    a = String(a);
    var c;
    a: {
      for (
        var d = Hz(this).originalEventData,
          e = {},
          f = {},
          g = {},
          h = [],
          m = a.split("\\\\"),
          n = 0;
        n < m.length;
        n++
      ) {
        for (var p = m[n].split("\\."), q = 0; q < p.length; q++) {
          for (var r = p[q].split("."), t = 0; t < r.length; t++)
            h.push(r[t]), t !== r.length - 1 && h.push(g);
          q !== p.length - 1 && h.push(f);
        }
        n !== m.length - 1 && h.push(e);
      }
      for (var u = [], v = "", w = la(h), x = w.next(); !x.done; x = w.next()) {
        var y = x.value;
        y === g
          ? (u.push(v), (v = ""))
          : (v = y === e ? v + "\\" : y === f ? v + "." : v + y);
      }
      v && u.push(v);
      for (var B = la(u), A = B.next(); !A.done; A = B.next()) {
        if (null == d) {
          c = void 0;
          break a;
        }
        d = d[A.value];
      }
      c = d;
    }
    b = td(c, this.m, 1);
    return b;
  }
  zE.H = "internal.getEventData";
  var AE = {};
  AE.enableAWFledge = T(22);
  AE.enableAdsConversionValidation = T(13);
  AE.enableAutoPiiOnPhoneAndAddress = T(21);
  AE.enableCachedEcommerceData = T(27);
  AE.enableCcdPreAutoPiiDetection = T(28);
  AE.enableCloudRecommentationsErrorLogging = T(29);
  AE.enableCloudRecommentationsSchemaIngestion = T(30);
  AE.enableCloudRetailInjectPurchaseMetadata = T(32);
  AE.enableCloudRetailLogging = T(31);
  AE.enableCloudRetailPageCategories = T(33);
  AE.enableConsentDisclosureActivity = T(34);
  AE.enableDCFledge = T(38);
  AE.enableDecodeUri = T(48);
  AE.enableDeferAllEnhancedMeasurement = T(39);
  AE.enableEuidAutoMode = T(42);
  AE.enableFormSkipValidation = T(45);
  AE.enableNavigationSwEncryptionVariant = T(62);
  AE.enableNavigationSwExperimentVariant = T(64);
  AE.enableSharedUserId = T(75);
  AE.enableUrlDecodeEventUsage = T(80);
  AE.enableZoneConfigInChildContainers = T(81);
  AE.renameOnoToNonGaiaRemarketing = T(86);
  AE.useEnableAutoEventOnFormApis = T(93);
  AE.autoPiiEligible = uj();
  function BE() {
    return td(AE);
  }
  BE.H = "internal.getFlags";
  function CE() {
    return new qd(gz);
  }
  CE.H = "internal.getHtmlId";
  function DE(a, b) {
    var c;
    K(this.getName(), ["targetId:!string", "name:!string"], arguments);
    var d = pq(a) || {};
    c = td(d[b], this.m);
    return c;
  }
  DE.H = "internal.getProductSettingsParameter";
  function EE(a, b) {
    var c;
    K(this.getName(), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    L(this, "get_url", "query", a);
    var d = Bj(Fj(D.location.href), "query"),
      e = yj(d, a, b);
    c = td(e, this.m);
    return c;
  }
  EE.R = "getQueryParameters";
  function FE(a, b) {
    var c;
    return c;
  }
  FE.R = "getReferrerQueryParameters";
  function GE(a) {
    var b = "";
    return b;
  }
  GE.R = "getReferrerUrl";
  function HE() {
    return pj["1"] || "";
  }
  HE.H = "internal.getRegionCode";
  function IE(a, b) {
    var c;
    K(this.getName(), ["targetId:!string", "name:!string"], arguments);
    var d = sm(a);
    c = td(d[b], this.m);
    return c;
  }
  IE.H = "internal.getRemoteConfigParameter";
  function JE(a) {
    var b = "";
    K(this.getName(), ["component:?string"], arguments),
      L(this, "get_url", a),
      (b = Bj(Fj(D.location.href), a));
    return b;
  }
  JE.R = "getUrl";
  function KE() {
    L(this, "get_user_agent");
    return Gc.userAgent;
  }
  KE.R = "getUserAgent";
  var LE = !1,
    ME = function (a) {
      var b = a.eventName === Q.g.Nb && kl() && vs(a),
        c = a.metadata.is_sgtm_service_worker,
        d = a.metadata.batch_on_navigation,
        e = a.metadata.is_conversion,
        f = a.metadata.is_session_start,
        g = a.metadata.create_dc_join,
        h = a.metadata.create_google_join,
        m = a.metadata.euid_mode_enabled && !!ws(a);
      return !(
        !((T(49) && T(50) && "fetch" in D) || Gc.sendBeacon) ||
        e ||
        m ||
        f ||
        g ||
        h ||
        b ||
        c ||
        (!d && LE)
      );
    };
  var NE = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = zb();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.mh() && (d = zb() - b);
          return d + c;
        },
      };
    },
    OE = function () {
      this.m = void 0;
      this.D = 0;
      this.isActive = this.isVisible = this.F = !1;
      this.P = this.J = void 0;
    };
  aa = OE.prototype;
  aa.tk = function (a) {
    var b = this;
    if (!this.m) {
      this.F = G.hasFocus();
      this.isVisible = !G.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Sc(d, e, function (g) {
          b.m.stop();
          f(g);
          b.mh() && b.m.start();
        });
      };
      c(D, "focus", function () {
        b.F = !0;
      });
      c(D, "blur", function () {
        b.F = !1;
      });
      c(D, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && M(56);
        b.P && b.P();
      });
      c(D, "pagehide", function () {
        b.isActive = !1;
        b.J && b.J();
      });
      c(G, "visibilitychange", function () {
        b.isVisible = !G.hidden;
      });
      vs(a) &&
        -1 === (Gc.userAgent || "").indexOf("Firefox") &&
        -1 === (Gc.userAgent || "").indexOf("FxiOS") &&
        c(D, "beforeunload", function () {
          LE = !0;
        });
      this.Gh();
      this.D = 0;
    }
  };
  aa.Gh = function () {
    this.D += this.Gf();
    this.m = NE(this);
    this.mh() && this.m.start();
  };
  aa.zm = function (a) {
    var b = this.Gf();
    0 < b && (a.m[Q.g.Nd] = b);
  };
  aa.wl = function (a) {
    a.m[Q.g.Nd] = void 0;
    this.Gh();
    this.D = 0;
  };
  aa.mh = function () {
    return this.F && this.isVisible && this.isActive;
  };
  aa.ml = function () {
    return this.D + this.Gf();
  };
  aa.Gf = function () {
    return (this.m && this.m.get()) || 0;
  };
  aa.fm = function (a) {
    this.J = a;
  };
  aa.Gj = function (a) {
    this.P = a;
  };
  var PE = function (a) {
      ib("GA4_EVENT", a);
    },
    QE = function () {
      delete hb.GA4_EVENT;
    };
  function RE() {
    return (D.gaGlobal = D.gaGlobal || {});
  }
  var SE = function () {
      var a = RE();
      a.hid = a.hid || qb();
      return a.hid;
    },
    TE = function (a, b) {
      var c = RE();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var UE = function (a, b, c) {
      var d = a.metadata.client_id_source;
      if (void 0 === d || c <= d)
        (a.m[Q.g.jb] = b), (a.metadata.client_id_source = c);
    },
    XE = function (a, b) {
      var c;
      var d = b.metadata.cookie_options,
        e = d.prefix + "_ga",
        f = mo(d, void 0, void 0, Q.g.T);
      if (!1 === V(b.o, Q.g.qc) && VE(b) === a) c = !0;
      else {
        var g = lo(a, WE[0], d.domain, d.path);
        c = 1 !== bo(e, g, f);
      }
      return c;
    },
    VE = function (a) {
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = ko(c, b.domain, b.path, WE, Q.g.T);
      if (!d) {
        var e = String(V(a.o, Q.g.oc, ""));
        e && e != c && (d = ko(e, b.domain, b.path, WE, Q.g.T));
      }
      return d;
    },
    WE = ["GA1"],
    YE = function (a, b) {
      var c = a.m[Q.g.jb];
      if ((V(a.o, Q.g.Eb) && V(a.o, Q.g.Sb)) || (b && c === b)) return c;
      if (c) {
        c = "" + c;
        if (!XE(c, a)) return M(31), (a.isAborted = !0), "";
        TE(c, W(Q.g.T));
        return c;
      }
      M(32);
      a.isAborted = !0;
      return "";
    };
  var aF = function (a, b, c) {
      if (!b) return a;
      if (!a) return b;
      var d = ZE(a);
      if (!d) return b;
      var e,
        f = ub(null != (e = V(c.o, Q.g.hd)) ? e : 30);
      if (
        !(Math.floor(c.metadata.event_start_timestamp_ms / 1e3) > d.Ge + 60 * f)
      )
        return a;
      var g = ZE(b);
      if (!g) return a;
      g.Ic = d.Ic + 1;
      var h;
      return null != (h = $E(g.sessionId, g.Ic, g.xd, g.Ge, g.rh, g.Dc, g.te))
        ? h
        : b;
    },
    dF = function (a, b) {
      var c = b.metadata.cookie_options,
        d = bF(b, c),
        e = lo(a, cF[0], c.domain, c.path),
        f = {
          yb: Q.g.T,
          domain: c.domain,
          path: c.path,
          expires: c.xb ? new Date(zb() + 1e3 * Number(c.xb)) : void 0,
          flags: c.flags,
        };
      bo(d, void 0, f);
      return 1 !== bo(d, e, f);
    },
    eF = function (a) {
      var b = a.metadata.cookie_options,
        c = bF(a, b),
        d = ko(c, b.domain, b.path, cF, Q.g.T);
      if (!d) return d;
      var e = Tn(c, void 0, void 0, Q.g.T);
      if (d && 1 < e.length) {
        M(114);
        for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
          var m = e[h].split(".");
          if (!(7 > m.length)) {
            var n = Number(m[5]);
            n && (!g || n > g) && ((g = n), (f = e[h]));
          }
        }
        f &&
          f.substring(f.length - d.length, f.length) !== d &&
          (M(115), (d = f.split(".").slice(2).join(".")));
      }
      return d;
    },
    $E = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, ub(c), d, e];
        h.push(f ? "1" : "0");
        h.push(g || "0");
        return h.join(".");
      }
    },
    cF = ["GS1"],
    bF = function (a, b) {
      return b.prefix + "_ga_" + a.target.ka[Jl[0]];
    },
    ZE = function (a) {
      if (a) {
        var b = a.split(".");
        if (!(5 > b.length || 7 < b.length)) {
          7 > b.length && M(67);
          var c = Number(b[1]),
            d = Number(b[3]),
            e = Number(b[4] || 0);
          c || M(118);
          d || M(119);
          isNaN(e) && M(120);
          if (c && d && !isNaN(e))
            return {
              sessionId: b[0],
              Ic: c,
              xd: !!Number(b[2]),
              Ge: d,
              rh: e,
              Dc: "1" === b[5],
              te: "0" !== b[6] ? b[6] : void 0,
            };
        }
      }
    },
    fF = function (a) {
      return $E(
        a.m[Q.g.rb],
        a.m[Q.g.be],
        a.m[Q.g.ae],
        Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        a.metadata.join_timer_sec || 0,
        !!a.metadata[Q.g.Ze],
        a.m[Q.g.Od]
      );
    };
  var gF = function (a) {
      var b = V(a.o, Q.g.sa),
        c = a.o.D[Q.g.sa];
      if (c === b) return c;
      var d = k(b);
      c && c[Q.g.W] && (d[Q.g.W] = (d[Q.g.W] || []).concat(c[Q.g.W]));
      return d;
    },
    hF = function (a, b) {
      var c = Co(!0);
      return "1" !== c._up ? {} : { clientId: c[a], Pf: c[b] };
    },
    iF = function (a, b, c) {
      var d = Co(!0),
        e = d[b];
      e && (UE(a, e, 2), XE(e, a));
      var f = d[c];
      f && dF(f, a);
      return { clientId: e, Pf: f };
    },
    jF = !1,
    kF = function (a) {
      var b = gF(a) || {},
        c = a.metadata.cookie_options,
        d = c.prefix + "_ga",
        e = bF(a, c),
        f = {};
      Mo(b[Q.g.Tb], !!b[Q.g.W]) &&
        ((f = iF(a, d, e)), f.clientId && f.Pf && (jF = !0));
      b[Q.g.W] &&
        Jo(
          function () {
            var g = {},
              h = VE(a);
            h && (g[d] = h);
            var m = eF(a);
            m && (g[e] = m);
            var n = Tn("FPLC", void 0, void 0, Q.g.T);
            n.length && (g._fplc = n[0]);
            return g;
          },
          b[Q.g.W],
          b[Q.g.qb],
          !!b[Q.g.Wa]
        );
      return f;
    },
    mF = function (a) {
      if (!V(a.o, Q.g.Sa)) return {};
      var b = a.metadata.cookie_options,
        c = b.prefix + "_ga",
        d = bF(a, b);
      Ko(function () {
        var e;
        if (W("analytics_storage")) e = {};
        else {
          var f = {};
          e = ((f._up = "1"), (f[c] = a.m[Q.g.jb]), (f[d] = fF(a)), f);
        }
        return e;
      }, 1);
      return !W("analytics_storage") && lF() ? hF(c, d) : {};
    },
    lF = function () {
      var a = Aj(D.location, "host"),
        b = Aj(Fj(G.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    };
  var nF = function () {
    var a = zb(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function (e) {
      var f = zb();
      f >= b && ((b = f + 864e5), (d = 5e3));
      c = Math.min(c + ((f - a) / 1e3) * 5, 20);
      a = f;
      var g = !1;
      1 > d || 1 > c || ((g = !0), d--, c--);
      e && ((e.Tk = d), (e.Ok = c));
      return g;
    };
  };
  var oF = function (a, b) {
      Cn() && ((a.gcs = Dn()), b.metadata.is_consent_update && (a.gcu = "1"));
      a.gcd = Hn(b.o);
      Bn(b.o) ? (a.npa = "0") : (a.npa = "1");
    },
    rF = function (a) {
      if (a.metadata.is_merchant_center)
        return Nj("https://www.merchant-center-analytics.goog") + "/mc/collect";
      var b = Jj(Mj(a.o), "/g/collect");
      if (b) return b;
      if (Qi.D) return "" + Ri() + "/g/collect";
      var c = us(a),
        d = V(a.o, Q.g.ib);
      return c && !rj() && !1 !== d && pD() && W(Q.g.M) && W(Q.g.T)
        ? pF()
        : qF();
    },
    sF = !1;
  sF = !0;
  var tF = {};
  tF[Q.g.jb] = "cid";
  tF[Q.g.li] = "gcut";
  tF[Q.g.Pb] = "are";
  tF[Q.g.Ve] = "pscdl";
  tF[Q.g.af] = "_fid";
  tF[Q.g.qg] = "_geo";
  tF[Q.g.pb] = "gdid";
  tF[Q.g.Zc] = "ir";
  tF[Q.g.Ma] = "ul";
  tF[Q.g.Bg] = "pae";
  tF[Q.g.Zd] = "_rdi";
  tF[Q.g.Gb] = "sr";
  tF[Q.g.Ki] = "tid";
  tF[Q.g.jf] = "tt";
  tF[Q.g.kd] = "ec_mode";
  tF[Q.g.Ti] = "gtm_up";
  tF[Q.g.kf] = "uaa";
  tF[Q.g.lf] = "uab";
  tF[Q.g.nf] = "uafvl";
  tF[Q.g.pf] = "uamb";
  tF[Q.g.qf] = "uam";
  tF[Q.g.rf] = "uap";
  tF[Q.g.tf] = "uapv";
  tF[Q.g.uf] = "uaw";
  tF[Q.g.Li] = "ur";
  tF[Q.g.bd] = "lps";
  var uF = {};
  uF[Q.g.Lc] = "cc";
  uF[Q.g.Mc] = "ci";
  uF[Q.g.Nc] = "cm";
  uF[Q.g.Oc] = "cn";
  uF[Q.g.Qc] = "cs";
  uF[Q.g.Rc] = "ck";
  uF[Q.g.ya] = "cu";
  uF[Q.g.wa] = "dl";
  uF[Q.g.Ba] = "dr";
  uF[Q.g.Fb] = "dt";
  uF[Q.g.ae] = "seg";
  uF[Q.g.rb] = "sid";
  uF[Q.g.be] = "sct";
  uF[Q.g.Na] = "uid";
  T(83) && (uF[Q.g.ed] = "dp");
  var vF = {};
  vF[Q.g.Nd] = "_et";
  vF[Q.g.lb] = "edid";
  var wF = {};
  wF[Q.g.Lc] = "cc";
  wF[Q.g.Mc] = "ci";
  wF[Q.g.Nc] = "cm";
  wF[Q.g.Oc] = "cn";
  wF[Q.g.Qc] = "cs";
  wF[Q.g.Rc] = "ck";
  var xF = {},
    yF = Object.freeze(((xF[Q.g.Ca] = 1), xF)),
    qF = function () {
      var a = "www";
      sF && tj() && (a = tj());
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    pF = function () {
      var a;
      sF && "" !== tj() && (a = tj());
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    zF = function (a, b, c) {
      var d = {},
        e = {},
        f = {};
      d.v = "2";
      d.tid = a.target.ia;
      ts(a) && !rj() && (d[T(86) ? "_ng" : "_ono"] = 1);
      d.gtm = On(a.metadata.source_canonical_id);
      d._p = T(94) ? Ki : SE();
      c && (d.em = c);
      a.metadata.create_google_join && (d._gaz = 1);
      oF(d, a);
      Kn() && (d.dma_cps = In());
      d.dma = Jn();
      fn(on()) && (d.tcfd = Ln());
      Qi.m && (d.tag_exp = Qi.m);
      var g = a.m[Q.g.pb];
      g && (d.gdid = g);
      e.en = String(a.eventName);
      a.metadata.is_first_visit &&
        (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
      a.metadata.is_new_to_site && (e._nsi = 1);
      a.metadata.is_session_start &&
        (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
      a.metadata.is_conversion && (e._c = 1);
      a.metadata.is_external_event && (e._ee = 1);
      if (a.metadata.is_ecommerce) {
        var h = a.m[Q.g.da] || V(a.o, Q.g.da);
        if (Array.isArray(h))
          for (var m = 0; m < h.length && 200 > m; m++)
            e["pr" + (m + 1)] = mg(h[m]);
      }
      var n = a.m[Q.g.lb];
      n && (e.edid = n);
      var p = function (t, u) {
          if ("object" !== typeof u || !yF[t]) {
            var v = "ep." + t,
              w = "epn." + t;
            t = ob(u) ? w : v;
            var x = ob(u) ? v : w;
            e.hasOwnProperty(x) && delete e[x];
            e[t] = String(u);
          }
        },
        q = T(88) && vs(a);
      z(a.m, function (t, u) {
        if (void 0 !== u && !ii.hasOwnProperty(t)) {
          null === u && (u = "");
          var v;
          t !== Q.g.Od
            ? (v = !1)
            : a.metadata.euid_mode_enabled || q
            ? ((d.ecid = u), (v = !0))
            : (v = void 0);
          if (!v && t !== Q.g.Ze) {
            var w = u;
            !0 === u && (w = "1");
            !1 === u && (w = "0");
            w = String(w);
            var x;
            if (tF[t]) (x = tF[t]), (d[x] = w);
            else if (uF[t]) (x = uF[t]), (f[x] = w);
            else if (vF[t]) (x = vF[t]), (e[x] = w);
            else if ("_" === t.charAt(0)) d[t] = w;
            else {
              var y;
              wF[t]
                ? (y = !0)
                : t !== Q.g.Pc
                ? (y = !1)
                : ("object" !== typeof u && p(t, u), (y = !0));
              y || p(t, u);
            }
          }
        }
      });
      (function (t) {
        vs(a) &&
          "object" === typeof t &&
          z(t || {}, function (u, v) {
            "object" !== typeof v && (d["sst." + u] = String(v));
          });
      })(a.m[Q.g.ke]);
      var r = a.m[Q.g.Xa] || {};
      T(59) && !1 === V(a.o, Q.g.ib, void 0, 4) && (d.ngs = "1");
      z(r, function (t, u) {
        void 0 !== u &&
          ((null === u && (u = ""), t !== Q.g.Na || f.uid)
            ? b[t] !== u &&
              ((e[(ob(u) ? "upn." : "up.") + String(t)] = String(u)),
              (b[t] = u))
            : (f.uid = String(u)));
      });
      og.call(this, { oa: d, Jc: f, ah: e }, rF(a), vs(a));
    };
  xa(zF, og);
  var AF = function (a) {
      this.D = a;
      this.F = "";
      this.m = this.D;
    },
    BF = function (a, b) {
      a.m = b;
      return a;
    },
    CF = function (a, b) {
      a.J = b;
      return a;
    };
  function DF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function EF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Va(b) ? b : {}, f = la(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var FF = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    GF = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    HF = function (a, b, c, d) {
      var e = CF(
          BF(
            new AF(function (h, m) {
              var n = FF(h, c);
              d && (n = n.replace("_is_sw=0", d));
              var p = {};
              m.attribution_reporting && (p.attributionsrc = "");
              Rc(n, void 0, void 0, p);
            }),
            function (h) {
              var m = FF(h, c);
              Zc(m);
            }
          ),
          function (h, m) {
            var n = FF(h, c),
              p = m.dedupe_key;
            p && zt(n, p);
          }
        ),
        f = 0,
        g = new D.XMLHttpRequest();
      g.withCredentials = !0;
      g.onprogress = function (h) {
        if (200 === g.status) {
          var m = g.responseText.substring(f);
          f = h.loaded;
          var n;
          n = e.F + m;
          for (var p = n.indexOf("\n\n"); -1 !== p; ) {
            var q;
            a: {
              var r = la(n.substring(0, p).split("\n")),
                t = r.next().value,
                u = r.next().value;
              if (
                0 === t.indexOf("event: message") &&
                0 === u.indexOf("data: ")
              )
                try {
                  q = JSON.parse(u.substring(u.indexOf(":") + 1));
                  break a;
                } catch (H) {}
              q = void 0;
            }
            var v = e,
              w = q;
            if (w) {
              EF(w.send_pixel, w.options, v.D);
              EF(w.send_beacon, void 0, v.m);
              var x = w.create_iframe,
                y = w.options,
                B = v.J;
              if (x && B) {
                var A = x || [];
                if (Array.isArray(A))
                  for (
                    var E = Va(y) ? y : {}, F = la(A), C = F.next();
                    !C.done;
                    C = F.next()
                  )
                    B(C.value, E);
              }
            }
            n = n.substring(p + 2);
            p = n.indexOf("\n\n");
          }
          e.F = n;
        }
      };
      g.open(b ? "POST" : "GET", a);
      T(20) &&
        g.setAttributionReporting &&
        g.setAttributionReporting({
          eventSourceEligible: !1,
          triggerEligible: !0,
        });
      g.send(b);
    },
    IF = function (a, b) {
      var c = Fj(a),
        d = GF(c),
        e = DF(c);
      T(72) && T(64)
        ? at(e, b, d, function (f) {
            HF(e, b, d, f);
          })
        : HF(e, b, d);
    };
  var JF = function (a, b) {
      return a ? [a, b].join("&") : b;
    },
    MF = function (a, b, c, d) {
      var e = T(52) && d;
      if (T(51) || e) {
        var f = b,
          g = dd();
        void 0 !== g && (f += "&tfd=" + Math.round(g));
        b = f;
      }
      var h = a + "?" + b;
      KF && (d = !(0 === h.indexOf(qF()) || 0 === h.indexOf(pF())));
      if (d && !LE) IF(h, c);
      else {
        var m;
        var n = b;
        T(49) && "fetch" in D
          ? T(50)
            ? (m = bd(a + "?" + JF(n, "_z=fetch"), c))
            : (LF(a, JF(n, "_z=sendBeacon"), c), (m = !0))
          : (m = !1);
        m || LF(a, b, c);
      }
    },
    NF = function (a, b) {
      function c(u) {
        n.push(u + "=" + encodeURIComponent("" + a.oa[u]));
      }
      var d = b.om,
        e = b.qm,
        f = b.ol,
        g = b.El,
        h = b.Dl,
        m = b.dm;
      if (d || e) {
        var n = [],
          p = T(86) ? "_ng" : "_ono";
        a.oa[p] && c(p);
        c("tid");
        c("cid");
        c("gtm");
        n.push("aip=1");
        a.Jc.uid && !h && n.push("uid=" + encodeURIComponent("" + a.Jc.uid));
        var q = function () {
          c("dma");
          null != a.oa.dma_cps && c("dma_cps");
          null != a.oa.gcs && c("gcs");
          c("gcd");
          null != a.oa.npa && c("npa");
        };
        q();
        d &&
          (LF(
            "https://stats.g.doubleclick.net/g/collect",
            "v=2&" + n.join("&")
          ),
          ql("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
        if (e) {
          var r = function () {
            var u = Bt() + "/td/ga/rul?";
            n = [];
            c("tid");
            n.push("gacid=" + encodeURIComponent(String(a.oa.cid)));
            c("gtm");
            q();
            c("pscdl");
            n.push("aip=1");
            n.push("fledge=1");
            n.push("z=" + qb());
            zt(u + n.join("&"), a.oa.tid);
          };
          n.push("z=" + qb());
          if (!g) {
            var t =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f
                  )
                : void 0;
            t && Rc(t + n.join("&"));
          }
          T(59) && m && !LE && r();
        }
      }
    },
    KF = !1;
  var OF = function () {
    this.J = 1;
    this.P = {};
    this.m = new pg();
    this.D = -1;
  };
  OF.prototype.F = function (a, b) {
    var c = this,
      d = new zF(a, this.P, b),
      e = ME(a);
    (e && this.m.P(d)) || this.flush();
    if (e && this.m.add(d)) {
      if (0 > this.D) {
        var f = D.setTimeout,
          g;
        vs(a) ? (PF ? ((PF = !1), (g = QF)) : (g = RF)) : (g = 5e3);
        this.D = f.call(
          D,
          function () {
            return c.flush();
          },
          g
        );
      }
    } else {
      var h = tg(d, this.J++);
      MF(d.baseUrl, h.params, h.body, d.F);
      var m = a.metadata.create_dc_join,
        n = a.metadata.create_google_join,
        p = !1 !== V(a.o, Q.g.Aa),
        q = Bn(a.o),
        r = { eventId: a.o.eventId, priorityId: a.o.priorityId },
        t = a.m[Q.g.Bg],
        u = {
          om: m,
          qm: n,
          ol: vj(),
          mn: p,
          ln: q,
          El: rj(),
          Dl: a.metadata.euid_mode_enabled,
          rn: r,
          dm: t,
          o: a.o,
        };
      NF(d, u);
    }
    dv(a.o.eventId, a.eventName);
  };
  OF.prototype.add = function (a) {
    a.metadata.euid_mode_enabled && !LE ? this.Z(a) : this.F(a);
  };
  OF.prototype.flush = function () {
    if (this.m.events.length) {
      var a = ug(this.m, this.J++);
      MF(this.m.baseUrl, a.params, a.body, this.m.D);
      this.m = new pg();
      0 <= this.D && (D.clearTimeout(this.D), (this.D = -1));
    }
  };
  OF.prototype.Z = function (a) {
    var b = this,
      c = ws(a);
    c
      ? fi(c, function (d) {
          b.F(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.F(a);
  };
  var LF = function (a, b, c) {
      var d = a + "?" + b;
      c ? $c(d, c) : Zc(d);
    },
    QF = fj("", 500),
    RF = fj("", 5e3),
    PF = !0;
  var SF = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) SF(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    TF = function (a) {
      if (vs(a)) {
        if (T(88)) {
          var b = rq(a, "ccd_add_1p_data", !1) ? 1 : 0;
          ys(a, "ude", b);
        }
        var c = function (e) {
            var f = SF(Q.g.Ca, e);
            z(f, function (g, h) {
              a.m[g] = h;
            });
          },
          d = V(a.o, Q.g.Ca);
        void 0 !== d
          ? (c(d), T(89) && (a.m[Q.g.kd] = "c"))
          : c(a.metadata.user_data);
        a.metadata.user_data = void 0;
      }
    };
  var UF = window,
    VF = document,
    WF = function (a) {
      var b = UF._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        VF.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === UF["ga-disable-" + a])
      )
        return !0;
      try {
        var c = UF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Qn("AMP_TOKEN", String(VF.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return VF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var YF = function (a) {
      return !a || XF.test(a) || ki.hasOwnProperty(a);
    },
    ZF = function (a) {
      var b = Q.g.Gb,
        c;
      c || (c = function () {});
      void 0 !== a.m[b] && (a.m[b] = c(a.m[b]));
    },
    $F = function (a) {
      var b = a.indexOf("?"),
        c = -1 === b ? a : a.substring(0, b);
      try {
        c = decodeURIComponent(c);
      } catch (d) {}
      return -1 === b ? c : "" + c + a.substring(b);
    },
    aG = function (a, b, c) {
      W(c) ||
        zl(function () {
          b.metadata.is_consent_update = !0;
          var d = si[c || ""];
          d && ys(b, "gcut", d);
          a.lj(b);
        }, c);
    },
    bG = function (a) {
      var b = Ib(Xl(a.o, Q.g.ja, 1), ".");
      b && (a.m[Q.g.pb] = b);
      var c = Ib(Xl(a.o, Q.g.ja, 2), ".");
      c && (a.m[Q.g.lb] = c);
    },
    rt = { Xk: "", Am: Number("") },
    cG = {},
    dG =
      ((cG[Q.g.Lc] = 1),
      (cG[Q.g.Mc] = 1),
      (cG[Q.g.Nc] = 1),
      (cG[Q.g.Oc] = 1),
      (cG[Q.g.Qc] = 1),
      (cG[Q.g.Rc] = 1),
      cG),
    XF = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    eG = [Qq, bG, tr],
    fG = function (a) {
      this.P = a;
      this.Ya = new OF();
      this.m = void 0;
      this.J = new OE();
      this.D = this.F = void 0;
      this.sb = this.Da = !1;
      this.md = 0;
      this.Z = !1;
    };
  aa = fG.prototype;
  aa.am = function (a, b, c) {
    var d = this,
      e = Gl(this.P);
    if (e)
      if (c.eventMetadata.is_external_event && "_" === a.charAt(0))
        c.onFailure();
      else {
        a !== Q.g.ba && a !== Q.g.Oa && YF(a) && M(58);
        gG(c.m);
        var f = new qq(e, a, c);
        f.metadata.event_start_timestamp_ms = b;
        var g = [Q.g.T],
          h = rq(f, Q.g.Rb, V(f.o, Q.g.Rb));
        (h || vs(f)) && g.push(Q.g.M);
        ((T(41) && h) || (T(11) && vs(f))) && g.push(Q.g.O);
        st(function () {
          Al(function () {
            d.bm(f);
          }, g);
        });
        this.Yl(a, c, f);
      }
    else c.onFailure();
  };
  aa.Yl = function (a, b, c) {
    var d = Gl(this.P);
    if (T(46) && a === Q.g.ba && rq(c, "ga4_ads_linked", !1)) {
      var e = function () {
          for (var h = la(eG), m = h.next(); !m.done; m = h.next()) {
            var n = m.value;
            n(f);
            if (f.isAborted) break;
          }
          f.metadata.speculative || f.isAborted || su(f);
        },
        f = new qq(d, a, b);
      f.metadata.hit_type = "page_view";
      f.metadata.speculative = !0;
      var g = T(41) ? [Q.g.M, Q.g.O] : [Q.g.M];
      Al(function () {
        e();
        W(g) ||
          zl(function (h) {
            var m = h.consentEventId,
              n = h.consentPriorityId;
            f.metadata.consent_updated = !0;
            f.metadata.consent_event_id = m;
            f.metadata.consent_priority_id = n;
            e();
          }, g);
      }, g);
    }
  };
  aa.bm = function (a) {
    this.D = a;
    try {
      if (WF(a.target.ia)) M(28), (a.isAborted = !0);
      else if (T(82)) {
        var b;
        var c = dk(ek()),
          d = c && c.parent;
        b = d ? dk(d) : void 0;
        if (b && Array.isArray(b.destinations))
          for (var e = 0; e < b.destinations.length; e++)
            if (WF(b.destinations[e])) {
              M(125);
              a.isAborted = !0;
              break;
            }
      }
      if (0 <= rt.Xk.replace(/\s+/g, "").split(",").indexOf(a.eventName))
        a.isAborted = !0;
      else {
        var f = xs(a);
        f && f.blacklisted && (a.isAborted = !0);
      }
      var g = G.location.protocol;
      "http:" != g && "https:" != g && (M(29), (a.isAborted = !0));
      Gc && "preview" == Gc.loadPurpose && (M(30), (a.isAborted = !0));
      T(77) && (a.isAborted = !0);
      Vq(a);
      var h = {},
        m = yi.grl;
      m || ((m = nF()), (yi.grl = m));
      m(h) || (M(35), (a.isAborted = !0));
      if (a.isAborted) {
        a.o.onFailure();
        QE();
        return;
      }
      var n = h.Ok;
      0 === h.Tk && PE(25);
      0 === n && PE(26);
      var p = {
        prefix: String(V(a.o, Q.g.La, "")),
        path: String(V(a.o, Q.g.Qb, "/")),
        flags: String(V(a.o, Q.g.Va, "")),
        domain: String(V(a.o, Q.g.Qa, "auto")),
        xb: Number(V(a.o, Q.g.Ra, 63072e3)),
      };
      a.metadata.cookie_options = p;
      hG(a);
      this.uk(a);
      this.J.zm(a);
      a.metadata.is_merchant_center
        ? (a.metadata.euid_mode_enabled = !1)
        : rq(a, "ccd_add_1p_data", !1) && (a.metadata.euid_mode_enabled = !0);
      if (a.metadata.euid_mode_enabled && rq(a, "ccd_add_1p_data", !1)) {
        var q = a.o.D[Q.g.ce];
        if (ej(q)) {
          var r = V(a.o, Q.g.Ca);
          null === r
            ? (a.metadata.user_data_from_code = null)
            : (q.enable_code && Va(r) && (a.metadata.user_data_from_code = r),
              Va(q.selectors) &&
                !a.metadata.user_data_from_manual &&
                (a.metadata.user_data_from_manual = dj(q.selectors)));
        }
      }
      if (
        T(47) &&
        !T(46) &&
        rq(a, "ga4_ads_linked", !1) &&
        a.eventName === Q.g.ba
      ) {
        var t = !1 !== V(a.o, Q.g.ra);
        if (t) {
          var u = Oq(a);
          u.xb && (u.xb = Math.min(u.xb, 7776e3));
          Pq({ pd: t, vd: V(a.o, Q.g.sa) || {}, Bd: V(a.o, Q.g.Sa), ac: u });
        }
      }
      var v = this.Fj,
        w;
      V(a.o, Q.g.Sa) && (W(Q.g.T) || V(a.o, Q.g.jb) || (a.m[Q.g.Ti] = !0));
      var x;
      var y;
      y = void 0 === y ? 3 : y;
      var B = D.location.href;
      if (B) {
        var A = Fj(B).search.replace("?", ""),
          E = yj(A, "_gl", !1, !0) || "";
        x = E ? void 0 !== Do(E, y) : !1;
      } else x = !1;
      x && vs(a) && ys(a, "glv", 1);
      if (a.eventName !== Q.g.ba) w = {};
      else {
        V(a.o, Q.g.Sa) && Rp(["aw", "dc"]);
        Tp(["aw", "dc"]);
        var F = kF(a),
          C = mF(a);
        w = Object.keys(F).length ? F : C;
      }
      v.call(this, w);
      var H = a.eventName === Q.g.ba;
      H && (this.Z = !0);
      a.eventName == Q.g.ba &&
        (V(a.o, Q.g.Ia, !0)
          ? (a.o.m[Q.g.ja] &&
              ((a.o.F[Q.g.ja] = a.o.m[Q.g.ja]),
              (a.o.m[Q.g.ja] = void 0),
              (a.m[Q.g.ja] = void 0)),
            (a.eventName = Q.g.Nb))
          : (a.isAborted = !0));
      H && !a.isAborted && 0 < this.md++ && PE(17);
      bG(a);
      var N = this.F,
        O = this.J,
        U = !this.sb,
        X = this.m,
        P = V(a.o, Q.g.jb);
      if (V(a.o, Q.g.Eb) && V(a.o, Q.g.Sb))
        P ? UE(a, P, 1) : (M(127), (a.isAborted = !0));
      else {
        var S = P ? 1 : 8;
        a.metadata.is_new_to_site = !1;
        P || ((P = VE(a)), (S = 3));
        P || ((P = X), (S = 5));
        if (!P) {
          var ma = W(Q.g.T),
            ka = RE();
          P = !ka.from_cookie || ma ? ka.vid : void 0;
          S = 6;
        }
        P
          ? (P = "" + P)
          : ((P = jo()),
            (S = 7),
            (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0));
        UE(a, P, S);
      }
      var da = Math.floor(a.metadata.event_start_timestamp_ms / 1e3),
        Ba = void 0;
      a.metadata.is_new_to_site || (Ba = eF(a) || N);
      var Da = ub(V(a.o, Q.g.hd, 30));
      Da = Math.min(475, Da);
      Da = Math.max(5, Da);
      var ya = ub(V(a.o, Q.g.ff, 1e4)),
        qa = ZE(Ba);
      a.metadata.is_first_visit = !1;
      a.metadata.is_session_start = !1;
      a.metadata.join_timer_sec = 0;
      qa &&
        qa.rh &&
        (a.metadata.join_timer_sec = Math.max(
          0,
          qa.rh - Math.max(0, da - qa.Ge)
        ));
      var lb = !1;
      qa ||
        ((lb = a.metadata.is_first_visit = !0),
        (qa = {
          sessionId: String(da),
          Ic: 1,
          xd: !1,
          Ge: da,
          Dc: !1,
          te: void 0,
        }));
      da > qa.Ge + 60 * Da &&
        ((lb = !0),
        (qa.sessionId = String(da)),
        qa.Ic++,
        (qa.xd = !1),
        (qa.te = void 0));
      if (lb) (a.metadata.is_session_start = !0), O.wl(a);
      else if (O.ml() > ya || a.eventName == Q.g.Nb) qa.xd = !0;
      a.metadata.euid_mode_enabled
        ? V(a.o, Q.g.Na)
          ? (qa.Dc = !0)
          : (qa.Dc && !T(9) && (qa.te = void 0), (qa.Dc = !1))
        : (qa.Dc = !1);
      var Be = qa.te,
        Ce = T(88) && vs(a);
      if (a.metadata.euid_mode_enabled || Ce) {
        var Xc = V(a.o, Q.g.Od),
          Wm = Xc ? 1 : 8;
        Xc || ((Xc = Be), (Wm = 4));
        Xc || ((Xc = io()), (Wm = 7));
        var OH = Xc.toString(),
          Fv = Wm,
          Gv = a.metadata.enhanced_client_id_source;
        if (void 0 === Gv || Fv <= Gv)
          (a.m[Q.g.Od] = OH), (a.metadata.enhanced_client_id_source = Fv);
      }
      U
        ? (a.copyToHitData(Q.g.rb, qa.sessionId),
          a.copyToHitData(Q.g.be, qa.Ic),
          a.copyToHitData(Q.g.ae, qa.xd ? 1 : 0))
        : ((a.m[Q.g.rb] = qa.sessionId),
          (a.m[Q.g.be] = qa.Ic),
          (a.m[Q.g.ae] = qa.xd ? 1 : 0));
      a.metadata[Q.g.Ze] = qa.Dc ? 1 : 0;
      iG(a);
      if (!V(a.o, Q.g.Sb) || !V(a.o, Q.g.Eb)) {
        var Hv = "",
          Sg = G.location;
        if (Sg) {
          var ij = Sg.pathname || "";
          "/" != ij.charAt(0) && (ij = "/" + ij);
          Hv = Sg.protocol + "//" + Sg.hostname + ij + Sg.search;
        }
        a.copyToHitData(Q.g.wa, Hv, $F);
        var QH = a.copyToHitData,
          RH = Q.g.Ba,
          jj;
        a: {
          var Iv = Tn("_opt_expid", void 0, void 0, Q.g.T)[0];
          if (Iv) {
            var Jv = decodeURIComponent(Iv).split("$");
            if (3 === Jv.length) {
              jj = Jv[2];
              break a;
            }
          }
          if (void 0 !== yi.ga4_referrer_override)
            jj = yi.ga4_referrer_override;
          else {
            var Kv = Xi("gtm.gtagReferrer." + a.target.ia),
              SH = G.referrer;
            jj = Kv ? "" + Kv : SH;
          }
        }
        QH.call(a, RH, jj || void 0, $F);
        a.copyToHitData(Q.g.Fb, G.title);
        a.copyToHitData(Q.g.Ma, (Gc.language || "").toLowerCase());
        var Lv = yr();
        a.copyToHitData(Q.g.Gb, Lv.width + "x" + Lv.height);
        T(83) && a.copyToHitData(Q.g.ed, void 0, $F);
        T(53) && wq() && a.copyToHitData(Q.g.bd, "1");
      }
      a.metadata.create_dc_join = !1;
      a.metadata.create_google_join = !1;
      if (
        !(
          Qi.D ||
          (T(7) && vs(a)) ||
          a.metadata.is_merchant_center ||
          !1 === V(a.o, Q.g.ib)
        ) &&
        pD() &&
        W(Q.g.M)
      ) {
        var Mv = us(a);
        (a.metadata.is_session_start || V(a.o, Q.g.bf)) &&
          (a.metadata.create_dc_join = !!Mv);
        var Nv;
        Nv = a.metadata.join_timer_sec;
        Mv &&
          0 === (Nv || 0) &&
          ((a.metadata.join_timer_sec = 60),
          (a.metadata.create_google_join = !0));
      }
      jG(a);
      mi.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0),
        a.copyToHitData(Q.g.da),
        a.copyToHitData(Q.g.ya));
      a.copyToHitData(Q.g.jf);
      for (var Ov = V(a.o, Q.g.cf) || [], Xm = 0; Xm < Ov.length; Xm++) {
        var Pv = Ov[Xm];
        if (Pv.rule_result) {
          a.copyToHitData(Q.g.jf, Pv.traffic_type);
          PE(3);
          break;
        }
      }
      if (!a.metadata.is_merchant_center && Mj(a.o)) {
        var Qv = gF(a) || {},
          UH =
            (Mo(Qv[Q.g.Tb], !!Qv[Q.g.W]) ? Co(!0)._fplc : void 0) ||
            (0 < Tn("FPLC", void 0, void 0, Q.g.T).length ? void 0 : "0");
        a.m._fplc = UH;
      }
      if (void 0 !== V(a.o, Q.g.Zc)) a.copyToHitData(Q.g.Zc);
      else {
        var Rv = V(a.o, Q.g.df),
          Ym,
          kj;
        a: {
          if (jF) {
            var Zm = gF(a) || {};
            if (Zm && Zm[Q.g.W])
              for (
                var Sv = Bj(Fj(a.m[Q.g.Ba]), "host", !0),
                  lj = Zm[Q.g.W],
                  Tg = 0;
                Tg < lj.length;
                Tg++
              )
                if (lj[Tg] instanceof RegExp) {
                  if (lj[Tg].test(Sv)) {
                    kj = !0;
                    break a;
                  }
                } else if (0 <= Sv.indexOf(lj[Tg])) {
                  kj = !0;
                  break a;
                }
          }
          kj = !1;
        }
        if (!(Ym = kj)) {
          var mj;
          if ((mj = Rv))
            a: {
              for (
                var Tv = Rv.include_conditions || [],
                  VH = Bj(Fj(a.m[Q.g.Ba]), "host", !0),
                  $m = 0;
                $m < Tv.length;
                $m++
              )
                if (Tv[$m].test(VH)) {
                  mj = !0;
                  break a;
                }
              mj = !1;
            }
          Ym = mj;
        }
        Ym && ((a.m[Q.g.Zc] = "1"), PE(4));
      }
      vs(a) && kl() && ys(a, "rnd", sq());
      if (T(56) && vs(a)) {
        rq(a, Q.g.Rb, !1) && ys(a, "gse", 1);
        !1 === V(a.o, Q.g.ib, void 0, 4) && ys(a, "ngs", 1);
        rj() && ys(a, "ga_rd", 1);
        pD() || ys(a, "ngst", 1);
        var Uv = vj();
        Uv && ys(a, "etld", Uv);
      }
      if (vs(a)) {
        var Vv = sF ? tj() : "";
        Vv && ys(a, "gcsub", Vv);
      }
      vs(a) &&
        (ys(a, "gcd", Hn(a.o)), kl() && V(a.o, Q.g.fa) && ys(a, "adr", 1));
      if (vs(a)) {
        var Wv = Mq();
        Wv && ys(a, "us_privacy", Wv);
        var Xv = vn();
        Xv && ys(a, "gdpr", Xv);
        var Yv = tn();
        Yv && ys(a, "gdpr_consent", Yv);
      }
      vs(a) && (a.m[Q.g.Li] = pj["1"] || qj());
      if (vs(a) && T(52)) {
        var Zv = Ki;
        Zv && ys(a, "tft", Number(Zv));
      }
      T(64) && T(72) && ys(a, "sw_exp", 1);
      T(74) &&
        vs(a) &&
        (a.metadata.speculative && ys(a, "sp", 1),
        a.metadata.is_syn && ys(a, "syn", 1),
        a.metadata.em_event && (ys(a, "em_event", 1), ys(a, "sp", 1)));
      T(90) &&
        vs(a) &&
        !1 !== V(a.o, Q.g.Aa) &&
        vt("join-ad-interest-group") &&
        nb(Gc.joinAdInterestGroup) &&
        ys(a, "flg", 1);
      if (!nt(D)) M(87);
      else if (void 0 !== pt) {
        M(85);
        var $v = lt();
        $v ? (V(a.o, Q.g.Zd) && !vs(a)) || tt($v, a) : M(86);
      }
      var an = vt(ut());
      an || kG || ((kG = !0), Mm(""), (an = vt(ut())));
      an && (a.m[Q.g.Pb] = "1");
      if (!1 !== V(a.o, Q.g.Aa) && Bn(a.o)) {
        var WH = us(a),
          XH = V(a.o, Q.g.ib);
        WH &&
          !1 !== XH &&
          pD() &&
          W(Q.g.M) &&
          (!T(41) || (gl(Q.g.O) && il(["ads"]).ads)) &&
          vt("join-ad-interest-group") &&
          nb(Gc.joinAdInterestGroup) &&
          (a.m[Q.g.Bg] = !0);
      }
      Wq(a);
      if (a.eventName == Q.g.Oa) {
        var bw = V(a.o, Q.g.ob),
          YH = V(a.o, Q.g.Db),
          cw = void 0;
        cw = a.m[bw];
        YH(cw || V(a.o, bw));
        a.isAborted = !0;
      }
      a.copyToHitData(Q.g.Na);
      a.copyToHitData(Q.g.Xa);
      tr(a);
      TF(a);
      T(74) && vs(a) && (a.metadata.speculative = !1);
      var dw = V(a.o, Q.g.Eb);
      dw && PE(12);
      a.metadata.em_event && PE(14);
      var Ug = dk(ek());
      (dw ||
        qk(Ug) ||
        (Ug && Ug.parent && Ug.context && 5 === Ug.context.source)) &&
        PE(19);
      !this.Z && a.metadata.em_event && PE(18);
      var bn = a.metadata.event_usage;
      if (Array.isArray(bn)) for (var cn = 0; cn < bn.length; cn++) PE(bn[cn]);
      var ew = jb("GA4_EVENT");
      ew && (a.m._eu = ew);
      if (a.metadata.speculative || a.isAborted) {
        a.o.onFailure();
        QE();
        return;
      }
      var ZH = this.Fj,
        fw,
        $H = this.m,
        dn;
      a: {
        var en = fF(a);
        if (en) {
          if (dF(en, a)) {
            dn = en;
            break a;
          }
          M(25);
          a.isAborted = !0;
        }
        dn = void 0;
      }
      var aI = dn;
      fw = { clientId: YE(a, $H), Pf: aI };
      ZH.call(this, fw);
      this.sb = !0;
      this.wm(a);
      if (
        T(71) &&
        W(Q.g.T) &&
        (vs(a) &&
          T(72) &&
          (T(64) || T(63)) &&
          (a.metadata.is_sgtm_service_worker = !0),
        T(64))
      )
        a: {
        }
      if (vs(a)) {
        var cI = a.metadata.is_conversion;
        if ("page_view" === a.eventName || cI)
          aG(this, a, Q.g.M), T(11) && aG(this, a, Q.g.O);
      }
      this.J.Gh();
      a.copyToHitData(Q.g.qg);
      V(a.o, Q.g.Zd) && ((a.m[Q.g.Zd] = !0), vs(a) || ZF(a));
      if (a.isAborted) {
        a.o.onFailure();
        QE();
        return;
      }
      this.lj(a);
      a.o.onSuccess();
    } catch (yI) {
      a.o.onFailure();
    }
    QE();
  };
  aa.lj = function (a) {
    this.Ya.add(a);
  };
  aa.Fj = function (a) {
    var b = a.clientId,
      c = a.Pf;
    b && c && ((this.m = b), (this.F = c));
  };
  aa.flush = function () {
    this.Ya.flush();
  };
  aa.wm = function (a) {
    var b = this;
    if (!this.Da) {
      if (T(40)) {
        var c = W(Q.g.O),
          d = W(Q.g.T);
        yl([Q.g.O, Q.g.T], function () {
          var f = W(Q.g.O),
            g = W(Q.g.T),
            h = !1,
            m = {},
            n = {};
          if (d !== g && b.D && b.F && b.m) {
            var p = b.m;
            if (g) {
              var q = VE(b.D);
              if (q) {
                b.m = q;
                var r = eF(b.D);
                r && (b.F = aF(r, b.F, b.D));
              } else XE(b.m, b.D), TE(b.m, !0);
              dF(b.F, b.D);
              h = !0;
              m[Q.g.bf] = p;
            } else (b.F = void 0), (b.m = void 0), (D.gaGlobal = {});
          }
          f &&
            !c &&
            ((h = !0), (n.is_consent_update = !0), (m[Q.g.li] = si[Q.g.O]));
          if (h) {
            var t = tx(b.P, Q.g.Kc, m);
            wx(t, a.o.eventId, { eventMetadata: n });
          }
          d = g;
          c = f;
        });
      } else {
        var e = W(Q.g.T);
        yl([Q.g.T], function () {
          var f = W(Q.g.T);
          if (e !== f && b.D && b.F && b.m) {
            var g = b.m;
            if (f) {
              var h = VE(b.D);
              if (h) {
                b.m = h;
                var m = eF(b.D);
                m && (b.F = aF(m, b.F, b.D));
              } else XE(b.m, b.D), TE(b.m, !0);
              dF(b.F, b.D);
              var n = {};
              n[Q.g.bf] = g;
              var p = tx(b.P, Q.g.Kc, n);
              wx(p, a.o.eventId, {});
            } else (b.F = void 0), (b.m = void 0), (D.gaGlobal = {});
            e = f;
          }
        });
      }
      this.Da = !0;
    }
  };
  aa.uk = function (a) {
    a.eventName !== Q.g.Oa && this.J.tk(a);
  };
  var hG = function (a) {
      function b(c, d) {
        ii[c] || void 0 === d || (a.m[c] = d);
      }
      z(a.o.F, b);
      z(a.o.m, b);
    },
    iG = function (a) {
      var b = Yl(a.o),
        c = function (d, e) {
          dG[d] && (a.m[d] = e);
        };
      Va(b[Q.g.Pc])
        ? z(b[Q.g.Pc], function (d, e) {
            c((Q.g.Pc + "_" + d).toLowerCase(), e);
          })
        : z(b, c);
    },
    jG = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      a.metadata.is_conversion = b(xs(a));
      a.metadata.is_first_visit &&
        (a.metadata.is_first_visit_conversion = b(xs(a, "first_visit")));
      a.metadata.is_session_start &&
        (a.metadata.is_session_start_conversion = b(xs(a, "session_start")));
    },
    kG = !1;
  function gG(a) {
    z(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Xa] || {};
    z(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var lG = function (a) {
      if (
        T(4) && "prerendering" in G
          ? G.prerendering
          : "prerender" === G.visibilityState
      )
        return !1;
      a();
      return !0;
    },
    mG = function (a) {
      if (!lG(a)) {
        var b = !1,
          c = function () {
            !b &&
              lG(a) &&
              ((b = !0),
              Tc(G, "visibilitychange", c),
              T(4) && Tc(G, "prerenderingchange", c),
              M(55));
          };
        Sc(G, "visibilitychange", c);
        T(4) && Sc(G, "prerenderingchange", c);
        M(54);
      }
    };
  var oG = function (a, b) {
    mG(function () {
      var c = Gl(a);
      if (c) {
        var d = nG(c, b);
        om(a, d);
      }
    });
  };
  function nG(a, b) {
    var c = function () {};
    var d = new fG(a.id),
      e = "MC" === a.prefix;
    c = function (f, g, h, m) {
      e && (m.eventMetadata.is_merchant_center = !0);
      d.am(g, h, m);
    };
    Uj || pG(a, d, b);
    return c;
  }
  function pG(a, b, c) {
    var d = b.J,
      e = {},
      f = { eventId: c, eventMetadata: ((e.batch_on_navigation = !0), e) };
    T(39) && (f.deferrable = !0);
    d.fm(function () {
      LE = !0;
      nm.flush();
      1e3 <= d.Gf() && Gc.sendBeacon && pm(Q.g.Kc, {}, a.id, f);
      b.flush();
      d.Gj(function () {
        LE = !1;
        d.Gj();
      });
    });
  }
  var qG = nG;
  function sG(a, b, c) {
    var d = this;
  }
  sG.H = "internal.gtagConfig";
  function tG() {
    var a = {};
    return a;
  }
  function vG(a, b) {}
  vG.R = "gtagSet";
  function wG(a, b) {}
  wG.R = "injectHiddenIframe";
  function xG(a, b, c, d, e) {}
  xG.H = "internal.injectHtml";
  var BG = {};
  function DG(a, b, c, d) {}
  var EG = Object.freeze({ dl: 1, id: 1 }),
    FG = {};
  function GG(a, b, c, d) {}
  DG.R = "injectScript";
  GG.H = "internal.injectScript";
  function HG(a) {
    var b = !0;
    return b;
  }
  HG.R = "isConsentGranted";
  function IG() {
    return sj();
  }
  IG.H = "internal.isDmaRegion";
  function JG(a) {
    var b = !1;
    return b;
  }
  JG.H = "internal.isEntityInfrastructure";
  var KG = function () {
    var a = rh(function (b) {
      Hz(this).log("error", b);
    });
    a.R = "JSON";
    return a;
  };
  function LG(a) {
    var b = void 0;
    return td(b);
  }
  LG.H = "internal.legacyParseUrl";
  var MG = function () {
      return !1;
    },
    NG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  function OG() {}
  OG.R = "logToConsole";
  function PG(a, b) {}
  PG.H = "internal.mergeRemoteConfig";
  function QG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return td(d);
  }
  QG.H = "internal.parseCookieValuesFromString";
  function RG(a) {
    var b = void 0;
    if ("string" !== typeof a) return;
    a && 0 === a.indexOf("//") && (a = G.location.protocol + a);
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (w) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            m = f[g][1];
          e.hasOwnProperty(h)
            ? "string" === typeof e[h]
              ? (e[h] = [e[h], m])
              : e[h].push(m)
            : (e[h] = m);
        }
        c = td({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = Fj(a);
    } catch (w) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var t = q[r].split("="),
          u = t[0],
          v = decodeURIComponent(t.splice(1).join("=")).replace(/\+/g, " ");
        p.hasOwnProperty(u)
          ? "string" === typeof p[u]
            ? (p[u] = [p[u], v])
            : p[u].push(v)
          : (p[u] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = td(n);
    return b;
  }
  RG.R = "parseUrl";
  function SG(a) {}
  SG.H = "internal.processAsNewEvent";
  function TG(a, b, c) {
    var d;
    return d;
  }
  TG.H = "internal.pushToDataLayer";
  function UG(a, b) {
    var c = !1;
    return c;
  }
  UG.R = "queryPermission";
  function VG() {
    var a = "";
    return a;
  }
  VG.R = "readCharacterSet";
  function WG() {
    return xi.Ta;
  }
  WG.H = "internal.readDataLayerName";
  function XG() {
    var a = "";
    return a;
  }
  XG.R = "readTitle";
  function YG(a, b) {
    var c = this;
    K(this.getName(), ["destinationId:!string", "callback:!Fn"], arguments),
      ur(a, function (d) {
        b.invoke(c.m, td(d, c.m, 1));
      });
  }
  YG.H = "internal.registerCcdCallback";
  function ZG(a) {
    return !0;
  }
  ZG.H = "internal.registerDestination";
  var $G = Object.freeze(["config", "event", "get", "set"]);
  function aH(a, b, c) {}
  aH.H = "internal.registerGtagCommandListener";
  function bH(a, b) {
    var c = !1;
    return c;
  }
  bH.H = "internal.removeDataLayerEventListener";
  function cH(a, b) {}
  cH.H = "internal.removeFormData";
  function dH() {}
  dH.R = "resetDataLayer";
  function eH(a, b, c, d) {
    K(
      this.getName(),
      [
        "destinationIds:!*",
        "eventName:!*",
        "eventParameters:?PixieMap",
        "messageContext:?PixieMap",
      ],
      arguments
    );
    var e = c ? ud(c) : {},
      f = ud(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? ud(d) : {},
      h = Hz(this);
    g.originatingEntity = xA(h);
    for (var m = 0; m < f.length; m++) {
      var n = f[m];
      if ("string" === typeof n) {
        var p = k(e),
          q = k(g),
          r = tx(n, b, p);
        wx(r, g.eventId || h.eventId, q);
      }
    }
  }
  eH.H = "internal.sendGtagEvent";
  function fH(a, b, c) {}
  fH.R = "sendPixel";
  function gH(a, b) {}
  gH.H = "internal.setAnchorHref";
  function hH(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  hH.R = "setCookie";
  function iH(a) {}
  iH.H = "internal.setCorePlatformServices";
  function jH(a, b) {}
  jH.H = "internal.setDataLayerValue";
  function kH(a) {}
  kH.R = "setDefaultConsentState";
  function lH(a, b) {}
  lH.H = "internal.setDelegatedConsentType";
  function mH(a, b) {}
  mH.H = "internal.setFormAction";
  function nH(a, b, c) {
    return !1;
  }
  nH.R = "setInWindow";
  function oH(a, b, c) {
    K(
      this.getName(),
      ["targetId:!string", "name:!string", "value:!*"],
      arguments
    );
    var d = pq(a) || {};
    d[b] = ud(c, this.m);
    var e = a;
    nq || oq();
    mq[e] = d;
  }
  oH.H = "internal.setProductSettingsParameter";
  function pH(a, b, c) {
    K(
      this.getName(),
      ["targetId:!string", "name:!string", "value:!*"],
      arguments
    );
    for (var d = b.split("."), e = sm(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!Va(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f]
        );
      e = e[d[f]];
    }
    e[d[f]] = ud(c, this.m, 1);
  }
  pH.H = "internal.setRemoteConfigParameter";
  function qH(a, b) {
    var c = this;
  }
  qH.H = "internal.setupConversionLinker";
  function rH(a, b, c, d) {
    var e = this;
  }
  rH.R = "sha256";
  function sH(a, b, c) {}
  sH.H = "internal.sortRemoteConfigParameters";
  var tH = {},
    uH = {};
  tH.R = "templateStorage";
  tH.getItem = function (a) {
    var b = null;
    L(this, "access_template_storage");
    var c = Hz(this).bc();
    uH[c] && (b = uH[c].hasOwnProperty("gtm." + a) ? uH[c]["gtm." + a] : null);
    return b;
  };
  tH.setItem = function (a, b) {
    L(this, "access_template_storage");
    var c = Hz(this).bc();
    uH[c] = uH[c] || {};
    uH[c]["gtm." + a] = b;
  };
  tH.removeItem = function (a) {
    L(this, "access_template_storage");
    var b = Hz(this).bc();
    if (!uH[b] || !uH[b].hasOwnProperty("gtm." + a)) return;
    delete uH[b]["gtm." + a];
  };
  tH.clear = function () {
    L(this, "access_template_storage"), delete uH[Hz(this).bc()];
  };
  function vH(a, b) {
    var c = !1;
    return c;
  }
  vH.H = "internal.testRegex";
  var wH = function (a) {
    var b;
    return b;
  };
  function xH(a) {
    var b;
    return b;
  }
  xH.H = "internal.unsiloId";
  function yH(a) {}
  yH.R = "updateConsentState";
  var zH;
  function AH(a, b, c) {
    zH = zH || new Bh();
    zH.add(a, b, c);
  }
  function BH(a, b) {
    var c = (zH = zH || new Bh());
    if (c.D.hasOwnProperty(a))
      throw (
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.m.hasOwnProperty(a))
      throw (
        "Attempting to add a private function with an existing API name: " +
        a +
        "."
      );
    c.D[a] = nb(b) ? Yg(a, b) : Zg(a, b);
  }
  function CH() {
    return function (a) {
      var b;
      var c = zH;
      if (c.m.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.D.hasOwnProperty(a))) {
          var e = !1,
            f = this.m.m;
          if (f) {
            var g = f.bc();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var h = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
          b = h;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var DH = function () {
    var a = function (c) {
        return BH(c.H, c);
      },
      b = function (c) {
        return AH(c.R, c);
      };
    b(Bz);
    b(Iz);
    b(NA);
    b(QA);
    b(RA);
    b(VA);
    b(XA);
    b($A);
    b(KG());
    b(bB);
    b(oE);
    b(pE);
    b(EE);
    b(FE);
    b(GE);
    b(JE);
    b(vG);
    b(wG);
    b(DG);
    b(HG);
    b(OG);
    b(RG);
    b(UG);
    b(VG);
    b(XG);
    b(fH);
    b(hH);
    b(kH);
    b(nH);
    b(rH);
    b(tH);
    b(yH);
    AH("Math", dh());
    AH("Object", zh);
    AH("TestHelper", Dh());
    AH("assertApi", $g);
    AH("assertThat", ah);
    AH("decodeUri", eh);
    AH("decodeUriComponent", fh);
    AH("encodeUri", gh);
    AH("encodeUriComponent", hh);
    AH("fail", nh);
    AH("generateRandom", oh);
    AH("getTimestamp", ph);
    AH("getTimestampMillis", ph);
    AH("getType", qh);
    AH("makeInteger", sh);
    AH("makeNumber", th);
    AH("makeString", uh);
    AH("makeTableMap", vh);
    AH("mock", yh);
    AH("fromBase64", mE, !("atob" in D));
    AH("localStorage", NG, !MG());
    AH("toBase64", wH, !("btoa" in D));
    a(ih);
    a(Ez);
    a(Zz);
    a(kA);
    a(rA);
    a(wA);
    a(CA);
    a(LA);
    a(OA);
    a(SA);
    a(TA);
    a(WA);
    a(YA);
    a(ZA);
    a(aB);
    a(cB);
    a(fB);
    a(gB);
    a(hB);
    a(iB);
    a(mB);
    a(vB);
    a(wB);
    a(HB);
    a(MB);
    a(RB);
    a($B);
    a(eC);
    a(rC);
    a(tC);
    a(HC);
    a(JC);
    a(kE);
    a(lE);
    a(qE);
    a(rE);
    a(sE);
    a(tE);
    a(uE);
    a(vE);
    a(wE);
    a(xE);
    a(yE);
    a(zE);
    a(BE);
    a(CE);
    a(DE);
    a(HE);
    a(IE);
    a(sG);
    a(xG);
    a(GG);
    a(IG);
    a(JG);
    a(LG);
    a(AA);
    a(PG);
    a(QG);
    a(SG);
    a(TG);
    a(WG);
    a(YG);
    a(ZG);
    a(aH);
    a(bH);
    a(cH);
    a(eH);
    a(gH);
    a(iH);
    a(jH);
    a(lH);
    a(mH);
    a(oH);
    a(pH);
    a(qH);
    a(sH);
    a(vH);
    a(xH);
    BH("internal.CrossContainerSchema", eB());
    BH("internal.GtagSchema", tG());
    return CH();
  };
  var zz;
  function EH() {
    zz.m.m.P = function (a, b, c) {
      yi.SANDBOXED_JS_SEMAPHORE = yi.SANDBOXED_JS_SEMAPHORE || 0;
      yi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        yi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function FH(a) {
    void 0 !== a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Ni[e] = Ni[e] || [];
          Ni[e].push(b);
        }
      });
  }
  var GH = encodeURI,
    Y = encodeURIComponent,
    HH = Array.isArray,
    IH = function (a, b, c) {
      Rc(a, b, c);
    },
    JH = function (a, b) {
      if (!a) return !1;
      var c = Bj(Fj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    KH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var iI = D.clearTimeout,
    jI = D.setTimeout,
    kI = function (a, b, c) {
      if (Mn()) {
        b && I(b);
      } else return Oc(a, b, c);
    },
    lI = function () {
      return D.location.href;
    },
    mI = function (a) {
      return Bj(Fj(a), "fragment");
    },
    nI = function (a) {
      return Cj(Fj(a));
    },
    oI = function (a, b) {
      return Xi(a, b || 2);
    },
    pI = function (a, b, c) {
      return b ? zy(a, b, c) : yy(a);
    },
    qI = function (a, b) {
      D[a] = b;
    },
    rI = function (a, b, c) {
      b && (void 0 === D[a] || (c && !D[a])) && (D[a] = b);
      return D[a];
    },
    sI = function (a, b) {
      if (Mn()) {
        b && I(b);
      } else Qc(a, b);
    },
    tI = function (a) {
      return !!Nz(a, "init", !1);
    },
    uI = function (a) {
      Lz(a, "init", !0);
    };

  var vI = {};
  var Z = { securityGroups: {} };

  (Z.securityGroups.access_template_storage = ["google"]),
    (Z.__access_template_storage = function () {
      return {
        assert: function () {},
        N: function () {
          return {};
        },
      };
    }),
    (Z.__access_template_storage.C = "access_template_storage"),
    (Z.__access_template_storage.isVendorTemplate = !0),
    (Z.__access_template_storage.priorityOverride = 0),
    (Z.__access_template_storage.isInfrastructure = !1),
    (Z.__access_template_storage.runInSiloedMode = !1);
  (Z.securityGroups.c = ["google"]),
    (Z.__c = function (a) {
      return a.vtp_value;
    }),
    (Z.__c.C = "c"),
    (Z.__c.isVendorTemplate = !0),
    (Z.__c.priorityOverride = 0),
    (Z.__c.isInfrastructure = !0),
    (Z.__c.runInSiloedMode = !0);
  (Z.securityGroups.e = ["google"]),
    (Z.__e = function (a) {
      return String(a.vtp_gtmCachedValues.event);
    }),
    (Z.__e.C = "e"),
    (Z.__e.isVendorTemplate = !0),
    (Z.__e.priorityOverride = 0),
    (Z.__e.isInfrastructure = !0),
    (Z.__e.runInSiloedMode = !0);
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = oI(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return void 0 !== c ? c : a.vtp_defaultValue;
    }),
    (Z.__v.C = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.C = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (null != g && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if ("any" !== c) {
              try {
                if ("specific" === c && null != g && xg(g, d)) return;
              } catch (h) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Z.__process_dom_events = b;
        Z.__process_dom_events.C = "process_dom_events";
        Z.__process_dom_events.isVendorTemplate = !0;
        Z.__process_dom_events.priorityOverride = 0;
        Z.__process_dom_events.isInfrastructure = !1;
        Z.__process_dom_events.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, m, n) {
            if (!e[m]) throw d(h, {}, "Prohibited event target " + m + ".");
            if (-1 === e[m].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.detect_youtube_activity_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: { fixMissingApi: !!c.fixMissingApi } };
      }
      (function (b) {
        Z.__detect_youtube_activity_events = b;
        Z.__detect_youtube_activity_events.C = "detect_youtube_activity_events";
        Z.__detect_youtube_activity_events.isVendorTemplate = !0;
        Z.__detect_youtube_activity_events.priorityOverride = 0;
        Z.__detect_youtube_activity_events.isInfrastructure = !1;
        Z.__detect_youtube_activity_events.runInSiloedMode = !1;
      })(function (b) {
        var c = !!b.vtp_allowFixMissingJavaScriptApi,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.fixMissingApi)
              throw d(e, {}, "Prohibited option: fixMissingApi.");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.detect_history_change_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_history_change_events = b;
        Z.__detect_history_change_events.C = "detect_history_change_events";
        Z.__detect_history_change_events.isVendorTemplate = !0;
        Z.__detect_history_change_events.priorityOverride = 0;
        Z.__detect_history_change_events.isInfrastructure = !1;
        Z.__detect_history_change_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, N: a };
      });
    })();

  (Z.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_link_click_events = b;
        Z.__detect_link_click_events.C = "detect_link_click_events";
        Z.__detect_link_click_events.isVendorTemplate = !0;
        Z.__detect_link_click_events.priorityOverride = 0;
        Z.__detect_link_click_events.isInfrastructure = !1;
        Z.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.detect_form_submit_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_form_submit_events = b;
        Z.__detect_form_submit_events.C = "detect_form_submit_events";
        Z.__detect_form_submit_events.isVendorTemplate = !0;
        Z.__detect_form_submit_events.priorityOverride = 0;
        Z.__detect_form_submit_events.isInfrastructure = !1;
        Z.__detect_form_submit_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.read_container_data = ["google"]),
    (Z.__read_container_data = function () {
      return {
        assert: function () {},
        N: function () {
          return {};
        },
      };
    }),
    (Z.__read_container_data.C = "read_container_data"),
    (Z.__read_container_data.isVendorTemplate = !0),
    (Z.__read_container_data.priorityOverride = 0),
    (Z.__read_container_data.isInfrastructure = !1),
    (Z.__read_container_data.runInSiloedMode = !1);

  (Z.securityGroups.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        Z.__listen_data_layer = b;
        Z.__listen_data_layer.C = "listen_data_layer";
        Z.__listen_data_layer.isVendorTemplate = !0;
        Z.__listen_data_layer.priorityOverride = 0;
        Z.__listen_data_layer.isInfrastructure = !1;
        Z.__listen_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!("any" === c || ("specific" === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event."
              );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.detect_user_provided_data = ["google"]),
    (function () {
      function a(b, c) {
        return { dataSource: c };
      }
      (function (b) {
        Z.__detect_user_provided_data = b;
        Z.__detect_user_provided_data.C = "detect_user_provided_data";
        Z.__detect_user_provided_data.isVendorTemplate = !0;
        Z.__detect_user_provided_data.priorityOverride = 0;
        Z.__detect_user_provided_data.isInfrastructure = !1;
        Z.__detect_user_provided_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e) {
            if ("auto" !== e && "manual" !== e && "code" !== e)
              throw c(d, {}, "Unknown user provided data source.");
            if (b.vtp_limitDataSources)
              if ("auto" !== e || b.vtp_allowAutoDataSources) {
                if ("manual" === e && !b.vtp_allowManualDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data via manually specified CSS selectors is not allowed."
                  );
                if ("code" === e && !b.vtp_allowCodeDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data from an in-page variable is not allowed."
                  );
              } else
                throw c(
                  d,
                  {},
                  "Automatic detection of user provided data is not allowed."
                );
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.C = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
        Z.__get_url.runInSiloedMode = !1;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!l(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!l(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.gct = ["google"]),
    (function () {
      function a(b) {
        for (var c = [], d = 0; d < b.length; d++)
          try {
            c.push(new RegExp(b[d]));
          } catch (e) {}
        return c;
      }
      (function (b) {
        Z.__gct = b;
        Z.__gct.C = "gct";
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0;
        Z.__gct.isInfrastructure = !1;
        Z.__gct.runInSiloedMode = !0;
      })(function (b) {
        var c = {},
          d = b.vtp_sessionDuration;
        0 < d && (c[Q.g.hd] = d);
        c[Q.g.Rd] = b.vtp_eventSettings;
        c[Q.g.fg] = b.vtp_dynamicEventSettings;
        c[Q.g.Rb] = 1 === b.vtp_googleSignals;
        c[Q.g.rg] = b.vtp_foreignTld;
        c[Q.g.pg] = 1 === b.vtp_restrictDomain;
        c[Q.g.cf] = b.vtp_internalTrafficResults;
        var e = Q.g.sa,
          f = b.vtp_linker;
        f && f[Q.g.W] && (f[Q.g.W] = a(f[Q.g.W]));
        c[e] = f;
        var g = Q.g.df,
          h = b.vtp_referralExclusionDefinition;
        h &&
          h.include_conditions &&
          (h.include_conditions = a(h.include_conditions));
        c[g] = h;
        var m = hk(b.vtp_trackingId);
        tm(m, c);
        oG(m, b.vtp_gtmEventId);
        I(b.vtp_gtmOnSuccess);
      });
    })();

  (Z.securityGroups.get = ["google"]),
    (Z.__get = function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = tx(String(b.streamId), d, c);
      wx(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    }),
    (Z.__get.C = "get"),
    (Z.__get.isVendorTemplate = !0),
    (Z.__get.priorityOverride = 0),
    (Z.__get.isInfrastructure = !1),
    (Z.__get.runInSiloedMode = !1);
  (Z.securityGroups.detect_scroll_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_scroll_events = b;
        Z.__detect_scroll_events.C = "detect_scroll_events";
        Z.__detect_scroll_events.isVendorTemplate = !0;
        Z.__detect_scroll_events.priorityOverride = 0;
        Z.__detect_scroll_events.isInfrastructure = !1;
        Z.__detect_scroll_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, N: a };
      });
    })();

  (Z.securityGroups.detect_form_interaction_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__detect_form_interaction_events = b;
        Z.__detect_form_interaction_events.C = "detect_form_interaction_events";
        Z.__detect_form_interaction_events.isVendorTemplate = !0;
        Z.__detect_form_interaction_events.priorityOverride = 0;
        Z.__detect_form_interaction_events.isInfrastructure = !1;
        Z.__detect_form_interaction_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, N: a };
      });
    })();

  var wI = {};
  wI.dataLayer = Yi;
  wI.callback = function (a) {
    Mi.hasOwnProperty(a) && nb(Mi[a]) && Mi[a]();
    delete Mi[a];
  };
  wI.bootstrap = 0;
  wI._spx = !1;
  function xI() {
    yi[bk()] = yi[bk()] || wI;
    kk();
    ok() ||
      z(pk(), function (d, e) {
        uw(d, e.transportUrl, e.context);
        M(92);
      });
    Cb(Ni, Z.securityGroups);
    var a = dk(ek()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || M(142);
    Df = Uf;
  }
  (function (a) {
    function b() {
      m = G.documentElement.getAttribute("data-tag-assistant-present");
      Jy(m) && (h = g.qk);
    }
    if (!D["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (G.referrer) {
        var d = Fj(G.referrer);
        c = "cct.google" === Aj(d, "host");
      }
      if (!c) {
        var e = Tn("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((D["__TAGGY_INSTALLED"] = !0),
        Oc("https://cct.google/taggy/agent.js"));
    }
    var f = function (u) {
        var v = "GTM",
          w = "GTM";
        Di && ((v = "OGT"), (w = "GTAG"));
        var x = D["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (D["google.tagmanager.debugui2.queue"] = x),
          Oc(
            "https://" +
              xi.Dd +
              "/debug/bootstrap?id=" +
              $f.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              On()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Ic,
            containerProduct: v,
            debug: !1,
            id: $f.ctid,
            targetRef: { ctid: $f.ctid, isDestination: Tj.fe },
            aliases: Vj(),
            destinations: Yj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        xi.Sj && (y.data.initialPublish = !0);
        x.push(y);
      },
      g = { Om: 1, rk: 2, Bk: 3, Tj: 4, qk: 5 },
      h = void 0,
      m = void 0,
      n = Bj(D.location, "query", !1, void 0, "gtm_debug");
    Jy(n) && (h = g.rk);
    if (!h && G.referrer) {
      var p = Fj(G.referrer);
      "tagassistant.google.com" === Aj(p, "host") && (h = g.Bk);
    }
    if (!h) {
      var q = Tn("__TAG_ASSISTANT");
      q.length && q[0].length && (h = g.Tj);
    }
    h || b();
    if (!h && Ky(m)) {
      var r = function () {
          if (t) return !0;
          t = !0;
          b();
          h && Ic ? f(h) : a();
        },
        t = !1;
      Sc(
        G,
        "TADebugSignal",
        function () {
          r();
        },
        !1
      );
      D.setTimeout(function () {
        r();
      }, 200);
    } else h && Ic ? f(h) : a();
  })(function () {
    try {
      ik();
      if (T(58)) {
      }
      bl().D();
      un();
      Dl();
      var a = ck();
      if (Qj().canonical[a]) {
        var b = yi.zones;
        b && b.unregisterChild(Xj());
        aw().removeExternalRestrictions(ck());
      } else {
        qt();
        Qi.m = "";
        Qi.D = Qi.J;
        Qi.F = "";
        Qi.Z = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Qi.P = "ad_storage|analytics_storage|ad_user_data";
        Qi.Da = "";
        rw();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          tf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) wf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++)
          vf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            ("if" !== u && "unless" !== u) || Cf(r[u]);
          }
          uf.push(r);
        }
        yf = Z;
        zf = oz;
        Wf = new cg();
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var x = data.runtime || [],
            y = data.runtime_lines;
          zz = new Qe();
          EH();
          sf = yz();
          var B = zz,
            A = DH(),
            E = new ld("require", A);
          E.Ib();
          B.m.m.set("require", E);
          for (var F = [], C = 0; C < x.length; C++) {
            var H = x[C];
            if (!Array.isArray(H) || 3 > H.length) {
              if (0 === H.length) continue;
              break a;
            }
            y && y[C] && y[C].length && Nf(H, y[C]);
            try {
              zz.execute(H), T(67) && yk && 50 === H[0] && F.push(H[1]);
            } catch (ya) {}
          }
          T(67) && (Ef = F);
        }
        if (void 0 !== v)
          for (var N = ["sandboxedScripts"], O = 0; O < v.length; O++) {
            var U = v[O].replace(/^_*/, "");
            Ni[U] = N;
          }
        FH(w);
        xI();
        if (!Hi)
          for (var X = sj() ? Si(Qi.P) : Si(Qi.Z), P = 0; P < rl.length; P++) {
            var S = rl[P],
              ma = S,
              ka = X[S] ? "granted" : "denied";
            Xk().implicit(ma, ka);
          }
        Iy();
        vw = !1;
        ww = 0;
        if (
          ("interactive" == G.readyState && !G.createEventObject) ||
          "complete" == G.readyState
        )
          yw();
        else {
          Sc(G, "DOMContentLoaded", yw);
          Sc(G, "readystatechange", yw);
          if (G.createEventObject && G.documentElement.doScroll) {
            var da = !0;
            try {
              da = !D.frameElement;
            } catch (ya) {}
            da && zw();
          }
          Sc(D, "load", yw);
        }
        ny = !1;
        "complete" === G.readyState ? py() : Sc(D, "load", py);
        yk && (tk(Lk), D.setInterval(Kk, 864e5));
        tk(qz);
        tk(Zw);
        tk(vu);
        tk(mm);
        tk(jx);
        tk(Ml);
        tk(et);
        tk(Qk);
        T(67) && (tk(dx), tk(ex), tk(fx));
        yk && T(55) && (tk(rz), tk(tz));
        vz();
        tk(Uk);
        ez();
        oj(1);
        Hx();
        Li = zb();
        wI.bootstrap = Li;
        if (T(58)) {
        }
      }
    } catch (ya) {
      if ((oj(4), yk)) {
        var Da = Fk(!0, !0);
        Rc(Da);
      }
    }
  });
})();
