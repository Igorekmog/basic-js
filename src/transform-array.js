module.exports = function transform(arr) {
    if(!Array.isArray(arr))
    throw 'Error';
    var transformed = [];
    for(let i=0; i<arr.length;i++)
       {if(arr[i]==`--discard-next`)
          {i++;}
            else
                if(arr[i]==`--discard-prev`)
                {    transformed.pop();}
            else    
                if(arr[i]==`--double-next`)
                {     if (arr[i + 1] != undefined)
                    transformed.push(arr[i + 1]);}
            else    
                if(arr[i]==`--double-prev`)
                {   if (arr[i - 1] != undefined) 
                    transformed.push(arr[i - 1]);}
            else 
                transformed.push(arr[i]);}

// console.log(arr, transformed);
                return transformed;                
};
