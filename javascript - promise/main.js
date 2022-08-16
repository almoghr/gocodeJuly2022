const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);


const showOff = (phone) => {
    let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;

    return Promise.resolve(message);
};


const askMom = async () => {
    try {
        console.log('before asking Mom');
        
        let phone = await willIGetNewPhone;
      let message = await showOff(phone);
      console.log(message);
      console.log('after getting a response');
    } catch (error) {
      console.log(error.message);
    }
  }

  (async () => {
      await askMom();
  })();

  console.log('hi');

  