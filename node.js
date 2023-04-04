/*QUESTION 1
What is the event loop?
The event loop is a programming construct used in asynchronous programming to handle and manage events, such as user interactions or system events, in a non-blocking way.
In a program that uses an event loop, the loop continuously listens for incoming events, and when an event occurs, it triggers a corresponding function or callback that handles the event. The loop then moves on to listen for the next event, without blocking or waiting for the current event to be handled.

QUESTION 2
Explain six phases of the event loop
The event loop is composed of six distinct phases that work together to handle and process events in a non-blocking way. These phases are:
The event loop typically consists of six phases, each of which is responsible for processing a specific set of tasks. These phases are:
1.	Timer Phase: The timer phase checks the timers that have been set by the code using functions like setTimeout() or setInterval(). If a timer has expired, its associated callback function is added to the task queue to be executed in the next phase.
2.	Input/Output callbacks phase: In this phase, any I/O callback functions that have been scheduled to run by the previous loop iteration are executed. This phase includes functions like network request callbacks or file system callbacks.
3.	Idle, Prepare phase: This phase is rarely used and mainly reserved for internal implementation purposes.
4.	Poll phase: The poll phase is the most critical phase of the event loop. It waits for events to occur and executes the associated callback functions. Events may include incoming network data, user input, or other external events. If no events occur during this phase, the event loop may block and wait for events.
5.	Check phase: The check phase executes setImmediate() callbacks that are scheduled to run after the current poll phase. This phase allows developers to execute callbacks immediately after the poll phase completes.
6.	Close callbacks phase: The final phase executes any "close" callbacks that are associated with resources that were closed during the previous phases. Examples include file system resources or network sockets that were closed.
Once all the phases are completed, the event loop starts over and begins the next iteration. By following this pattern, the event loop ensures that all events are handled in a timely and non-blocking manner.

QUESTION 3

Here are some best practices to consider when developing server-side code:
1.	Follow security best practices: Security should be a top priority when developing server-side code. Ensure that all inputs are properly sanitized, use prepared statements to avoid SQL injection attacks, implement access controls, and follow the principle of least privilege.
2.	Use a consistent coding style: Consistent coding style makes code easier to read and maintain. Choose a style guide and stick to it throughout your project.
3.	Write readable and maintainable code: Write code that is easy to read and understand, and that can be easily maintained by other developers. Use descriptive variable names, avoid long functions, and follow best practices for commenting and documentation.
4.	Use version control: Version control helps to keep track of changes made to the codebase, and allows multiple developers to work on the same project simultaneously without interfering with each other's work. Use a version control system like Git to manage your codebase.
5.	Write unit tests: Unit tests help to ensure that your code works as expected, and that changes to the code do not introduce bugs or regressions. Write unit tests for all critical functions, and ensure that they are run automatically as part of the build process.
6.	Optimize for performance: Optimize your code for performance by minimizing I/O operations, caching data where possible, and using asynchronous programming techniques where appropriate.
7.	Use logging and monitoring: Logging and monitoring help to identify and troubleshoot issues in the codebase. Use logging frameworks like Winston or Bunyan to capture logs, and implement monitoring solutions like Prometheus or Grafana to track performance metrics.
8.	Use dependency management: Dependency management tools like npm or pip help to manage dependencies and ensure that your project is using the correct versions of third-party libraries and packages.
Overall, these best practices can help to improve the quality, security, and maintainability of server-side code.

QUESTION 4
What is NPM5: How do you initialize a package in npm?
NPM5 is a major version release of the popular Node Package Manager (NPM) that was released in May 2017. It introduced several new features and improvements to the NPM ecosystem. NPM5 was a significant release that introduced several new features and improvements to the NPM ecosystem, making it faster, more efficient, and easier to use for Node.js developers.

To initialize a package in NPM, you need to follow these steps:
1.	Open your terminal and navigate to the directory where you want to create your package.
2.	Run the command npm init. This will start the package initialization process and prompt you to enter various information about your package, such as its name, version, description, author, license, and other metadata.
3.	Follow the prompts and enter the information for your package. If you're not sure what to enter for a particular field, you can leave it blank or use the default value.
4.	Once you've entered all the necessary information, NPM will generate a package.json file in your current directory. This file contains all the metadata for your package, as well as the list of dependencies and devDependencies that your package requires.
5.	You can now add your package code and any necessary dependencies to your project directory. You can use the npm install command to install any required dependencies.
6.	Once you've added your code and dependencies, you can publish your package to the NPM registry using the npm publish command. This will make your package available to other developers who can then install and use it in their own projects.
Overall, initializing a package in NPM is a simple process that involves creating a package.json file and adding your package code and dependencies. By following these steps, you can create and publish your own NPM packages for others to use.

QUESTION 5
How do you run a script in the package.json ?
To run a script specified in the package.json file, you can use the npm run command in your terminal/command prompt, followed by the name of the script. For example, if you have a script named "start" defined in your package.json file like this:
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  }
}
You can run the script by typing npm run start in your terminal/command prompt. This will execute the command node index.js, which is specified as the "start" script.

*/

