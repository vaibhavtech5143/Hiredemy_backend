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

It is hosted on render due to this it might take some time at first request, make first request it would take about 2 to 4 minutes but after that it will work flawlessly

GET https://hiredemy-backend.onrender.com/assistant/3


## API Reference

#### Get Specific assistant data


```http
  GET /assistant/{id}
  GET https://hiredemy-backend.onrender.com/assistant/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to fetch |

#### Post assistant Data or create assistant


```http
  POST /assistant
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
  PUT https://hiredemy-backend.onrender.com/assistant/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of assistant to change data |

```http
  DELETE /assistant/{id}
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


