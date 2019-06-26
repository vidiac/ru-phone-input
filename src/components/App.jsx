import {h, Component} from "preact";
import PhoneInput from "./PhoneInput";

class App extends Component {
    state = {
        phoneNumber: '79243242273',
    }

    onChangePhoneNumber = phone => {
        this.setState({phoneNumber: phone})
    }

    render(props, {phoneNumber}) {
        return (
            <div>
                <PhoneInput
                    onChange={this.onChangePhoneNumber}
                    value={phoneNumber}
                    placeholder='+7 ___-___-__-__'
                />
                <div>{phoneNumber}</div>
            </div>
        )
    }
}

export default App
