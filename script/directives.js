//DIRECTIVES

//about page directive

app.directive('aboutTeam', function(){
  return {
    restrict:'E',
    templateUrl:'directives/aboutTeam.html',
    replace: false
  }
});
app.directive('aboutCustomers', function(){
  return {
    restrict:'E',
    templateUrl:'directives/aboutCustomers.html',
    replace: false
  }
})

// service page directive

app.directive('serviceType', function(){
  return {
    restrict:'E',
    templateUrl:'directives/serviceType.html',
    replace: false
  }
})

app.directive('serviceTab', function(){
  return {
    restrict:'E',
    templateUrl:'directives/servicetab.html',
    replace:false
  }
})

// faq page directives

app.directive('faqDir', function(){
  return {
    restrict:'E',
    templateUrl: 'directives/faqs.html',
    replace: false
  }
})

//pricing page directives

app.directive('pricingDir', function(){
  return {
    restrict:'E',
    templateUrl:'directives/pricing.html',
    replace: false
  }
})
