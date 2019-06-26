import {h, Component} from "preact"
import IMask from 'imask'

class PhoneInput extends Component {
    imask = null
    ref = null

    componentDidMount()
    {
        let lastChar = ''

        this.imask = IMask(
            this.ref, 
            { 
                mask: '+{7} 000-000-00-00', 
                prepare: function (str, masked) {
                    const {typedValue, unmaskedValue, rawInputValue} = masked
                    if (str === '7' && lastChar === '+') {
                        return ''
                    }

                    if (str === '8' && rawInputValue === '') {
                        return ''
                    }

                    if (str === '+' && rawInputValue === '') {
                        return ''
                    }


                    lastChar = str
                    return str
                },
             }
        ),
        this.imask.on('accept', () => {
            this.props.onChange(this.imask.unmaskedValue)
        });
    }

    componentWillUnmount() {
        this.imask.off('accept');
        this.imask.destroy()
    }

    render({value, placeholder, onChange}) {
        return (
            <input type="text" defaultValue={value} placeholder={placeholder} ref={ref => this.ref = ref}/>
        )
    }
}

export default PhoneInput
