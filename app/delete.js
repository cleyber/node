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
         axios.delete('http://localhost:8081/api/v1/myresource/'+id)
            .then(function(response){
               //var index = self.users.indexOf(id);
               // for (var i = 0; i < self.users.length; i++) {
               //    self.users[i]
               //    console.log(self.users[i]);
               // }
            })
            .catch(function(error){
               console.error('Error en delete', error);
            });
         console.log("dentro del método");
         console.log(id);
      }
   }
});
