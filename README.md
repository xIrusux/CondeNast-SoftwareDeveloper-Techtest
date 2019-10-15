# NEWS BY KEYWORD

Response to the Condé Nast Software Developer Tech Test

## Installation instructions

Clone the repo with:

```
git clone https://github.com/fac-17/PFAK-week5.git
```

Install all dependencies with:

```
npm install
```

The project requires you to have a file .env in main directory, containing the API key. I am happy to provide you with tha content of that file on request. Alternativel, you can get your own API key and add a .env file to the root folder with:

```
DB_APIKEYNEWS=your_own_APIkey
```

Once you have all dependencies and the API key, you can run the server with:

```
npm start
```

## Third-party resources

News API: https://newsapi.org/

## User Journey

Our user wants to find news by keyword. The app returns the top three news for the selected country.

The user can use one of the four quick search buttons, or enter a keyword in the search field.

### Edge Case

If the user, does not select a keyword before clicking the search button, an alert message will pop up.

## Design and Architecture

- File structure: all client-side files in public folder, all server-side files in src folder
- All client-side JS in index.js
- One front-end API call directed to our server
- One back-end API call directed to external news API

* Design intentions: serious, minimal, high-end
* Mobile first design
* Design Wireframes:
