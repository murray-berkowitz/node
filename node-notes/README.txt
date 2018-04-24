TOPICS COVERED

--Require // import functionality from other modules/files
  -- 3rd party packages installed via npm
  -- local files via relative path // (./...)

-- fs module //file system
  -- fs.appendFile
  -- fs.readFileSync(file) //async version also available
  -- fs.writeFileSync(file, toWrite) //async version also available

-- os module //operating system
  -- os.userInfo

-- module
  -- module.exports // export functionality that can then be required by other files

-- lodash //utitlity package 
  -- _.isString
  -- _.uniq //filters array for unique values

-- nodemon

-- command line arguments
  -- access from process.argv
  -- using yargs package to easily parse acommand line arguments
  eg: node app.js add (command) --title="secret" (key/value pair) --body="Hello there"(key/value pair)

-- promisfy (require utils)

-- JSON
  -- JavaScript Object Notation // a representation of data that can then be easily passed around and utilized with different programming languages
  -- JSON.parse(JSONstring) // converts JSON string into an accessable Object
  -- JSON.stringify(object) // takes an object and converts it into a JSON string

-- Debugging
  -- inspect // launch debugger when running app from command line, goes through application statement by statement. eg; node inspect app.js
  -- n // go to next statement in code
  -- list(numOfLines) // lists 10 lines of your code
  -- c // continue until the end of program
  -- REPL // read evaluate print loop, which allows us to view, manipulate our code in its current executed state in the debugger
  -- debugger // add this line in your code, so when you hit the 'c' command in the debugger, it will skip towards the closest debugger statement. This is the preferred way of moving around your code in debug
