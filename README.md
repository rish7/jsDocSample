# JsDoc sample app - [jsdoc generated documentation demo](https://rish7.github.io/jsDoc-docs-sample/index.html)
----------------------
This is just demo app, how we can add jsdoc in our nodejs app  or any javascript projects like Appcelerator Titnaium, Cordova PhoneGap, AngularJs.
![Code to Docs](/Code-to-Docs.png?raw=true "Code to Docs")

## Benefits of extracting documentation from code
----------------------
* It provides all the information important to the (new) developers.
* Enhance the clarity of your source code.
* Make code easier to use and maintain.
* Creating documentation directly from code gives us a complementary high-level view that helps team while coding and at maintenance time.
* Documentation directly from the code makes it easier to keep the documentation consistent with the source code.
* It allows a developer to quickly look up an arbitrary function or class.
* Many developers like the idea of auto-generating documentation for various reasons. For example, because it is extracted from the source code itself (for example, comments), the developer can write it while referring to code, and can use the same tools he used to create the source code, to make the documentation. This makes it much easier to keep the documentation up-to-date.
* It makes code comments clean, readable and familiar.
* The appearance of the documentation can be easily customized.


### Fresh setup
----------------------
1. `npm init`  //fill all the questions need to setup new project

2. Add jsDoc and docstrap
   * `npm install --save-dev jsdoc`
   * `npm install --save-dev ink-docstrap`

3. Add comments in javascript code (please check comments format @ http://usejsdoc.org/)

4. Add `"jsdocs":"jsdoc -c jsdocConfig.json src -t ./node_modules/ink-docstrap/template -R README.md -r -d docs"
  ` under scripts in package.json

5. Once done with comments, just run this in Terminal `npm run jsdocs` from project root folder.

6. In root folder it will create new folder called <b>docs</b>. Open index.html and see.



### Download & Run this project 
----------------------
1. Just run below command from project root folder
    * `npm install` 
    * or `npm update`

2. And then `npm run jsdocs` from root folder

3. In root folder it will create new folder called <b>docs</b>. Open index.html and see.


#### Reference links
----------------------
http://usejsdoc.org/about-commandline.html

https://github.com/docstrap/docstrap#configuring-the-template

http://usejsdoc.org/

http://typedoc.org/guides/installation/

http://insights.sigasi.com/opinion/benefits-extracting-documentation-software-code.html
