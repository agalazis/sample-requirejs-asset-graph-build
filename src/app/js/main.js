define(['jquery','jsrasign','CryptoJS'],function($,jsrasign,CryptoJS){
	$("document").ready(function(){
		$('.container-main').append('<ul></ul>')
		$('ul').append('<li>jQuery works!</li>');
		$('ul').append('<li>jsrasign:'
		+jsrasign.KJUR.jws.JWS.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ","secret")
		+'</li>')
		$('ul').append('<li>crypto'+CryptoJS.HmacSHA1("Message", "Key")+'</li><ul>');
	});
});