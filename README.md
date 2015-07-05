#Approach#

The specifications for the "Numeric Sequence Calculator" do not mention what technology to use. However, your JD says you use C#, ASP.NET, MVC with some Angular. So I assumed you were cool with all those technologies.

This would be very easy to write in C# / MVC. I guess most people do this. So to stand out from the crowd and show off my full stack abilities, I implemented this in JavaScript / AngularJs / Bootstrap. I integrated this with a very simple MVC site that serves up the single page and takes care of the style and script bundles - again to show I'm full stack and because I guess that's how you do your sites anyway.

If an implentation in C# / MVC is important to you (using validation attributes in view models, HTML helpers, NUnit tests, Selenium UI tests, etc.), I could do that as well.

#Running the site#

* Grab the zip file from this repo and unzip in a clean folder. Use a short folder path such as `C:\Tests\MattPerdeck`. The test frameworks used in this project are Node based, and node_modules can create very deep folder structures (normally you wouldn't put them in source control, but I wanted to save you the hassle of loading them).

* Load the `Numbers.sln` solution file in Visual Studio (I used Visual Studio 2013).

* Hit F5 to run the site. End user instructions are on the page.

#Running the unit tests#

These are writting in [Jasmine](http://jasmine.github.io/edge/introduction.html). The test runner is [Karma](http://karma-runner.github.io/0.12/index.html), which is written by the people behind AngularJs. Within the solution, they live in `Scripts\app\unittests`.

* CI: I assume you use TeamCity: ([Karma integration with TeamCity](http://stackoverflow.com/questions/16343543/how-to-integrate-karma-with-teamcity).

* Development experience: There are several Karma test adapters available for Visual Studio.

**Instructions**

1) [Install Node](https://nodejs.org/). The tests require Node.js version v0.10.0 or better. To check your version, from the command line run:
```
node --version
```

2) On the command line, go to the folder with the `Numbers.sln` file.

3) Change to the folder with the unit tests:
```
cd Numbers\Scripts\app\unittests
```

4)
Run the unit tests. These will take a while because they run in browsers. The results will be in the command window:
```
..\..\..\..\node_modules\.bin\karma start karma.config.js
```

#Running the UI tests#

Also writting in [Jasmine](http://jasmine.github.io/edge/introduction.html). Run using [Protractor](http://angular.github.io/protractor/#/), which is by the same crew as AngularJs. It uses a Selenium Server under the hood. The actual UI tests are in `Scripts\app\uitests`. [Integration with TeamCity](https://www.committedcoder.com/report-protractor-test-results-on-teamcity.html)

**Instructions**

1) The Selenium Server requires the Java Development Kit (JDK). [Installation page](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). To check if the JDK is installed, run
```
java -version
```

2) Install Protractor and the Webdriver manager:
```
npm install -g protractor
```

3) Download binaries for the Selenium Server:
```
webdriver-manager update
```

4) Open a second command window.

5) In this second command window, run the Selenium Server (it will keep running unless you stop it):
```
webdriver-manager start
```

6) Go back to your first command window. It should still be at the `unittest` folder. Go to the uitests folder:
```
cd ..\uitests
```

7) Make sure that the site is running (in Visual Studio, hit F5).

8) Run the UI tests:
```
protractor protractor.config.js
```


