TOPICS COVERED

-- Event Loop
  
  -- Call stack is a data structure that keeps track of program execution inside of V8 engine
    -- Is a LIFO (Last one In, First one Out) data structure
    -- When a statement is done executing, it is removed from the stack. 
       In synchronous js there will only be one statement on the call stack at a time
    -- Methods get added to the call stack when it is being executed, 
       removed from the call stack once it is returned. Method invocation will remain on the call stack until it runs through each
       statement inside the method, and when its returned the method invoc (eg: add()) will be removed
  
  -- Node APIs
    -- eg: setTimeout(function, time) gets registered in call stack, and gets moved to the Node API stack and subsequently removed from the call stack.
       this allows the timeout function to continue counting down without halting anything in the call stack
    -- when the timeout and or async request gets moved down to the Callback Queue, where it waits for the call stack to be empty

  -- Callback Queue is a queue of all the callback functions waiting to be executed. It has to wait for the Call Stack to be empty before it can be executed
    -- FIFO (first one in first one out)

-- Pretty print JSON to terminal by using JSON.stringify(json, undefined, #ofSpaces)

-- HTTP (HyperTextTransferProtocol)
  -- When a request gets made to a website or api, you get the data sent in body (html, json, etc.)
  -- Response (res)
    -- status of request
    -- response headers
    -- can also find body
  -- Error
    -- log out error to screen if request unsuccessful
    -- null when no errors

-- Encoding strings provided in terminal (using Yargs)
  -- use String option to let know should be parsed as strings

-- encodeURIComponent(string) --> get a url encoded string back (ie using %20 to represent spaces)
  -- decodeURIComponent(encodedString) --> converts it back to regular string
