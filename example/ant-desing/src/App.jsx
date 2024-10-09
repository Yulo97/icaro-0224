
import { Button } from 'antd';
import { Typography } from "antd";
import { Divider } from "antd";
import { Alert } from "antd";
import { Layout, Header } from "antd";

function App() {


  return (
  <div className="App">
    <Button type="primary">Button</Button>
    <Typography.Text code={true}>asldpalsdlapd
      aspdlapsd
      aosdkoasd
      asodkas

    </Typography.Text>
    <Divider></Divider>
    <Alert message="Success Text" type="success" />
    <Layout  >
            <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </Layout>
  </div>
  )
}

export default App
