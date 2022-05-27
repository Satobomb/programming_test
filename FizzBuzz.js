for (var i = 1; i <= 100; i++) {
    var str = "";

    // ここから記述
    if(i % 15 == 0){
        //15で割り切れた場合
        display = "FizzBuzz";
    }else if(i % 5 == 0){
        //5で割り切れた場合
        display = "Buzz";
    }else if(i % 3 == 0){
        //3で割り切れた場合
        display = "Fizz";
    }else{
        //いずれの数字でも割り切れない場合
        display = i;
    }
    console.log(display);
    // ここまで記述

    console.log(str);
}