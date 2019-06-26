import {h, Component} from "preact";

class PhoneInput extends Component {
    ref = null
    lastCaretPosition = {start: null, end: null}

    onChange = e => {
        const currentPosition = PhoneInput.getCaretPos(e.currentTarget)


        const {onChange} = this.props
        const {value} = e.currentTarget
        const clearValue = PhoneInput.clearValue(value)

        // if (this.props.value.length > clearValue.length && currentPosition.end < this.lastCaretPosition.end) {
        //     requestAnimationFrame(() => {
        //         PhoneInput.setCaretPos(this.ref, currentPosition)
        //     })
        // }

        onChange(clearValue)
        this.lastCaretPosition = {...currentPosition}
    }

    static format(value, mask) {
        let i = 0;
        let lastReplacedIndex = -1;
        const filledMask = mask.replace(/_/g, (_, j) => {
            if (i >= value.length) {
                return '_';
            }

            lastReplacedIndex = j;
            return value[i++]
        });

        return filledMask.substring(0, lastReplacedIndex + 1);
    }

    static clearValue(value) {
        return value.replace(/[^\d]/g, '')
    }

    static getCaretPos(input) {
        if (input.selectionStart || input.selectionStart === '0') {
            return {'start': input.selectionStart, 'end': input.selectionEnd}
        } else {
            return {'start': 0, 'end': 0}
        }
    }

    static setCaretPos(input, {start, end}) {
        input.focus()
        input.setSelectionRange(start, end)
    }

    render({mask, value, placeholder}) {
        return (
            <input
                ref={ref => (this.ref = ref)}
                type='text'
                value={PhoneInput.format(value, mask)}
                placeholder={placeholder}
                onInput={this.onChange}
            />
        )
    }
}

export default PhoneInput
