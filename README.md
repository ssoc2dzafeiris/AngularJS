# AngularJS #

## Table of Contents ##

- [AngularJS](#angularjs)
  * [What is AngularJs](#what-is-angularjs)
    + [AngularJS Extends HTML](#angularjs-extends-html)
      - [Example](#example)
    + [AngularJS Directives](#angularjs-directives)
      - [Example](#example-1)
    + [AngularJS Expressions](#angularjs-expressions)
      - [Example](#example-2)
    + [AngularJS Applications](#angularjs-applications)
      - [Example](#example-3)

## What is AngularJs ##

- AngularJS is a JavaScript framework. It can be added to an HTML page with a <script> tag.
- AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.
- AngularJS is a JavaScript framework written in JavaScript.AngularJS is distributed as a JavaScript file, and can be added to a web page with a script tag:
> ```<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script> ```

### AngularJS Extends HTML ###

- AngularJS extends HTML with ***ng-directives***. 
- The ***ng-app*** directive defines an AngularJS application.
- The ***ng-model*** directive binds the value of HTML controls (input, select, textarea) to application data.
- The ***ng-bind*** directive binds application data to the HTML view.
#### Example ####
<details>
<summary><h6>(chick here)</h6></summary>

```
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>Name: <input type="text" ng-model="name"></p>
  <p ng-bind="name"></p>
</div>

</body>
</html> 
```
<p><h6>Explanation</h6>
<hr>

- AngularJS starts automatically when the web page has loaded.
- The ng-app directive tells AngularJS that the <div> element is the "owner" of an AngularJS application.
- The ng-model directive binds the value of the input field to the application variable name.
- The ng-bind directive binds the content of the <p> element to the application variable name.

</p>
</details>

### AngularJS Directives ###

- As you have already seen, AngularJS directives are HTML attributes with an ng prefix.
- The ng-init directive initializes AngularJS application variables.
#### Example ####
<details>
<summary><h6>(chick here)</h6></summary>

```
<div ng-app="" ng-init="firstName='John'">
<p>The name is <span ng-bind="firstName"></span></p>
</div>

```
</details>

### AngularJS Expressions ###

- AngularJS expressions are written inside double braces: {{ expression }}.
- AngularJS expressions bind AngularJS data to HTML the same way as the ng-bind directive.
- AngularJS will "output" data exactly where the expression is written:
#### Example ####
<details>
<summary><h6>(chick here)</h6></summary>

```
<div ng-app="">
  <p>My first expression: {{ 5 + 5 }}</p>
  <p>Name: <input type="text" ng-model="name"></p>
  <p>{{name}}</p>
</div>

```
</details>

### AngularJS Applications ###

- AngularJS modules define AngularJS applications.
- AngularJS controllers control AngularJS applications.
- The ng-app directive defines the application, the ng-controller directive defines the controller.

#### Example ####

<details>
<summary><h6>(chick here)</h6></summary>

```

<div ng-app="myApp" ng-controller="myCtrl">
First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});
</script>

```
</details>
