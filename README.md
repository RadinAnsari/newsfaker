# Fake News Generator

This is a fun and simple **Fake News npm package** . It generates random fake news headlines, including categories, sources, and dates. This project is for educational and entertainment purposes only, and should not be used for any malicious activities.

## Features

- Generate random fake news headlines
- Simulate different news categories like politics, technology, sports, and more
- Fake news sources and dates are generated using the Faker.js library

## Usage

First use under command and like this example use it . 
```bash
npm i fakernews
```

```bash
const {generateMultipleFakeNews,generateFakeNews} = require('fakernews');
console.log(generateFakeNews());
console.log(generateMultipleFakeNews(10));

```
