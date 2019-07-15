import helper from './heplers'

export default class PhoneInputNative {
    constructor(ref) {
        this.$onChange = null
        this.ref = ref
        this.lastCaretPosition = {start: null, end: null}

        ref.value = helper.format(helper.clearValue(ref.value))
        ref.addEventListener('input', this.onInput)
    }

    onChange(fn) {
        this.$onChange = fn
    }

    onInput = e => {
        const currentPosition = helper.getCaretPos(e.currentTarget)


        const value = this.ref.value
        this.ref.value = helper.format(helper.clearValue(e.target.value))
        this.$onChange(helper.clearValue(e.target.value))

        if (value[currentPosition.end + 1] && (currentPosition.end < this.lastCaretPosition.end || value.length > this.lastCaretPosition.end)) {
            if (value[currentPosition.end + 1] === '-') {
                currentPosition.start++
                currentPosition.end++
            }

            helper.setCaretPos(this.ref, currentPosition)
        }

        this.lastCaretPosition = {...currentPosition}
    }

    destroy() {
        this.ref.removeEventListener('input', this.onInput)
        this.$onChange = null
        this.ref = null
    }
}
