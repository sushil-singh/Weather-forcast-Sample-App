# Weather-forcast-Sample-App


# Installation

```javascript

    // clone the application with git clone

```

# Running the application

```javascript

    node src/index.js


```

# Building docker image

```bash

    docker build -t weather-forecast:latest .

```

# Running docker container

```bash

    // 9000 port is given since the docker file contains 9000 port
    // Container port 9000 is maped with system port 9000. It can be chaned to any other port
    docker run -it -d -p 9000:9000 weather-forecast:latest

```

#  Use below API for weather forecast by providing city naame and orderBy

```bash

    http://localhost:9000/weather/forecast?city=<city-name>&orderBy=<orderBy asc|desc>

```


