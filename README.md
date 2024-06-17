<h1>Let's Talk</h1>

## Overview

This repository contain the Let's Talk App Code build using the React.js for Frontend and Node.js for Backend. The UI is taken from the Whatsapp Web.

## Features

- User can Login using a Google Account
- User Search Functionality
- User can send the message and file(image,txt,pdf)
- User will have a real-time communication

## Technology Used

- React.js
- Express.js
- MongoDB
- MaterialUI
- MaterilaIcon
- Socket.io

## Getting Started

1. Clone the repository and navigate to the backend directory:

   ```bash
   git clone https://github.com/krishna102001/letstalk.git
   ```

### Frontend

2. In terminal run the command:

   ```bash
   cd frontend
   npm i
   ```

3. Create a `.env` files in root directory and add the following environment variables:

   ```env
   VITE_CLIENT_ID="{Your Google Cloud Client ID}"
   ```

4. Start the frontend server:

   ```bash
   npm run dev
   ```

   The frontend server should now be running on `http://localhost:5173`.

### Backend

5. In terminal run the command:

   ```bash
   cd backend
   npm i
   ```

6. Create a `.env` files in root directory and add the following environment variables:

   ```env
   MONGODB_URI="{Your MongoDB driver Url}"
   ```

7. Start the backend server:

   ```bash
   npm start
   ```

   The backend server should now be running on `http://localhost:4000`.

### Socket

8. In terminal run the command:

   ```bash
   cd socket
   npm i
   ```

9. Start the socket server:

   ```bash
   npm start
   ```

   The socket server should now be running on `http://localhost:9000`.
