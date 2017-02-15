'use strict'
const check = {
	aritGeo: function(num) { 
		if(Array.isArray(num)){
			var div = num[1] / num[0];
			var sub = num[1] - num[0];
			var arit = true;
			var geom = true;
			if(num.length > 0){
				for(var i = 0; i < num.length - 1; i++) {
					if( num[i + 1] - num[i] !== sub ){
						arit = false;
					}
					if( num[i + 1] / div !== num[i]){
						geom = false;
					}
				}
				if (geom === true){
					return "Geometric";
				}
				else if (arit === true){
					return "Arithmetic";
				}
				else{
					return -1;
				}
			} 
			else {
	 		return 0;
	 		}
	 	}
	}
}
module.exports = check;