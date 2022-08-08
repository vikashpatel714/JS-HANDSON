const Prime_Check = (n) => {
    if(n<=1){
      return 'NO';
    }
      for (var i = 2; i < n; i++) {
        if (n % i !== 0) {
          return "YES";
        } else {
          return "NO";
        }
      }
    };