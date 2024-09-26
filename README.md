# Innoscripta News App

This is a react application and uses 3 endpoints for news aggregations. To keep the bundle size and docker image size to minimal, no UI components libaries are used but tailwind-css is used for styling which is a development dependency. Vite is used for bundling and docker for containerization.

## Thought behind things

- The header "News of the Day" is the news with the longest description
- Preferences are respected everytime but some combinations may result in zero results, in that case, Please tickle around with filters and preferences.
- Placeholder Images are displayed if the image url is null or empty
- Duplicate News will be visible since multiple sources can contains that same news
- Polling interval is set to 5 minutes as fews API have limitations for API calls

## Environment Variables

Ensure that the following environment variables are specified in the `.env` file, use links below to create key for that platform

- `VITE_NYT_KEY` can be created from https://developer.nytimes.com/get-started
- `VITE_NEWSORG_KEY` can be created from https://newsapi.org/docs/get-started
- `VITE_GUARDIAN_KEY` can be created from https://bonobo.capi.gutools.co.uk/register/developer

Create a `.env` file in the root directory, paste the following and replace `<your_key>` with your API Key created from above

```
VITE_NYT_KEY=<your_key>
VITE_NEWSORG_KEY=<your_key>
VITE_GUARDIAN_KEY=<your_key>
```

## Run on localhost:

Nodejs and Git must be installed

- [Install Nodejs](https://nodejs.org/en/download/package-manager)
- [Install Git](https://git-scm.com/downloads)

Clone the repo or unzip in the directory, say `innoscripta-news-app`

```bash
git clone https://github.com/its4zahoor/innoscripta-news-app.git
cd innoscripta-news-app

npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Run in container

To build and run your Docker container:

```bash
git clone https://github.com/its4zahoor/innoscripta-news-app.git
cd innoscripta-news-app

docker build -t innoscripta-news-app .
docker run -p 80:80 innoscripta-news-app
```

Open your browser and go to http://localhost to view the application.

# Dockerize the App

Docker and git must be installed on your machine.

- [Install Docker Engine](https://docs.docker.com/engine/install/)
- [Install Git](https://git-scm.com/downloads)

## Build the Docker Image

1. Clone the repository:

   ```bash
   git clone https://github.com/its4zahoor/innoscripta-news-app.git
   cd innoscripta-news-app
   ```

2. Build the Docker image:
   ```bash
   docker build -t innoscripta-news-app .
   ```

## Run in a Docker Container

1. Start the container:

   ```bash
   docker run -p 80:80 innoscripta-news-app
   ```

2. Open your browser and go to http://localhost to view the application.

## Manage the Container

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
