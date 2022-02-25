# Getting Started with Express App

In the project directory, you can run:

    npm start

Then we boot up DynamoDB by following these instructions found [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

Once you're finished reading the command to start the DynamoDB enter this: 
    
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

## Creating Local Database
To create and seed a local data run the commands: 

This generates a new local table

    npm run createTables

This seeds new likes 

    npm run addLikes

This seeds new Dislikes

    npm run addDislikes

You can also run get scripts 


## Project Folder Structure
- clients - contains scripts that interact with your database  
- routes 
    - modules.js - contains endpoints for interacting with the server and database
- index.js - the main express js application resides 





