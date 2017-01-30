new Vue({
   el: "#list",
   data: {
      users: []
   },
   created: function(){
      var self=this;
      console.log('Vue', self);

      axios.get('http://localhost:8081/api/v1/myresource/')
         .then(function(response){
            self.users=response.data;
            console.log('axios', this);
         })
         .catch(function(error){
            console.error('Error en getAll', error);
         });
   }
});
