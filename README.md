# OnBox

This is a [brief description of your project]. This application was created as part of [assignment, project, or task] and includes both frontend and backend functionality.

## Table of Contents

- [Project Overview](#project-overview)
- [Deployed Links](#deployed-links)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Screen Recording](#screen-recording)
- [Commit History](#commit-history)

## Project Overview

This application allows users to [brief explanation of what the app does, e.g., sign up, login, browse content, etc.]. The project is divided into two main parts:

- **Frontend**: Built using React and Chakra UI.
- **Backend**: Built using Node.js, Express, and MongoDB.

## Deployed Links

- **Frontend Link**: [Frontend Deployed Link](https://on-mail-app.netlify.app/)  
- **Backend Link**: [Backend Deployed Link](https://onbox-1.onrender.com)

## Technologies Used

### Frontend

- React
- Chakra UI
- Axios (for API requests)

### Backend

- Node.js
- Express
- MongoDB
- JWT for authentication
- Bcrypt for password hashing

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- MongoDB instance running (if using locally)

### Steps to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mayank1st/OnBox.git
   cd your-repo
   ```

2. **Install frontend dependencies**

   Navigate to the frontend directory and install the required packages:

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**

   Navigate to the backend directory and install the required packages:

   ```bash
   cd backend
   npm install
   ```

4. **Environment variables**

   - For the backend, create a `.env` file in the root of the backend directory and add your environment variables:

     ```
     PORT=8000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     ```

5. **Run the backend**

   In the backend directory:

   ```bash
   npm start
   ```

6. **Run the frontend**

   In the frontend directory:

   ```bash
   npm start
   ```

7. **Visit the application locally**

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:8000`

## API Documentation

### Base URL

`https://backend-link.com/api/v1/`

### Endpoints

| Endpoint          | Method | Description                        | Example Request/Response |
| ----------------- | ------ | ---------------------------------- | ------------------------ |
| `/auth/register`  | POST   | Register a new user                | Example in JSON format    |
| `/auth/login`     | POST   | Log in a user                      | Example in JSON format    |
| `/auth/logout`    | GET    | Log out the user                   | Example in JSON format    |
| `/users/me`       | GET    | Get details of the logged-in user  | Example in JSON format    |

### Example API Request for Registration

```bash
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "your-authentication-token",
  "user": {
    "id": "user-id",
    "username": "testuser",
    "email": "test@example.com"
  }
}
```

## Screen Recording

You can watch a [screen recording of the app here](https://screen-recording-link.com). The video showcases all the major functionalities of the application, including:

- Signing up and logging in
- Interacting with the API
- How data flows between frontend and backend


