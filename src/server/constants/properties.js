export const PROPERTIES = [
  {
    "classification": "Sign Up",
    "default": "#2f80bf",
    "label": "Primary Color",
    "name": "signUpPrimaryColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  },
  {
    "classification": "Sign Up",
    "default": "#ffffff",
    "label": "Font Color",
    "name": "signUpFontColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  },
  {
    "classification": "Questions",
    "default": "#2f80bf",
    "label": "Primary Color",
    "name": "questionsPrimaryColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  },
  {
    "classification": "Questions",
    "default": "#ffffff",
    "label": "Font Color",
    "name": "questionsFontColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  },
  {
    "classification": "Questions",
    "default": 5,
    "label": "Number of questions to display",
    "name": "questionCount",
    "options": {
      "max": 10,
      "min": 1
    },
    "section": "Questions",
    "type": "numeric"
  },
  {
    "classification": "Questions",
    "default": true,
    "label": "Randomize",
    "name": "randomize",
    "options": null,
    "section": "Questions",
    "type": "toggle"
  },
  {
    "classification": "Questions",
    "default": [],
    "label": "Question",
    "name": "questions",
    "options": {
      "categories": "question",
      "components": [
        {
          "category": "question",
          "displayName": "Question : None",
          "label": "Question",
          "properties": [
            {
              "classification": null,
              "default": "",
              "label": "Title",
              "name": "questionTitle",
              "options": {
                "rows": 2
              },
              "section": null,
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "",
              "label": "Title",
              "name": "asnwer1Title",
              "options": {
                "rows": 2
              },
              "section": "Answer 1",
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "false",
              "label": "Is valid",
              "name": "asnwer1Valid",
              "options": {
                "false": "False",
                "true": "True"
              },
              "section": "Answer 1",
              "type": "dropdown"
            },
            {
              "classification": null,
              "default": "",
              "label": "Title",
              "name": "asnwer2Title",
              "options": {
                "rows": 2
              },
              "section": "Answer 2",
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "false",
              "label": "Is valid",
              "name": "asnwer2Valid",
              "options": {
                "false": "False",
                "true": "True"
              },
              "section": "Answer 2",
              "type": "dropdown"
            },
            {
              "classification": null,
              "default": "",
              "label": "Title",
              "name": "asnwer3Title",
              "options": {
                "rows": 2
              },
              "section": "Answer 3",
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "false",
              "label": "Is valid",
              "name": "asnwer3Valid",
              "options": {
                "false": "False",
                "true": "True"
              },
              "section": "Answer 3",
              "type": "dropdown"
            },
            {
              "classification": null,
              "default": "",
              "label": "Title",
              "name": "asnwer4Title",
              "options": {
                "rows": 2
              },
              "section": "Answer 4",
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "false",
              "label": "Is valid",
              "name": "asnwer4Valid",
              "options": {
                "false": "False",
                "true": "True"
              },
              "section": "Answer 4",
              "type": "dropdown"
            }
          ],
          "type": "question"
        }
      ]
    },
    "section": "Questions",
    "type": "components"
  },
  {
    "classification": "Leaderboard",
    "default": "#ffffff",
    "label": "Font Color",
    "name": "leaderboardFontColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  }
]
