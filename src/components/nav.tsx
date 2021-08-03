import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  FileProtectOutlined,
  HomeOutlined,
  ProfileOutlined,
} from '@ant-design/icons'

const Nav = () => {
  const location = useLocation()
  console.log('location', location.pathname)
  return (
    <nav>
      <Menu selectedKeys={[location.pathname]} mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">
            <HomeOutlined /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/profile">
          <Link to="/profile">
            <ProfileOutlined /> Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="/protected">
          <Link to="/protected">
            <FileProtectOutlined /> Protected
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default Nav
