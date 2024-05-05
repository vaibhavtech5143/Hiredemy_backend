# Hiredmy Backend Assignment : 

## Tech Stack

**Server:** Node, Express , Zod , Prisma.


## Run Locally

Clone the project

```bash
  git clone https://github.com/vaibhavtech5143/Hiredemy_backend.git
```

Go to the project directory

```bash
  cd Hiredemy_backend
```

Install dependencies

```bash
  npm install
```

Enter Credentials In .ENV FILE

```bash
PORT=3000
DATABASE_HOST=localhost #Your Database host for eg if mysql running in local then it would be localhost
DATABASE_USER=      # Your Database User Name
DATABASE_PASSWORD=  # Your Database Password
DATABASE_NAME=hiredemy_backend # Backend Name That you want

```

Start the server

```bash
  npm run dev
```


## Demo

It is hosted on render and railway, ypu can use any of it  due to this it might take some time at first request, make first request it would take about 2 to 4 minutes but after that it will work flawlessly

Railway server would be faster than render ,try first railway server.

GET https://hiredemybackend-production.up.railway.app/assistant/3


GET https://hiredemy-backend.onrender.com/assistant/3




## Using the Postman Collection

1. **Download and install Postman:**  
   If you haven't already, download and install [Postman](https://www.postman.com/downloads/).

2. **Download the provided Postman collection file:**  
   You can download the provided Postman collection file from [this link](https://drive.google.com/file/d/1UtbdLP76ui9Nxg0BTLaq9LXtvTV2YQCD/view?usp=sharing).

3. **Import the downloaded collection file into Postman:**  
   After downloading the collection file, import it into Postman. You can do this by clicking on the "Import" button in Postman and selecting the downloaded file from your local directory.

4. **Adjust any necessary environment variables or headers:**  
   After importing the collection, review the environment variables or headers to ensure they are configured correctly for your local setup. Modify any values as needed to match your environment.

5. **Start making requests:**  
   Once you've imported the collection and configured any necessary variables, you can start making requests to the endpoints provided in the collection. Simply select a request from the collection, click "Send", and observe the response.




## API Reference

#### Get Specific assistant data


```http
  GET /assistant/{id}

  GET https://hiredemybackend-production.up.railway.app/assistant/3

  GET https://hiredemy-backend.onrender.com/assistant/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to fetch |

#### Post assistant Data or create assistant


```http
  POST /assistant

  POST https://hiredemybackend-production.up.railway.app/assistant/

  POST https://hiredemy-backend.onrender.com/assistant/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to fetch |
| `name`      | `string` | **Required**. Name of the assistant. |
| `mobile`      | `string` | **Required**. Mobile number of the assistant. |
| `email`      | `string` | **Required**.  Email address of the assistant. |
| `salary`      | `number` | **Required**. Salary of the assistant. |
| `city`      | `string` | **Required**. City where the assistant is located. |
| `country`      | `string` | **Required**. Country where the assistant is located. |
| `department`      | `string` | **Required**. Department of the assistant. |
| `role`      | `string` | **Required**. Role of the assistant. |

```http
  PUT /assistant/{id}

  PUT https://hiredemybackend-production.up.railway.app/assistant/3

  PUT https://hiredemy-backend.onrender.com/assistant/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to change data |

```http
  DELETE /assistant/{id}

  DELETE https://hiredemybackend-production.up.railway.app/assistant/3

  DELETE https://hiredemy-backend.onrender.com/assistant/3
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to delete data |


### Optimizations Implemented:

1. **Input Validation**:
   - Implemented validation for the required fields (`name`, `mobile`, `email`, `salary`, `city`, `country`, `department`, `role`) before creating an assistant record. This ensures that the incoming data is validated before processing.

2. **Error Handling**:
   - Implemented error handling for database connection errors, database initialization errors, and table creation errors. This ensures that errors are caught and logged appropriately, preventing unexpected crashes and providing better feedback to developers.

3. **Database Connection Pooling**:
   - Implemented a connection pool for managing database connections, which helps improve performance and scalability by efficiently reusing connections.

4. **Database Initialization**:
   - The application checks if the specified database exists and creates it if not. This ensures that the database is properly initialized before performing any operations.

5. **Table Creation**:
   - Implemented table creation logic to create the `assistants` table if it doesn't exist. This ensures that the required table structure is in place for storing assistant records.

## Screenshots

![App Screenshot](https://i.ibb.co/48WzmD0/get.png)

![App Screenshot](https://i.ibb.co/T1bP6Q6/post.png)

![App Screenshot](https://i.ibb.co/1RBPqNG/update.png)

![App Screenshot](https://i.ibb.co/PgQ2gdJ/delete.png)

![App Screenshot](https://i.ibb.co/6Y2fNQS/error.png)


## 🚀 About Me
Hi 👋, I'm Vaibhav Singh
A passionate fullstack developer from India


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vaibhavsingh2633.vercel.app)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vaibhav-singh-0785291b5)


