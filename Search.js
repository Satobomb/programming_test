// 処理実行
main();

function main() {
    // 昇順にソートされた配列
    var sortedArray = new Array(1, 2, 3, 5, 12, 7890, 12345);
    // 探索対象の番号
    var targetNumber = 7890;
    // 探索実行
    targetIndex = serchIndex(sortedArray, targetNumber);
    // 結果出力
    console.log(targetIndex);
}

function serchIndex(sortedArray, targetNumber) {

    // ここから記述
    
    //左端の配列番号を格納
    leftNum = 0;
    //右端の配列番号を格納
    rightNum = sortedArray.length - 1;

    while(leftNum <= rightNum){
        //中央値の配列番号を格納(配列内の要素が偶数の場合は切り捨てが起きる)
        medianNum = Math.floor((leftNum + rightNum) / 2);
        //中央値を格納
        median = sortedArray[medianNum];
        if(targetNumber < median){
            //対象が中央値より小さい場合，右端の配列番号を変更
            rightNum = medianNum - 1;
        }else if(targetNumber > median){
            //対象が中央値より大きい場合，左端の配列番号を変更
            leftNum = medianNum + 1;
        }else{
            //対象と中央値が一致する場合，配列番号を返す
            return medianNum;
        }
    }

    // ここまで記述

    // 探索対象が存在しない場合、-1を返却
    return -1;
}