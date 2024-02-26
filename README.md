# JavascriptUrlShortener
Learning how to create a url shortener and how they work! [(following Youtube...)](https://www.youtube.com/watch?v=SLpUKAGnm-g)

## Features

- **URL Shortening:** Convert long URLs into short, manageable links.
- **Link Management:** Users can view, copy, and delete their shortened URLs.
- **Analytics:** Basic analytics for each shortened URL (e.g., click counts).
- **Responsive Design:** Fully responsive web design thanks to Bootstrap.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository to your local machine:

git clone https://github.com/your-username/your-project-name.git

css


2. Navigate to the project directory:

cd your-project-name

markdown


3. Install the necessary dependencies:

npm install

csharp


4. Start the MongoDB service on your machine. The way you do this will depend on your operating system.

5. Create a `.env` file in the root directory of the project and add the following environment variables:

DB_URI=mongodb://localhost:27017/urlShortener
PORT=5000

markdown


6. Start the server:

npm start

markdown


The application should now be running on [http://localhost:5000](http://localhost:5000).

## Usage

To shorten a URL, simply enter the long URL into the input field on the homepage and click the "Shorten" button. Your shortened URL will be displayed, which you can copy and share.

## Built With

- [Node.js](https://nodejs.org/) - The runtime server environment
- [Express.js](https://expressjs.com/) - The web application framework
- [MongoDB](https://www.mongodb.com/) - The database
- [EJS](https://ejs.co/) - The templating engine
- [Bootstrap](https://getbootstrap.com/) - The front-end framework