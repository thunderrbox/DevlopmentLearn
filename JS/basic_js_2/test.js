// arrays

 const arr = [1, 2, 3, 4, 5];
    console.log(arr[0]); // 1
    console.log(arr[4]); // 5
    console.log(arr.length);
    arr.push(6); // adds 6 to the end of the array
    console.log(arr);
    arr.pop();  
    console.log(arr);
    arr.unshift(0); // adds 0 to the beginning of the array
    console.log(arr);
    arr.shift(); // removes the first element of the array
    console.log(arr);
    arr.splice(2, 0, 10); // adds 10 at index 2 without removing any element
    console.log(arr);
    arr.splice(2, 1); // removes 1 element at index 2
    console.log(arr);
    console.log(arr.indexOf(3));
     

    const newArr = arr.join("-");
    console.log(newArr);

    const arr2 = newArr.split("-");
    console.log(arr2); 

     