export function FindIntersection(strArr) { 
    let elemt_one = strArr[0]
    let elemt_two = strArr[1]

    let output = []
    let array_one = elemt_one.split(', ')
    let array_two = elemt_two.split(', ')

    for (let i = 0; i < array_one.length; i++) {
        let element = array_one[i];
        
        let result = array_two.find(data => data == element)
    
        if(result){
            output.push(result)
        }
    }

    // code goes here  
    return output.length == 0 ? false : output.join(","); 

}