import React, {Component} from 'react'
import Navbar from '../src/Navbar/Navbar'
import Hero from '../src/Hero/Hero'
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