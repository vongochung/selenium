var expect = require('chai').expect,
    webdriverjs = require("webdriverjs"),
    assert = require('chai').assert,
    client = webdriverjs.remote({
    desiredCapabilities: {
       browserName: 'phantomjs'
       //browserName: 'firefox'
    },
    logLevel: 'silent'
});

describe('Run Selenium tests', function() {

    before(function(done) {
        client.init();
        client.url('http://109.74.8.219/', done);
    });


    it('should see the correct title', function(done) {
		client.getTitle(function(err, title){
			expect(title).to.have.string('Filter');
			done();
		});
	});

    it('should go to the correct link in navigation', function(done) {

	client.elements('css selector', '#permanent li a', function(err, result){	
		var link = result.value;


		var arr_element = [];
		for(var i = 1; i <= link.length; i++){
			var element = "//ul[@id='permanent']/li["+ i +"]/a";
			arr_element.push(element);
		}
		arr_element.forEach(function (dataItem) {
			client.click(dataItem, function(err, res){		
				expect(err).to.be.null;
			});
		});

	});

	done();

	});
	

    after(function(done) {
        client.end(done);
    });

});

