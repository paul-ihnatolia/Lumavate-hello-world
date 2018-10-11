export const PROPERTIES = [
  {
    "classification": "Widget",
    "default": "Quiz",
    "helpText": "\nThe name of the page, used for identification in the designer\n    ",
    "label": "Name",
    "name": "instance__name",
    "options": {},
    "section": "Widget Settings",
    "type": "text"
  },
  {
    "classification": "Widget",
    "default": {
      "componentType": "normal"
    },
    "helpText": "\nDetermines the role that a page has within the site.  A page can be one of the following types:\n\n* **Normal** - A typical page.\n* **Home** - The first page a user visits for a site.  There can be only one home page.\n* **Auth** - The page that will be redirected to if another page requires a login\n    ",
    "label": "Page Type",
    "name": "pageType",
    "options": {
      "categories": [
        "page-type"
      ],
      "components": [
        {
          "category": "page-type",
          "displayName": null,
          "icon": "a",
          "label": "<Normal>",
          "properties": [],
          "section": "Widget",
          "type": "normal"
        },
        {
          "category": "page-type",
          "displayName": null,
          "icon": "a",
          "label": "Home",
          "properties": [
            {
              "classification": null,
              "default": "Home",
              "helpText": "\nProvides a human-readable name for the application as it is intended to be\ndisplayed to the user, for example among a list of other applications or\nas a label for an icon.\n    ",
              "label": "Name",
              "name": "displayName",
              "options": {},
              "section": "App Manifest",
              "type": "text"
            },
            {
              "classification": null,
              "default": "Home",
              "helpText": "\nProvides a short human-readable name for the application. This is intended\nfor use where there is insufficient space to display the full name of the\nweb application.\n    ",
              "label": "Short Name",
              "name": "shortName",
              "options": {},
              "section": "App Manifest",
              "type": "text"
            },
            {
              "classification": null,
              "default": "#fff",
              "helpText": "\nDefines the expected background color for the web application. This value\nrepeats what is already available in the application stylesheet, but can\nbe used by browsers to draw the background color of a web application when\nthe manifest is available before the style sheet has loaded. This creates\na smooth transition between launching the web application and loading the\napplication's content.\n    ",
              "label": "Background Color",
              "name": "backgroundColor",
              "options": {},
              "section": "App Manifest",
              "type": "color"
            },
            {
              "classification": null,
              "default": "#fff",
              "helpText": "\nDefines the default theme color for an application. This sometimes affects\nhow the application is displayed by the OS (e.g., on Android's task\nswitcher, the theme color surrounds the application).\n    ",
              "label": "Theme Color",
              "name": "themeColor",
              "options": {},
              "section": "App Manifest",
              "type": "color"
            },
            {
              "classification": null,
              "default": null,
              "helpText": "\nUsed to identify the application in variety of contexts, such as when\nan experience is sent via SMS.\n    ",
              "label": "Splash Screen Icon",
              "name": "icon",
              "options": {},
              "section": "App Manifest",
              "type": "image-upload"
            },
            {
              "classification": null,
              "default": null,
              "helpText": "\nUsed to identify the application when a small image format is required,\nsuch as when a browser is rendering the favicon\n    ",
              "label": "Favicon",
              "name": "favicon",
              "options": {},
              "section": "App Manifest",
              "type": "image-upload"
            }
          ],
          "section": "General",
          "type": "home"
        },
        {
          "category": "page-type",
          "displayName": null,
          "icon": "a",
          "label": "Auth",
          "properties": [],
          "section": "Widget",
          "type": "auth"
        }
      ]
    },
    "section": "Widget Settings",
    "type": "component"
  },
  {
    "classification": "General",
    "default": false,
    "label": "Display Background Image",
    "name": "displayBackgroundImage",
    "options": null,
    "section": "General Properties",
    "type": "toggle"
  },
  {
    "classification": "General",
    "default": {},
    "label": "Background Image",
    "name": "backgroundImage",
    "options": null,
    "section": "General Properties",
    "type": "image-upload"
  },
  {
    "classification": "General",
    "default": "#e2e2e2",
    "label": "Background Color",
    "name": "backgroundColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "General Properties",
    "type": "color"
  },
  {
    "classification": "Questions",
    "default": "#2f80bf",
    "label": "Primary Color",
    "name": "primaryColor",
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
    "name": "fontColor",
    "options": {
      "readonly": false,
      "rows": 0
    },
    "section": "Display Properties",
    "type": "color"
  },
  {
    "classification": "Toolbar",
    "default": {
      "componentType": "advanced-toolbar"
    },
    "label": "Toolbar",
    "name": "toolbar",
    "options": {
      "categories": "advanced-toolbar",
      "components": [
        {
          "category": "toolbar",
          "displayName": "Advanced Toolbar",
          "icon": "/iot/quiz/discover/icons/advanced-toolbar.svg",
          "label": "Advanced Toolbar",
          "properties": [
            {
              "classification": null,
              "default": true,
              "label": "Display Toolbar",
              "name": "displayToolbar",
              "options": null,
              "section": "Display Options",
              "type": "toggle"
            },
            {
              "classification": null,
              "default": "Top",
              "label": "Location",
              "name": "displayLocation",
              "options": {
                "Bottom": "Bottom",
                "Top": "Top"
              },
              "section": "Display Options",
              "type": "dropdown"
            },
            {
              "classification": null,
              "default": "#f2f2f2",
              "label": "Background Color",
              "name": "backgroundColor",
              "options": {
                "readonly": false,
                "rows": 0
              },
              "section": "Toolbar Color",
              "type": "color"
            },
            {
              "classification": null,
              "default": "#a2a2a2",
              "label": "Icon Color",
              "name": "iconColor",
              "options": {
                "readonly": false,
                "rows": 0
              },
              "section": "Toolbar Color",
              "type": "color"
            },
            {
              "classification": null,
              "default": "#ffffff",
              "label": "Selected Color",
              "name": "selectedColor",
              "options": {
                "readonly": false,
                "rows": 0
              },
              "section": "Toolbar Color",
              "type": "color"
            }
          ],
          "section": "General",
          "type": "advanced-toolbar"
        }
      ]
    },
    "section": "Toolbar Properties",
    "type": "component"
  },
  {
    "classification": "Toolbar",
    "default": [],
    "label": "Toolbar Items",
    "name": "toolbarItems",
    "options": {
      "categories": "baritem",
      "components": [
        {
          "category": "baritem",
          "displayName": "Toolbar Item",
          "icon": "/iot/quiz/discover/icons/toolbaritem.svg",
          "label": "Toolbar Item",
          "properties": [
            {
              "classification": null,
              "default": "more_horiz",
              "label": "Material Icon",
              "name": "icon",
              "options": {
                "account_box": "Profile - Box",
                "account_circle": "Profile - Circle",
                "announcement": "Announcement",
                "favorite": "Favorite",
                "help": "Help",
                "home": "Home",
                "info": "Info",
                "language": "Website",
                "more_horiz": "More",
                "person": "Profile",
                "phone": "Phone",
                "question_answer": "Question/Answer",
                "schedule": "Schedule",
                "search": "Search",
                "settings": "Settings",
                "share": "Share",
                "shopping_cart": "Shopping Cart",
                "trending_up": "Graph",
                "turned_in": "Bookmark"
              },
              "section": null,
              "type": "dropdown"
            },
            {
              "classification": null,
              "default": "",
              "label": "Text",
              "name": "title",
              "options": {
                "rows": 0
              },
              "section": null,
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": {},
              "label": "Navigate To",
              "name": "pageLink",
              "options": null,
              "section": null,
              "type": "page-link"
            }
          ],
          "section": "General",
          "type": "toolbaritem"
        }
      ]
    },
    "section": "Toolbar Items",
    "type": "components"
  },
  {
    "classification": "Questions1",
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
    "classification": "Questions1",
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
    "label": "Question Label",
    "name": "questions",
    "section": "Questions Section",
    "type": "components",
    "options": {
      "components": [
        {
          "displayName": "Question : None",
          "icon": "/iot/quiz/discover/icons/question.svg",
          "label": "Question Label",
          "properties": [
            {
              "classification": null,
              "default": "",
              "label": "Question Label",
              "name": "title",
              "options": {
                "rows": 2
              },
              "section": null,
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "",
              "label": "Information",
              "name": "answer",
              "options": {
                "rows": 2
              },
              "section": null,
              "type": "translated-text"
            },
            {
              "classification": null,
              "default": "true",
              "label": "Answer",
              "name": "value",
              "options": {
                "false": "False",
                "true": "True"
              },
              "section": null,
              "type": "dropdown"
            }
          ]
        }
      ]
    }
  }
]
