let numbers = prompt('Zəhmət olmasa vergül ilə ayrılmış 4 ədəd daxil edin nümunə: 4,6,3,8');
numArray = numbers.split(',');
let evenNum = 1;
let aloneNum = 0;
numArray.forEach((item, index) => {
        if (Number(item) % 2 == 0) {
            evenNum *= Number(item)
        } else {
            aloneNum += Number(item)
        }
    })
    // console.log(evenNum,aloneNum)

for (let i = evenNum - aloneNum; i > 0; i--) {
    if (i % 2 == 0) {
        console.log(i)
    }
}