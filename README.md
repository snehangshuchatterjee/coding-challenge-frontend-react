# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

## The context

Stolen bikes are a typical problem in Berlin. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop.

## Must-Have Requirements

- [ ] As a police officer, I want to see a list of reported bike thefts for the Berlin area.
- [ ] As a police officer, I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [ ] As a police officer, I want to see a total number of bike theft cases.
- [ ] As a police officer, for each reported bike theft I want to see:
  - [ ] Case title
  - [ ] Case description
  - [ ] Date of the theft
  - [ ] Date of when the case was reported
  - [ ] Location of the theft
  - [ ] Picture of the bike, if available
- [ ] As a police officer, I want to filter reported bike thefts by partial case title.
- [ ] As a police officer, I want to see a loading state until the list is available.
- [ ] As a police officer, I want to see an error state if the list is unavailable.
- [ ] As a police officer, I want to see an empty state if there are no results.

## Nice-to-Have Requirements

After all must-have requirements have been met, some of the following nice-to-have items can also be included in the app.

- [ ] As a police officer, I want to filter reported bike thefts by date range.
- [ ] As a police officer, I want to see a case detail page that shows:
  - [ ] Case description
  - [ ] Date of the theft
  - [ ] Date of when the case was reported
  - [ ] Location of the theft
  - [ ] Map of the location

## Task

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you’ll need to make requests to a publicly-available [API](https://www.bikewise.org/documentation/api_v2) to get JSON content and print it on view.

The API is known to have some limitations. If you are not able to implement a particular requirement, please provide a description of what and why you could not implements.

For the layout of each page, please refer to the provided wireframes:

- [Index page](./screens/index.png)
- [Error state](./screens/index_error.png)
- [Empty state](./screens/index_empty.png)
- [Loading state](./screens/index_loading.png)
- [Details page](./screens/details.png)

Also, you can take inspiration from those resources:

- [BikeIndex](https://bikeindex.org/bikes?serial=&button=&location=Berlin&distance=100&stolenness=proximity)
- [BikeWise](https://bikewise.org)

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as **fetch** or **flexbox**.

Host the website on the service of your choice (zeit, Heroku, AWS, GCloud, ...)

## Tech Requirements

- React
- Jest + react-testing-library / enzyme
- Tslint, prettier
- Typescript is a plus
- CSSinJS is a plus: styled-components, styled-system, ...

## What we expect

- Build a performant, clean and well-structured solution
- Tests, quality and coverage.
- Commit early and often. We want to be able to check your progress

## Instructions

- Fork this repo
- The challenge is on!
- Make the app public. Deploy it using the service of your choice
- Create a pull request
- Please return your working solution within 7 days of receiving this challenge

## License

We have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).