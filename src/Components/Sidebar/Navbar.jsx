import React from 'react'
import { Card, Divider, Link, CardBody} from '@nextui-org/react'
import { TfiHome } from "react-icons/tfi";
const Navbar = () => {
  return (
    <div>
      <section className=''>
        <Card>
          <CardBody>
            <TfiHome/>
            <Link to="">jdfnjn</Link>
          </CardBody>
          <CardBody>jdfnjn</CardBody>
          <Divider></Divider>
          <CardBody>jdfnjn</CardBody>
        </Card>
      </section>
    </div>
  );
}

export default Navbar
