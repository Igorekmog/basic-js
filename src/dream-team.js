module.exports = function createDreamTeam(members) {
  var j=0;
  var array=[];
  if (!Array.isArray(members)) return false;
  for(let i=0;i<members.length; i++)
    if(typeof(members[i])!="string")
      {}
    else 
      { array[j]=members[i].trim().charAt(0).toUpperCase();
        j++;
      }
      return array.sort().join('');
  // remove line with error and write your code here
};