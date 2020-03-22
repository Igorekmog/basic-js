class VigenereCipheringMachine {
    notReverseFlag = true;

    constructor (value) {
        this.notReverseFlag = value;
    }

    encrypt(str, key) {
        const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (!str || !key) {
            throw new Error();
        };
        if (this.notReverseFlag == false) {
            str = str.split('').reverse().join('');
        }
        str = str.toUpperCase();
        key = key.toUpperCase();
        let s = "";
        let j=0;
            for (let i = 0; i < str.length; i++) {
                if(!alfabet.includes(str[i])){
                    s += str[i];
                    continue;
                }
                if(j<key.length){
                    s += alfabet[(alfabet.indexOf(str[i])+alfabet.indexOf(key[j]))%26];
                    j++;
                }
                else{
                    j=0;
                    s += alfabet[(alfabet.indexOf(str[i])+alfabet.indexOf(key[j]))%26];
                    j++;
                }
            }
            return s;
    }

    decrypt(str, key) {
            const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (!str || !key) {
                throw new Error();
            };
            if (this.notReverseFlag == false) {
                str = str.split('').reverse().join('');
            }
            str = str.toUpperCase();
            key = key.toUpperCase();
            let s = "";
            let j=0;
                for (let i = 0; i < str.length; i++) {
                    if(!alfabet.includes(str[i])){
                        s += str[i];
                        continue;
                    }
                    if(j<key.length){
                        s += alfabet[(alfabet.indexOf(str[i])+26-alfabet.indexOf(key[j]))%26];
                        j++;
                    }
                    else{
                        j=0;
                        s += alfabet[(alfabet.indexOf(str[i])+26-alfabet.indexOf(key[j]))%26];
                        j++;
                    }
                }
                return s;
    }
}

module.exports = VigenereCipheringMachine;
