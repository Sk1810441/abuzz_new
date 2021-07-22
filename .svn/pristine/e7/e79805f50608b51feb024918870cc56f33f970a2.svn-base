import * as CryptoJS from 'crypto-js';
import { sha512 } from 'js-sha512';

export class EncryDecryUtility{

    public static set(keys:string, value:string):string{

        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    
        return encrypted.toString();
    }
    
      //The get method is use for decrypt the value.
    public static  get(keys:string, value:string):string{

        var key = CryptoJS.enc.Utf8.parse(keys);
        var iv = CryptoJS.enc.Utf8.parse(keys);
        var decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
     
    public static SHA512hashing(value:string){
        let code = value.trim();
        return sha512(code);
    }

}