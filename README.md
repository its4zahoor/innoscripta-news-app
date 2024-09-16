# Innoscripta News App

## Environment Variables

Ensure that any environment variables required by your Next.js application are specified in the `.env` file and replace `<your_key>` with your API Key for that platform

```
VITE_NEWSORG_KEY=<your_key>
VITE_GUARDIAN_KEY=<your_key>
VITE_NYT_KEY=<your_key>
```

## Run in container

To build and run your Docker container:

```
docker build -t innoscripta-news-app .
docker run -p 80:80 innoscripta-news-app
```

## Run on localhost:

Clone the repo or unzip in the directory say `innoscripta-news-app`

```bash
cd innoscripta-news-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Dockerizing the App

## Prerequisites

- Docker must be installed on your machine.

## Building the Docker Image

1. Clone the repository:

   ```bash
   git clone git@github.com:its4zahoor/innoscripta-innoscripta-news-app.git
   cd innoscripta-innoscripta-news-app
   ```

2. Build the Docker image:
   ```bash
   docker build -t innoscripta-news-app .
   ```

## Running the Application in a Docker Container

1. Start the container:

   ```bash
   docker run -p 3000:3000 innoscripta-news-app
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Managing the Container

- **Stop the container:**

  ```bash
  docker ps
  docker stop <container_id>
  ```

- **Remove the container:**

  ```bash
  docker rm <container_id>
  ```

- **Remove the Docker image:**
  ```bash
  docker rmi news
  ```
