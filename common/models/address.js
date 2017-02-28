'use strict';

module.exports = function(Address) {
 Address.afterRemote("create",function(ctx,address,next){
          console.log("I am called afterRemoe Create Address");
		  next();
    })
	
};
