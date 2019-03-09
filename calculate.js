function getPrice(response, pounds, ounces, type) {
	var price = 0.0;

	switch(type) {
		case "Stamped Letters": 
			price = 1.0; 
			break;
		case "Metered Letters": 
			price = 2.0; 
			break;
		case "Large Flat Envelope":
			price = 3.0; 
			break;
		case "default":
			price = 4.0; 
		}

		const params = {pounds: pounds, ounces: ounces, type: type, price: price};

		response.render('pages/result', params);
	
}

module.exports = {
	calculate: function (request, response) {
		const pounds = request.query.pounds; 
		const ounces = request.query.ounces;
		const type = request.query.type;

		if(pounds == 0 && ounces > 4 
		   && (type == "Stamped Letters" || type == "Metered Letters")) 
		{
			type = "Large Flat Envelope";
		} 
		if (pounds == 0 && ounces > 13 && type == "Large Flat Envelope") 
		{
			type = "First Class Package Service";
		}

		getPrice(response, pounds, ounces, type);
	}
}

	

