# Weather-Forecast-Sample-App


# Installation

```bash

    // clone the application with git clone
    git clone https://github.com/sushil-singh/Weather-forcast-Sample-App.git

```

# Running the application in local

```javascript
    // Install nodejs and npm in your machine and run below command
    $ npm install
    $ node src/index.js


```

# Building docker image

```bash
    // Install docker in your machine and run below command
    $ docker build -t weather-forecast:latest .

```

# Running docker container

```bash

    // 9000 port is given since the docker file contains 9000 port
    // Container port 9000 is maped with system port 9001. It can be changed to any other port
    $ docker run -it -d -p 9001:9000 weather-forecast:latest

```

#  Use below API for weather forecast by providing city name and orderBy

```bash

    http://localhost:9001/weather/forecast?city=<city-name>&orderBy=<orderBy asc|desc>

```

