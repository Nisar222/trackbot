  var fedexAPI = require('fedex/lib/index');
  var util = require('util');
  var fs = require('fs');

  
  var fedexAPI = require('fedex');

  var fedex = new fedexAPI({
    environment: 'live', // or live
    debug: true,
    // Enter the 4 credentials below
    key: 'KEY',
    password: 'PASSWORD',
    account_number: 'ACCOUNT_NO',
    meter_number: 'METER',
    imperial: false // set to false for metric
  });
  
  module.exports.Trackiti = function Trackit()
{
  fedex.track({
  SelectionDetails: {
    PackageIdentifier: {
      Type: 'TRACKING_NUMBER_OR_DOORTAG',
      Value: '123456789012'
    }
  }
}, function(err, res) {
  if(err) {
    return console.log(err);
  }

  // console.log(res);
  return (res);
});


  
};


  
