//Modules
var app = angular.module('WebApp', ['ngRoute', 'ui.bootstrap']);

//Routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", 
          {templateUrl: "pages/home.html",
            controller: "CarouselCtrl"})
    // Pages
    .when("/about", 
          {templateUrl: "pages/about.html", 
           controller: "PageCtrl"})
    .when("/faq", 
          {templateUrl: "pages/faq.html", 
           controller: "PageCtrl"})
    .when("/pricing", 
          {templateUrl: "pages/pricing.html", 
           controller: "PageCtrl"})
    .when("/services", 
          {templateUrl: "pages/services.html",
                        controller: "PageCtrl"})
    .when("/contact", 
          {templateUrl: "pages/contact.html", 
                       controller: "PageCtrl"})
    // Blog
    .when("/blog", 
          {templateUrl: "pages/blog.html", 
           controller: "BlogCtrl"})
    .when("/blog/post", 
          {templateUrl: "pages/blog_item.html", 
           controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", 
        {templateUrl: "pages/404.html", 
        controller: "PageCtrl"});
}]);

// Carousel Controller
app.controller('CarouselCtrl', CarouselCtrl);
 function CarouselCtrl($scope) {
  $scope.myInterval = 2000;
  $scope.slides = [
      {image:'assets/img/specialist.png',
       text:'Reduce costs of finishing operations by 65%'},
      {image:'assets/img/WorldWide.png',
       text:'International Buyer Financing Available'},
      {image:'assets/img/since1980.png',
       text:'Family Owned for Four Generations'}];
  
    var slides = $scope.slides; 
};

//Blog Controller
app.controller('BlogCtrl', [ '$scope', '$location', '$http', function ( $scope, $location, $http ) {
  console.log("Blog Controller reporting for duty.");
}]);

//Pages Controller
app.controller('PageCtrl', [ '$scope', '$location', '$http', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");


  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
}]);
