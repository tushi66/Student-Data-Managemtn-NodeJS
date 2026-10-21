# Student Data Table Management System

A student management application built to manage student records efficiently using **Node.js, Express.js, and MongoDB**. The project provides RESTful APIs for creating, viewing, updating, deleting, searching, sorting, and filtering student records, along with pagination.

## Features

- **Student Management:** Store and manage student information.
- **CRUD Operations:** Create, Read, Update, and Delete student records.
- **Search:** Search students by name or email.
- **Sorting:** Sort student records by name in ascending or descending order.
- **Filtering:** Filter students by city and category.
- **Pagination:** Display student records page by page.
- **REST API:** Handle requests through RESTful endpoints.
- **MongoDB Integration:** Store student records in a MongoDB database.
- **Environment Variables:** Keep configuration settings in a `.env` file.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman
- JavaScript (ES Modules)

## Project Structure

```text
student-data-table/
├── config/
│   └── db.js
├── models/
│   └── Student.js
├── controllers/
│   └── studentController.js
├── routes/
│   └── studentRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Student Fields

Each student record contains the following information:

| Field | Description |
|---|---|
| name | Student's full name |
| email | Student's email address |
| phone | Student's phone number |
| city | Student's city |
| category | Student's course or category |

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd student-data-table
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
```

Make sure MongoDB is installed and running locally, or use your configured MongoDB connection string.

### 4. Start the Server

Development mode:

```bash
npm run dev
```

Production-style start command:

```bash
npm start
```

The API will run at:

```text
http://localhost:5000
```

## API Endpoints

Base URL: `http://localhost:5000/api/students`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a student by ID |
| POST | `/api/students` | Create a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

### Create a Student

**POST** `/api/students`

Example JSON body:

```json
{
  "name": "Rahul Patel",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "city": "Surat",
  "category": "Full Stack"
}
```

### Search Students

```text
GET /api/students?search=Rahul
```

Search by student name or email.

### Sort Students

```text
GET /api/students?sort=asc
GET /api/students?sort=desc
```

Sort student names alphabetically in ascending or descending order.

### Filter Students

Filter by city:

```text
GET /api/students?city=Surat
```

Filter by category:

```text
GET /api/students?category=Full%20Stack
```

### Pagination

```text
GET /api/students?page=1&limit=5
```

- `page`: Page number.
- `limit`: Number of records per page.

### Combine Query Parameters

```text
GET /api/students?search=Rahul&city=Surat&sort=asc&page=1&limit=5
```

This combines search, city filtering, sorting, and pagination in one request.

## Testing with Postman

1. Start the Node.js server.
2. Open Postman.
3. Enter the API endpoint.
4. Select the appropriate HTTP method.
5. For POST and PUT requests, choose **Body → raw → JSON** and enter the student data.
6. Send the request and inspect the response.

Test all CRUD operations and query parameters to verify that the API works correctly.

## Environment and Security

- Add `.env` to `.gitignore`.
- Never commit database credentials or secrets.
- Keep `package-lock.json` in the repository.
- Do not upload `node_modules` to GitHub.

## Future Improvements

- Build a responsive React.js frontend.
- Add a student data table with pagination controls.
- Create forms for adding and editing student records.
- Add confirmation before deleting a student.
- Improve error handling and form validation.

## Learning Objectives

This project helps practice:

- Node.js and Express.js fundamentals.
- REST API development.
- MongoDB and Mongoose.
- MVC-style project organization.
- CRUD operations.
- Search, sorting, filtering, and pagination.
- API testing with Postman.
- Environment configuration and GitHub documentation.

## Author

**Tushar Patel**

GitHub: https://github.com/tushi66

---

*This project is developed for learning and practicing backend development and student record management.*
