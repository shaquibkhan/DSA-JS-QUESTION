const giveSubString = (name)=>{
    let longestSubString = '';
    let commonSubstring = '';


 // for(let i =0; i<name.length; i++){
    for(let val of name){
    let charIndex = commonSubstring.indexOf(val);
    //     let charIndex = commonSubstring.indexOf(name[i]);
        if(charIndex !==-1){
            commonSubstring = commonSubstring.slice(charIndex+1)
        }
        commonSubstring +=  val;
        if(commonSubstring.length > longestSubString.length){
            longestSubString = commonSubstring
        }
    }
    return console.log(`Longest substring is ${longestSubString} whose length is ${longestSubString.length}`);
}
const name = "abcabcbb";
giveSubString(name)