console.log('I am alert');

//alert('Alert! Alert!!!');

const alertMgs = () => {
    alert('Carefull!!');
}

const confirmMgs = () => {
    const response = confirm('Are you sure?');
    console.log(response);
    if (response === true) {
        alert('Gtreat')
    }
    else {
        alert('try again');
    }
}

const inputBtn = () => {
    const inPut = prompt('whats......');
    if (inPut) {
        console.log(inPut);
    }
}