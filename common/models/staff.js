

module.exports = function(Staff) {
	var models = require('../../server/server').models;
	

	
 Staff.beforeRemote("create",function(ctx,staff,next){
		  models.Address.create({
				  "street": "PAPA",
				  "house": "DADDY"
				}, function(err, add){
					console.log("1 success : ", add)
				})
		  console.log("beforeRemote in Staff");
		  next();
    })
	 Staff.afterRemote("create",function(ctx,staff,next){
		 console.log("#End After Staff.afterRemote")
		 next();
	 })
};
