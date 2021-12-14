# React Web Scraper Project

### Overview

This project scrapes the given product page of a product on [Crate & Barrel](https://www.crateandbarrel.com/). The user enters a URL, and it scrapes the web page for product details using Selenium Web Driver. The search history is kept using local storage and can be viewed by the user. 

### Challenges

Originally I wanted to use BeautifulSoup, but the website in question was able to detect that method, and prevent the scraping. Selenium was able to get around this, so that was used instead. 

### Improvements

Several improvements could be made given more time:
- Chrome could be run headless to prevent a browser window from opening
- Instead of using local storage, user history could be stored using SQL, such as with SQLAlchemy 
- A loading icon could be added to give feedback to user while the product information is being scraped
- The URL could be cleared from the search box when the scraping is complete
- Images could be scraped and displayed as well