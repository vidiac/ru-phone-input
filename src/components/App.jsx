import {h, Component} from "preact";
import PhoneInput from "./PhoneInput";
import IMask from 'imask'

class App extends Component {
    ref = null
    state = {
        phoneNumber: '',
    }

    componentDidMount()
    {
        let lastChar = ''
        const phoneMask = IMask(
            this.ref, 
            { 
                mask: '+{7} 000-000-00-00', 
                prepare: function (str, masked) {
                    const {typedValue, unmaskedValue, rawInputValue} = masked
                    console.log({str, typedValue, unmaskedValue, rawInputValue})
                    if (str === '7' && lastChar === '+') {
                        return ''
                    }
                    lastChar = str
                    return str
                },
             }
        )
    }

    onChangePhoneNumber = phone => {
        this.setState({phoneNumber: phone})
    }

    onInput = e => {
        if (e.inputType === 'insertFromPaste') {
            e.currentTarget.value = ''
        }
    }

    render(props, {phoneNumber}) {
        return (
            <div>
                <input type="text" ref={ref => this.ref = ref}/>
                {/* <PhoneInput
                    onChange={this.onChangePhoneNumber}
                    value={phoneNumber}
                    mask='+7 ___-___-__-__'
                    placeholder='+7 ___-___-__-__'
                /> */}
            </div>
        )
    }
}

export default App
