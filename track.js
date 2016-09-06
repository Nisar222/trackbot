  var fedexAPI = require('fedex/lib/index');
  var util = require('util');
  var fs = require('fs');

  
  var fedexAPI = require('fedex');

  var fedex = new fedexAPI({
    environment: 'live', // or live
    debug: true,
    key: 'wtjfCCcZVvmrXfko',
    password: 'jyPfOulkDf5LdjWRQYMASm9yr',
    account_number: '260817302',
    meter_number: '109918020',
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


  
