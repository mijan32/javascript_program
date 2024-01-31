function generateSubArray(index,len,arr,res){
    if( index>=len){
       for( re of res){
        console.log(re);
       }
       if( res.length==0){
        console.log([]);
       }
       console.log('\n');
       return
    }
    res.push(arr[index]);
    index++
    generateSubArray(index,len,arr,res);
    res.pop();
    generateSubArray(index,len,arr,res);

}
let arr=[3,1,2];
let index=0;
let len=arr.length;
let res =[]
generateSubArray(index,len,arr,res)