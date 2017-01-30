new Vue({
   el: "#list",
   data: {
      users: []
   },
   created: function(){
      var self=this;
      axios.get('http://localhost:8081/api/v1/myresource/')
         .then(function(response){
            self.users=response.data;
         })
         .catch(function(error){
            console.error('Error en getAll', error);
         });
   }
});
