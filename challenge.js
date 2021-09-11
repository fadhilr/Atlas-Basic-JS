function minMax(arrayNumber) {
    let hasilMax = 0;
    let hasilMin = 0;
    //Write your code below
    let temp = 0;
    
    //sorting array dari besar ke terkecil
    for (let i = 0; i < arrayNumber.length; i++) {
        for (let j = i+1; j < arrayNumber.length; j++) {
            // hasil = arrayNumber[i]+arrayNumber[j]
            if (arrayNumber[i] < arrayNumber[j]) {
                temp = arrayNumber[i]
                arrayNumber[i] = arrayNumber[j]
                arrayNumber[j] = temp
            }
        }
    }
    //jumlahkan array min
    for (let i = 0; i < arrayNumber.length-1; i++) {
        hasilMax += arrayNumber[i]
    }

    //sorting array dari kecil ke besar
    for (let i = 0; i < arrayNumber.length; i++) {
        for (let j = i+1; j < arrayNumber.length; j++) {
            // hasil = arrayNumber[i]+arrayNumber[j]
            if (arrayNumber[i] > arrayNumber[j]) {
                temp = arrayNumber[i]
                arrayNumber[i] = arrayNumber[j]
                arrayNumber[j] = temp
            }
        }
    }
    //jumlahkan array max
    for (let i = 0; i < arrayNumber.length-1; i++) {
        hasilMin += arrayNumber[i]
    }

    return { "sumMin": hasilMin, "sumMax": hasilMax };
}
console.log(minMax([1,2,3,4,5]))
module.exports = minMax;
