### Based on the React/Redux + Express Boilerplate in ES6/7 & Docker

Run the app in Docker
```
docker-compose build
```

Run Widget:
```
docker run --rm -d --volume "$(pwd)"/src:/opt/app/src -e "PUBLIC_KEY=mIhuoMJh0jbA5W4pUUNK" -e "PRIVATE_KEY=LXycaMpw5BzgfhsS4ydNxGzJ36qMnPrQHI8u2x3wQCZCZyGtZ4sOQbkEWnHmVchZEa79a0Y3xK7IKCymSLkugyabbJUGuXfyuoKL" -e "BASE_URL=YOUR DOCKER IP" -e "WIDGET_URL_PREFIX=/ic/r/" --name=react_widget -p 8080:8080 image_name
```

Run Tor:
```
docker run --rm -d -e "PUBLIC_KEY=mIhuoMJh0jbA5W4pUUNK" -e "PRIVATE_KEY=LXycaMpw5BzgfhsS4ydNxGzJ36qMnPrQHI8u2x3wQCZCZyGtZ4sOQbkEWnHmVchZEa79a0Y3xK7IKCymSLkugyabbJUGuXfyuoKL" -e "HOST_IP=YOUR DOCKER IP" -e "WIDGET_PORT=8080" --name=thor -p 80:4201 quay.io/lumavate/thor:latest
```

Run the app in Development Mode
```
npm/yarn install
npm/yarn run dev
```