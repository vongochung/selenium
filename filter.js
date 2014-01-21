var expect = require('chai').expect,
    webdriverjs = require("webdriverjs"),
    assert = require('chai').assert,
    client = webdriverjs.remote({
    desiredCapabilities: {
      browserName: 'phantomjs'
      //'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG'
      //browserName: 'firefox'
    },
    logLevel: 'silent'
});

describe('Run Selenium tests', function() {
    this.timeout(99999999);
    before(function(done) {
        client.init();
        client.url('http://109.74.8.219', done);
    });


   it('should see the correct title', function(done) {
	   	client.getTitle(function(err, title){
	   		expect(title).to.have.string('Filter');
	   		done();
		});
	});

    it('Click to care event!', function(done) {
	
		client.click("//*[@id='welcome-page']/section/a", function(err, res){		
			expect(err).to.be.null;
			done();
		});	
	
	});

    it('Click to filter!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='filter-page']/section[1]/div[1]/div[3]/h1/a", function(err, res){//a.collapsed		
				expect(err).to.be.null;	
				//console.log(err);
			});

		},10000);

	});
	

   it('Click Visa alla!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
		         client.click("//*[@id='collapseFilter']/div[1]/div[2]/div/div[1]/div/div/a", function(err, res){		
				expect(err).to.be.null;	
				checktext(done);
			});
		},10000);
	});

    
    it('Click Capio Citykliniken Lund!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[1]/div[2]/div/div[3]/div/div/a", function(err, res){		
				//expect(err).to.be.null;	
				checktext(done);
				//done();
			});
		},10000);

	});
    
   
    it('Click Dagkirurgisk enhet!', function(done) {
	client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[1]/div[2]/div/div[2]/div/div/a", function(err, res){			
				checktext(done);
			});
		},10000);
	});

	
   it('Click Vårdcentral Fisksätra!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[1]/div[2]/div/div[4]/div/div/a", function(err, res){			
				checktext(done);
			});
		},10000);
	
	});
    
    it('Click Visa alla!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
		         client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[1]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});
    

    it('Click Formulär!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[3]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});
    

    it('Click Remiss!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[5]/div/a", function(err, res){		
					checktext(done);
				});
		},10000);
	});
    

    it('Click Vaccination!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){         
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[7]/div/a", function(err, res){			
				checktext(done);
			});
		},10000);
	});
    

    it('Click Efter förlossning!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[9]/div/a", function(err, res){			
				checktext(done);
	
			});
		},10000);
	});

    it('Click Bokad tid!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[2]/div/a", function(err, res){	
				checktext(done);
			});
		},10000);
	});


    it('Click Journalanteckning!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[4]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});


    it('Click Vårdkontakt!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[6]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});

    it('Click Graviditetsregistrering!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[8]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});

    it('Click Graviditetsuppföljning!', function(done) {
		client.url('http://109.74.8.219/filter', done);
		setTimeout(function(){
			client.click("//*[@id='collapseFilter']/div[2]/div[2]/div/div[10]/div/a", function(err, res){		
				checktext(done);
			});
		},10000);
	});

    
   function checktext(done){
	var event;
	client.getText("//*[@id='filter-page']/section[1]/div[1]/div[4]/div[1]/span[3]", function(err, res){
		event = res;
		count(res, done);
	});

   }

   function count(event_num, done){
	var event;
	client.elements('xpath', "//div[@class='vertical-items']/div/article", function(err, result){
		event = result.value;
		assert.equal(event_num, (event.length - 2));
		done();
	});
	
   }

    after(function(done) {
	    client.end(done);
		done();
    });

});

