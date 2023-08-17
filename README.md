# CRUD-assignment

Welcome to CRUD-Assignment! This is a basic CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and MongoDB. It allows you to perform CRUD operations on a collection of items.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB instance set up or access to a MongoDB database.
- Postman or any other API testing tool.

## Installation

1. Clone this repository:

```terminal 
  git clone https://github.com/praneshdeshmukh/Express-JS.git
```

3. Navigate to the project directory:
```terminal
  cd Express-JS/crud-assignment
```

5. Install the dependencies:
```terminal
  npm install
```

7. Create a `.env` file in the root directory and set your MongoDB connection URI:
```javascript
MONGODB_URI=mongodb+srv://<yourusername>:<yourpassword>@cluster0.zfcokkr.mongodb.net/yourdatabasename
```

## Usage

1. Start the application:
```terminal
npm run start
```

3. Open Postman or your preferred API testing tool.

## Postman Endpoints

[Click here to access the Postman collection JSON file](https://raw.githubusercontent.com/praneshdeshmukh
/Express-JS/master/crud-assignment.postman_collection.json)

This link will allow you to download the Postman collection JSON file containing all the API endpoints and examples.


## API Endpoints

- **POST /register:** Create a new user. [requirement: name, email, password, confirmPassword]
- **POST /login:** login into account. [requirement: email, password]

API requests and responses should be in JSON format.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
