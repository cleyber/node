new Vue({
   el: "#delete",
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
   },
   methods: {
      deleteUser: function(id){
         var self=this;
         axios.delete('http://localhost:8081/api/v1/myresource/'+id)
            .then(function(response){
                for (var i = 0; i < self.users.length; i++) {
                   if(self.users[i].id == id) self.users.splice(i, 1);                   
               }
            })
            .catch(function(error){
               console.error('Error en delete', error);
            });
      }
   }
});
