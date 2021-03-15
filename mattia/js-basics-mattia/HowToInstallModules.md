## How to install sqlite3

1. go inside the source folder (the folder that contains all the js programs)
2. run this commands: 
    ```bash
    npm init
    ``` 
    - *a package.json will be created*
    ```bash
    npm install sqlite3 
    ```

    - *it will install sqlite3 in the cwd folder inside the node_module folder*
    - *package-lock.json will be created in the folder too to check the version of the modules*
 3. to import the module inside the js file add this line:
    
    ```js 
    const sqlite = require('sqlite3');
    ```
    - *now the sqlite3 module is imported 'in sqlite variable'*
**/!\ ATTENTION: When a project will be developed only the package.json will be pushed in the repository of the project /!\\**
in order to install the dependencies written in the package.json 
simply use the command:
```bash
npm install 
```
* *(will install all the modules needed for the project)*

