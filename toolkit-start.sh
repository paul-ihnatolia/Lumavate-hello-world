#!/bin/bash

DOCKER_IP=$(awk '/inet / && $2 != "127.0.0.1"{print $2}' <(ifconfig))

echo""
echo "Welcome to the Lumavate WidgetToolkit!"
echo "--------------------------------------"
echo ""
echo "Enter your Widget Image name:"
read WIDGET_IMAGENAME
echo ""
echo "Enter the widget's port (4200, 5000, etc):"
read WIDGET_PORT
echo ""

if [[ $(docker ps -q -f name=thor) ]]; then
	echo "Stopping Thor...."
	docker stop thor
fi

if [[ $(docker ps -q -f name=widget) ]]; then
	echo "Stopping Widget...."
	docker stop widget
fi

echo "Running your Widget Container"
docker run --rm -d \
                --volume "$(pwd)"/src:/opt/app/src
				-e "PRIVATE_KEY=LXycaMpw5BzgfhsS4ydNxGzJ36qMnPrQHI8u2x3wQCZCZyGtZ4sOQbkEWnHmVchZEa79a0Y3xK7IKCymSLkugyabbJUGuXfyuoKL" \
				-e "PUBLIC_KEY=mIhuoMJh0jbA5W4pUUNK" \
				-e "APP_SETTINGS=./config/dev.cfg" \
				-e "BASE_URL=http://$DOCKER_IP" \
				-e "WIDGET_URL_PREFIX=/ic/r/" \
				-e "PROTO=http://" \
				-e "API_HOST=https://services-qa.cat.com" \
				-e "API_KEY=643d6d3967514494b8a2fc547ba21303" \
				--name=widget \
				-p $WIDGET_PORT:$WIDGET_PORT \
				$WIDGET_IMAGENAME

echo ""
echo "Running the Widget Toolkit"
docker run --rm -d \
				-e "PUBLIC_KEY=mIhuoMJh0jbA5W4pUUNK" \
				-e "PRIVATE_KEY=LXycaMpw5BzgfhsS4ydNxGzJ36qMnPrQHI8u2x3wQCZCZyGtZ4sOQbkEWnHmVchZEa79a0Y3xK7IKCymSLkugyabbJUGuXfyuoKL" \
				-e "HOST_IP=$DOCKER_IP" \
				-e "WIDGET_PORT=$WIDGET_PORT" \
				--name=thor \
				-p 80:4201 \
				quay.io/lumavate/thor:latest
echo ""
echo "----------------------------------------------------------------------------------"
echo ""
echo "Open a browser and navigate to http://localhost/admin to test your widget"
echo "*NOTE: It might take some time for the containers to fully load*"
echo "Use the command 'docker logs widget -f' to view the current widget logs"
echo ""
