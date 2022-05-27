function main() {
    // ランダムに並べられた重複のない整数の配列
    const array = [5, 4, 6, 2, 1, 9, 8, 3, 7, 10];
    // ソート実行
    const sortedArray = sort(array);
    // 結果出力
    sortedArray.forEach(i => console.log(i));
}

const sort = (array) => {

    // 要素が一つの場合はソートの必要がないので、そのまま返却
    if (array.length == 1) {
        return array;
    }

    // 配列の先頭を基準値とする
    const pivot = array[0];

    // ここから記述

    //左端の配列番号を格納
    leftNum = 0;
    //右端の配列番号を格納
    rightNum = array.length - 1;
    quickSort(array, leftNum, rightNum);
    //整列された配列を返す
    return array;

    //整列を行う関数
    function quickSort(array, l, r){
        if(l < r){
            i = partition(array, l, r);
            //pivotより左にある配列の要素を整列
            quickSort(array, l, i);
            //pivotより右にある配列の要素を整列
            quickSort(array, i+1, r);
        }
    }
    //pivotを境目に配列の要素を振り分け，pivotの添え字を返す関数
    function partition(array, l, r){
        //配列の先頭を基準値とする
        pivot2 = array[l];
        do{

            //pivot以上の要素を見つけるまでlを増やす
            while(array[l] < pivot2) l++;
            //pivot未満の要素を見つけるまでrを減らす
            while(array[r] > pivot2) r--;
            //pivot以上の要素とpivot未満の要素を入れ替える
            if(l < r) swap(array, l, r);

        }while(r > l);
        //pivotの添え字を返す
        return r;
    }
    //配列の要素を入れ替える関数
    function swap(array, l, r){
        tmp = array[l];
        array[l] = array[r];
        array[r] = tmp;
    }

    // ここまで記述

}

// 処理実行
main();