app.controller('ProductsCtrl', function($scope, $log, ProductsService, CartService){
	
	ProductsService.findAll()
	  .then(function(products){
	  	$scope.products = products;
	  })
	  .catch($log.error);

	$scope.create = function(){
		ProductsService.create({
			title: $scope.title,
			description: $scope.description,
			category: $scope.category,
			price: $scope.price,
			inventory_qty: $scope.inventory,
			photos: $scope.photo
		})
		.then(function(){
			$scope.title = "";
			$scope.description = "";
			$scope.category = "";
			$scope.price = "";
			$scope.inventory = "";
			$scope.photo = "";
		})
		.catch($log.error);
	};

	$scope.destroy = function(product){
		ProductsService.destroy(product)
		  .then(function(){
		  	console.log("product deleted");
		  })
		  .catch($log.error);
	};

	CartService.getCart()
	  .then(function(cart){
	  	$scope.cart = cart;
	  })
	  .catch($log.error);

	$scope.addToCart = function(product, cartId){
		ProductsService.addToCart(product, cartId)
		  .then(function(){
		  	console.log("product added to cart");
		  })
		  .catch($log.error);
	};

});
