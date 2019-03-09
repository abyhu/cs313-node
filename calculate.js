function getPrice(response, pounds, ounces, type) {
	var price = 0.0;

	switch(type) {
		case "Stamped Letters": 
			var stampedPrices = [0.00, 0.55, 0.70, 0.85, 1.00];
			price = stampedPrices[ounces];
			break;
		case "Metered Letters":
			var meteredPrices = [0.00, 0.50, 0.65, 0.80, 0.95];
			price = meteredPrices[ounces];
			break;
		case "Large Flat Envelope":
			var flatPrices = [0.00, 1.00, 1.15, 1.30, 1.45, 1.60, 1.75, 1.90, 2.05, 2.20, 2.35, 2.50, 2.65, 2.80];
			price = flatPrices[ounces];
			break;
		default:
			if (pounds == 0) {
				var zeroPoundParcelPrices = [0.00, 3.66, 4.39, 5.19, 5.71];
				if (ounces == 0)
					price= zeroPoundParcelPrices[0];
				else if (ounces >= 1 && ounces < 5)
					price = zeroPoundParcelPrices[1];
				else if (ounces >=5 && ounces < 9 )
					price = zeroPoundParcelPrices[2];
				else if (ounces >= 9 && ounces < 13)
					price = zeroPoundParcelPrices[3];
				else 
					price = zeroPoundParcelPrices[4];
			} else {
				var poundParcelPrices = [5.71, 6.68, 7.85, 8.30, 8.75, 9.80, 10.55, 11.50, 11.85, 12.30, 13.10, 13.95, 15.20, 16.10, 17.10, 17.80, 18.30, 19.15,19.50, 20.05, 20.90, 21.60, 22.10, 22.60, 23.15, 23.35, 24.30, 25.05, 25.80, 26.60, 27.40, 28.20, 28.50, 29.00, 29.25, 29.55, 29.85, 30.15, 30.50, 30.80, 31.15];
				price = [pounds];
			}
			break;
		}

		const params = {pounds: pounds, ounces: ounces, type: type, price: price};

		response.render('pages/result', params);
	
}

module.exports = {
	calculate: function (request, response) {
		const pounds = request.query.pounds; 
		const ounces = request.query.ounces;
		const type = request.query.type;

		if(pounds == 0 && ounces > 4) 
		{
			type = "Large Flat Envelope";
		} 
		if (pounds != 0 || ounces > 13) 
		{
			type = "First Class Package Service";
		}

		getPrice(response, pounds, ounces, type);
	}
}

	

