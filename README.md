## Install
    npm i --save s25-phone-input
    
## Usage preact
    import { PhoneInput } from 's25-phone-input'
    
    <div>
        <PhoneInput 
            onChange={phone => console.log(phone)} 
            value='79243242211' 
            {...otherInputAttributes}
        />
    </div>
    
## Usage native js
    import { PhoneInputNative } from 's25-phone-input'
    
    const inputElement = document.querySelector('.js-native-input')
    const phoneInput = new PhoneInputNative(inputElement)
    
    phoneInput.onCange(phone => console.log(phone))
    
    input.destroy()
     
