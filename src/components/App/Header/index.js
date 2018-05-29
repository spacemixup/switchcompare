import React, { Component } from 'react';
import { Menu, Button, Icon, Input, Segment, Image, Checkbox } from 'semantic-ui-react';
import imgUrl from '../../../../public/images/switch_controller_slice.jpg';
import SwitchLogo from '../../../../public/images/switch_logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === 'all games') {
      this.props.history.push('/all');
    }
    if (name === 'home') {
      this.props.history.push('/');
    }
    if (name === 'on sale') {
      this.props.history.push('/sale');
    }
    this.setState({ activeItem: name });
  }

  render() {
    const {
      showOnSale,
      showGameSales,
      showAllGames,
      searchGames,
      toggleSidebar,
      displayOptions,
      history,
    } = this.props;

    const { activeItem } = this.state;

    return (
      <div className="HeaderMenu">
        <Menu size="massive" pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name="all games" active={activeItem === 'all games'} onClick={this.handleItemClick} />
          <Menu.Item name="on sale" active={activeItem === 'on sale'} onClick={this.handleItemClick} />
          <Menu.Item name="recent releases" active={activeItem === 'recent releases'} onClick={this.handleItemClick} />
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div />
      </div>
    );
  }
}

export default Header;
