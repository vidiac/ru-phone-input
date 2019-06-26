import {h, Component} from "preact"
import IMask from 'imask'

class PhoneInput extends Component {
    imask = null
    ref = null

    componentDidMount()
    {
        this.imask = IMask(
            this.ref, 
            { 
                mask: '+{7} 000-000-00-00', 
                prepare: function (str, masked) {
                    const {typedValue, rawInputValue} = masked

                    if (str === '7' && typedValue === '7') {
                        return ''
                    }

                    if (str === '8' && rawInputValue === '') {
                        return ''
                    }

                    if (str === '8' && typedValue === '7' && rawInputValue === '7') {
                        return ''
                    }

                    if (str === '+' && rawInputValue === '') {
                        return ''
                    }

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

    render({value, onChange, ...otherProps}) {
        return (
            <input type="text" defaultValue={value} ref={ref => this.ref = ref} {...otherProps} />
        )
    }
}

export default PhoneInput
