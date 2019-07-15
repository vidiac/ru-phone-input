const mask = '+_ ___-___-__-__'

export default {
    format(value) {
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
    },

    clearValue(value) {
        let clearValue = value.replace(/[^\d]/g, '').substring(0, 11)

        if (clearValue === '8' || clearValue === '7') {
            return '7 '
        }

        if (clearValue.length === 1 && clearValue !== '8' && clearValue !== '7') {
            return '7' + clearValue
        }

        const firstChar = clearValue.substring(0, 1)

        if (clearValue.length > 1 && firstChar !== '7') {
            return firstChar === '8'
                ? ('7' + clearValue.substring(1, 11))
                : ('7' + clearValue)
        }

        return clearValue
    },

    getCaretPos(input) {
        if (input.selectionStart || input.selectionStart === '0') {
            return {'start': input.selectionStart, 'end': input.selectionEnd}
        } else {
            return {'start': 0, 'end': 0}
        }
    },

    setCaretPos(input, {start, end}) {
        input.focus()
        input.setSelectionRange(start, end)
    },
}
