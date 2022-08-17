function Check(obj1) {
    let arrayOfStr = Object.keys(obj1);
        if (arrayOfStr.length === 0){
          return 'false';
        }
        else {
          return 'true';
        }  
    }