import React from "react"
import PropTypes from 'prop-types'
import parse from "html-react-parser"
import ChatApp from "container/ChatApp/ChatApp"
import { Theme } from "core/components";
import { GlobalStyle } from "./style"
import { Provider } from "react-redux"
import { store } from "./store"
import { fonts } from 'constants/fonts'

const App = ({ font, theme, displaycloseicon, displayworkername, displaysubtitle, displayworkerimage, displaymessagetime }) => {
    return (
        <Provider store={store}>
            <GlobalStyle fontFamily={font} />
            {parse(fonts)}
            <Theme>
                <ChatApp
                    className="ChatApplication"
                    theme={theme}
                    displayCloseIcon={displaycloseicon}
                    displayWorkerName={displayworkername}
                    displaySubTitle={displaysubtitle}
                    displayWorkerImage={displayworkerimage}
                    displayMessageTime={displaymessagetime}
                />
            </Theme>
        </Provider>
    )
}

App.propTypes = {
    font: PropTypes.string,
    theme: PropTypes.string,
    displaycloseicon: PropTypes.string,
    displayworkername: PropTypes.string,
    displaysubtitle: PropTypes.string,
    displayworkerimage: PropTypes.string,
    displaymessagetime: PropTypes.string,
}

export default App