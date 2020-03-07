const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  var k=0.693/HALF_LIFE_PERIOD;
  if(typeof(sampleActivity)!="string" || typeof(sampleActivity)==="null")
      return false;
  else    
      if(parseFloat(sampleActivity)<15 && parseFloat(sampleActivity)>0)
        {var res=Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
          return res;}
  else 
  { return false;}
  // remove line with error and write your code here
};
