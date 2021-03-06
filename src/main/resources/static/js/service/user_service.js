App.factory('UserService', ['$https','$q', function($http,$q){
	
	return {
			 fetchAllUsers: function(){
				 return $http.get('https://localhost:8080/user/')
				 .then( 
						 function(response){
							 return response.data;
						 },
						 function(errResponse){
							 console.error('Error while fetching users');
							 return $q.reject(errReponse);
						 }
					);
			 },
			 
			 createUser: function(user){
				 return $http.post('https://localhost:8080/user/', user)
				 .then( 
						 function(response){
							 return response.data;
						 },
						 function(errResponse){
							 console.error('Error while creating user');
							 return $q.reject(errReponse);
						 }
					);
			 },
			 
			 updateUser: function(user, id){
				 return $http.put('https://localhost:8080/user/'+id, user)
				 .then( 
						 function(response){
							 return response.data;
						 },
						 function(errResponse){
							 console.error('Error while udating user');
							 return $q.reject(errReponse);
						 }
					);
			 },
			 
			 deleteUser: function(id){
				 return $http.delete('https://localhost:8080/user/'+id)
				 .then( 
						 function(response){
							 return response.data;
						 },
						 function(errResponse){
							 console.error('Error while deleting user');
							 return $q.reject(errReponse);
						 }
					);
			 }
			 
		}//Fist return
	}              
  ]);