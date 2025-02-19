const { faker } = require('@faker-js/faker');

// Function to generate a fake news article
function generateFakeNews() {
    return {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(3),
        author: faker.person.fullName(),
        date: faker.date.recent().toISOString(),
        category: faker.helpers.arrayElement(["Politics", "Technology", "Sports", "Health", "Entertainment"]),
        source: faker.internet.url()
    };
}

// Generate multiple fake news articles
function generateMultipleFakeNews(count = 5) {
    return Array.from({ length: count }, generateFakeNews);
}


module.exports = { generateFakeNews, generateMultipleFakeNews };
