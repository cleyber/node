new Vue({
   el: "#create",
   data: {
      user: {
         name: "",
         mail: ""
      }
   },
   methods: {
      addUser: function(){
         var self=this;
         axios.post('http://localhost:8081/api/v1/myresource/', self.user)
            .then(function(response){
               self.user.name=null;
               self.user.mail=null;
            })
            .catch(function(error){
               console.error('Error en save', error);
         });
      }
   }
});
