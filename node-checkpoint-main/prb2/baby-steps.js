var sum=0;
for (var i=2; i<process.argv.length; i++)
{
          sum+=Number(process.argv[i])
}

console.log(sum) 

/*var tab=process.argv
var arr=process.argv.splice(2, tab.length)

var sum=arr.reduce(function(sum, el){
          return sum+=el})
          console.log(sum)*/

