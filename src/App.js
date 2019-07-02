import React, {Component} from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import router from '../src/router'


class App extends Component {
    render() {
        return(
            <div>
                <Navbar />
                {router}
            </div>
        )
    }
}

export default App;