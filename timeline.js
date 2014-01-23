var expect = require('chai').expect,
    webdriverjs = require("webdriverjs"),
    assert = require('chai').assert,
    client = webdriverjs.remote({
    desiredCapabilities: {
      //browserName: 'phantomjs',
      browserName: 'firefox'
    },
    logLevel: 'silent',
	
});

var webdriver = require('/usr/lib/node_modules/selenium-webdriver');


function checktext(done){
		var event;
		setTimeout(function(){
			client.getText("//*[@id='filter-page']/section[1]/div[1]/div[4]/div[1]/span[3]", function(err, res){
				event = res;
				count(res, done);
			});
		},5000);
}

function count(event_num, done){
		var event;
		client.elements('css selector', ".vertical-items a.collapsed", function(err, result){
			class_collapsed = result.value.length;
			console.log("class_collapsed to expand: " + class_collapsed);
			assert.equal(event_num, class_collapsed);
			done();
		});
}

describe('Run Selenium tests', function() {

    before(function(done) {
        client.init();
        client.url('http://109.74.8.219', done);
    });

	it('Click to care event!', function(done) {

		client.click("//*[@id='welcome-page']/section/a", function(err, res){		
			expect(err).to.be.null;
			done();
		});
		
    });
	


	it('Click to filter!', function(done) {
		setTimeout(function(){
			client.click("//*[@id='filter-page']/section[1]/div[1]/div[3]/h1/a", function(err, res){	
				done();
			});
		},5000);
    });


	it('Click to Visa alla detaljer!', function(done) {
		setTimeout(function(){
			client.click("//*[@id='filter-page']/section[1]/div[2]/div[2]/div[1]/div/a[2]", function(err, res){	
				expect(err).to.be.null;
				checktext(done);
			});  
		},5000);
    });
	
	
	it('Click to Dölj alla detaljer!', function(done) {
		setTimeout(function(){
			client.click("//*[@id='filter-page']/section[1]/div[2]/div[2]/div[1]/div/a[1]", function(err, res){	
				expect(err).to.be.null;
				client.elements('css selector', ".vertical-items a.collapsed", function(err, result){
					class_collapsed = result.value.length;
					console.log("class_collapsed : " + class_collapsed);
					assert.equal(0, class_collapsed);
					done();
				});
			});
		},5000);
         
    });

	/*it('scroll to one element random in timeline!', function(done) {
		setTimeout(function(){		
			  webdriver.findElement(webdriver.By.cssSelector("resultevents"), function(result) {
					console.log(result);
			   });
		},5000);
         
    });
	
	
	it('Click to Dölj alla detaljer!', function(done) {
		setTimeout(function(){
			client.execute("console.log(window);");
			done();
		},5000);
         
    });
	*/

    after(function(done) {
       //client.end(done);
		done();
    });

});
