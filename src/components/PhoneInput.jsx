import {h, Component} from "preact"
import helper from '../heplers'

class PhoneInput extends Component {
    ref = null
    lastCaretPosition = {start: null, end: null}
    state = {
        value: this.props.value,
    }

    onChange = e => {
        const currentPosition = helper.getCaretPos(e.currentTarget)


        const {onChange} = this.props
        const {value} = e.currentTarget
        const clearValue = helper.clearValue(value)

        if (value[currentPosition.end + 1] && (currentPosition.end < this.lastCaretPosition.end || value.length > this.lastCaretPosition.end)) {
            setTimeout(() => {
                if (value[currentPosition.end + 1] === '-') {
                    currentPosition.start++
                    currentPosition.end++
                }

                helper.setCaretPos(this.ref, currentPosition)
            })
        }

        onChange(clearValue)
        this.lastCaretPosition = {...currentPosition}
    }

    render({value, onChange, ...otherProps}) {
        return (
            <input
                ref={ref => (this.ref = ref)}
                type='tel'
                value={helper.format(value)}
                onInput={this.onChange}
                {...otherProps}
            />
        )
    }
}

export default PhoneInput
