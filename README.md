# Univeristy CRUD

  CRUD node with mongodb to consume the [universities API](http://universities.hipolabs.com/search)

# Getting started

  Make sure to add your mongo database connection string at `.env` file

  Run `npm install` to get the packages

  Run `npm run dev` to start the application

  Run `npm run test` to see the coverage or open the index.html in `coverage/lcov-report`

## Request examples

  The maximum response itens by response is 20
    
  ### GET

  list all universities: [`localhost:4000/`](http://localhost:4000/universities)

  ### Url params and query examples

  - find one university: [`localhost:4000/:id`](http://localhost:4000/:id)
  - find all universities from one country: [`localhost:4000?country=Brazil`](http://localhost:4000?country=Brazil)
  - index will list 20 universities starting at the index: [`localhost:4000?country=Brazil&index=2`](http://localhost:4000?country=Brazil&index=2)

  ### DELETE

  [`localhost:4000/universities/:id`](http://localhost:4000/universities/:id)

  Response:
  ```JSON
  {
	"message": "University deleted"
  }
  ```

  ### PUT

  - web_pages(string array, required)
  - name(string, required)
  - domains(string array, required)

  [`localhost:4000/universities/:id`](http://localhost:4000/universities/:id)

  Request example: 
  ```JSON
  {
	"web_pages": ["url"],
	"name": "name",
	"domains": ["domains"]
  }

  ```
  ### POST

  - alpha_two_code(string, required)
  - web_pages(string array, required)
  - name(string, required)
  - country(string, required)
  - domains(string array, required)
  - stateProvince(string)

  [`localhost:4000/universities`](http://localhost:4000/universities)

  Request example: 
  ```JSON
    {
    "alpha_two_code": "alpha_two_code",
    "web_pages": ["url"], 
    "name": "name", 
    "country": "country", 
    "domains": ["domain"],
    "stateProvince": "stateProvince"
    }
  ```
# Languages, Frameworks, API's

* [JS](https://www.javascript.com)

* [NODE](https://nodejs.org/en/)

* [TS](https://www.typescriptlang.org)

* [Express](https://expressjs.com)

* [Axios](https://axios-http.com)

* [API](http://universities.hipolabs.com/search)

* [MongoDB]()

* [Mongoose](https://mongoosejs.com)