function getPrice(response, pounds, ounces, type) {
	var price = 0.0;

	switch(type) {
		case "Stamped Letters": 
			switch(ounces) {
				case 1:
					price = 0.55; 
					break;
				case 2:
					price = 0.70;
					break;
				case 3:
					price = 0.85;
					break;
				default:
					price = 1.00;
			}
			break;
		case "Metered Letters":
			switch (ounces) {
				case 1:
					price = 0.50; 
					break;
				case 2:
					price = 0.65;
					break;
				case 3:
					price = 0.80;
					break;
				default:
					price = 0.95;	
			}
			break;
		case "Large Flat Envelope":
			switch (ounces) {
				case 1:
					price = 1.00; 
					break;
				case 2:
					price = 1.15;
					break;
				case 3:
					price = 1.30;
					break;
				case 4:
					price = 1.45; 
					break;
				case 5:
					price = 1.60;
					break;
				case 6:
					price = 1.75;
					break;
				case 7:
					price = 1.90; 
					break;
				case 8:
					price = 2.05;
					break;
				case 9:
					price = 2.20;
					break;
				case 10:
					price = 2.35; 
					break;
				case 11:
					price = 2.50;
					break;
				case 12:
					price = 2.65;
					break;
				default:
					price = 2.80;
			}
			break;
		default:
			if (pounds == 0) {
				switch (ounces) {
				case 1:
				case 2:
				case 3:
				case 4:
					price = 3.66; 
					break;
				case 5:
				case 6:
				case 7:
				case 8:
					price = 4.39;
					break;
				case 9:
				case 10:
				case 11:
				case 12:
					price = 5.19;
					break;		
				default:
					price = 5.71;
				}
			} else {
				switch (pounds) {
				case 1:
					price = 6.68; 
					break;
				case 2:
					price = 7.85;
					break;
				case 3:
					price = 8.30;
					break;
				case 4:
					price = 8.75; 
					break;
				case 5:
					price = 9.80;
					break;
				case 6:
					price = 10.55;
					break;
				case 7:
					price = 11.50; 
					break;
				case 8:
					price = 11.85;
					break;
				case 9:
					price = 12.30;
					break;
				case 10:
					price = 13.10; 
					break;
				case 11:
					price = 13.95;
					break;
				case 12:
					price = 15.20;
					break;
				case 13:
					price = 16.10;
					break;
				case 14:
					price = 17.10;
					break;
				case 15:
					price = 17.80;
					break;
				default:
					price = 18.30;	
				}
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
		if (pounds == 0 && ounces > 13) 
		{
			type = "First Class Package Service";
		}

		getPrice(response, pounds, ounces, type);
	}
}

	

