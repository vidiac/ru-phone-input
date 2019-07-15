import {h, render} from 'preact'
import App from './components/App';
import PhoneInputNative from './PhoneInputNative'

const mountNode = document.getElementById('app');
render( < App / >, mountNode
)
;

document.addEventListener('DOMContentLoaded', () => {
    const input = new PhoneInputNative(document.querySelector('.js-native-input'))

    input.onChange(phone => {
        console.log({phone})
    })
})
