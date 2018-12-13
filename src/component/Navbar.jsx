import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

class Navbar extends Component {
state = { visible: false }

handleHideClick = () => this.setState({visible: false  })
handleShowClick = () => this.setState({ visible: true })
handleSidebarHide = () => this.setState({ visible : !this.state.visible })


render() {
const { visible } = this.state
return (
    <div>
    <Button.Group>

        <Button disabled={visible} onClick={this.handleShowClick} >
        Menu
        </Button>
    </Button.Group>

        <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={this.handleSidebarHide}
        vertical
        visible={visible}
        width='thin'
        >
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
        </Menu.Item>
        </Sidebar>



    </div>
)
}
}

export default Navbar;