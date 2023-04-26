const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'daria', 'hank', 'nemo'];

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1 - t0) + ' miliseconds.');
}

findNemo(everyone);
