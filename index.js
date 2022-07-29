let numberObj = {
    mtn: [
        '07025', '07026', '0704', '0703', '0803', '0806', '0816', '0814', '0903', '0706', '0906', '0916', '0913', '0810', '0813'
    ],
    airtel: [
        '0904', '0802', '0701', '0907', '0901', '0912', '0902', '0812', '0808', '0708'
    ],
    glo: [
        '0905', '0805', '0705', '0915', '0807', '0811', '0815'
    ],
    etisalat: [
        '0809', '0817', '0818', '0909', '0908'
    ]
};

let inputNum = document.getElementById('tel-num');
inputNum.addEventListener('keyup', () => {
    let inputNumValue = inputNum.value;
    if (inputNumValue.length >= 3) {
        for (let i = 0; i < numberObj.mtn.length; i++) {
            if (numberObj.mtn[i] == inputNumValue) {
                let imageSrc = document.getElementById('img').innerHTML = '<img src="./images/mtn.png" alt="logo" style="width: 35px; height: 35px;"></img>';
            }
        }
        for (let i = 0; i < numberObj.airtel.length; i++) {
            if (numberObj.airtel[i] == inputNumValue) {
                let imageSrc = document.getElementById('img').innerHTML = '<img src="./images/airtel.png" alt="logo" style="width: 35px; height: 35px;"></img>';
            }
        }
        for (let i = 0; i < numberObj.glo.length; i++) {
            if (numberObj.glo[i] == inputNumValue) {
                let imageSrc = document.getElementById('img').innerHTML = '<img src="./images/glo.jpg" alt="logo" style="width: 35px; height: 35px;"></img>';
            }
        }
        for (let i = 0; i < numberObj.etisalat.length; i++) {
            if (numberObj.etisalat[i] == inputNumValue) {
                let imageSrc = document.getElementById('img').innerHTML = '<img src="./images/etisalat.svg" alt="logo" style="width: 35px; height: 35px;"></img>';
            }
        }
    } else {
        document.getElementById('img').innerHTML = ''
    }
});


console.log(numberObj.airtel);




