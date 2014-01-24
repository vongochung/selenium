var webdriver = require('/usr/lib/node_modules/selenium-webdriver'),
	SeleniumServer = require('/usr/lib/node_modules/selenium-webdriver/remote').SeleniumServer,
	server = new SeleniumServer('/home/nghia/selenium-server-standalone-2.39.0.jar', {
		  	port: 4444

		});
server.start();
var client = new webdriver.Builder().usingServer(server.address()).withCapabilities({'browserName': 'firefox'}).build();
var expect = require('chai').expect;


describe('Test example.com', function(){
    before(function(done) {
        client.get('http://109.74.8.219').then(function(){
            done();
        });
    });

	/*it('Click to care event!', function(done) {
		var link = client.findElement(webdriver.By.xpath("//*[@id='welcome-page']/section/a"))
						.then(function(link){
				 			link.click();
						}).then(function(){
							console.log("tiep");
							done();
					});
    });
*/
	it('Click to filter!', function(done) {
		var link = client.findElement(webdriver.By.xpath("//*[@id='filter-page']/section[1]/div[1]/div[3]/h1/a"))
						.then(function(link){
				 			link.click();
						}).then(function(){
							console.log("next");
							done();
					});
    });


	/*it('Click to Visa alla detaljer!', function(done) {
		client.wait(function() {
			var link = client.findElement(webdriver.By.xpath("//*[@id='filter-page']/section[1]/div[2]/div[2]/div[1]/div/a[2]"))
								.then(function(link){
							 		link.click();
								})
								.then(function(){
									checktext(done);
									//done();
						});
		},10000);

    });*/

	
	/*it('scroll to element random !', function(done) {
		client.wait(function() {
			var label = client.findElement(webdriver.By.className("resultevents"))
								.then(function(label){
							 		var result = label.getText().then(function(result){
											console.log(result);
									}); 
									return result;
								})
								.then(function(result){
									console.log(result);
									done();
						});
		},10000);
    });
	
	*/

    after(function(done) {
        //client.quit().then(function(){
            done();
        //});
    });

});
