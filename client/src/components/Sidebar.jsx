import React, { useState } from 'react';
import { Tab, Nav, Button } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';

const CONVERSATIONS_KEY = 'conversas';
const CONTACTS_KEY = 'contactos';

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contactos</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>

        <div className="p-2 border-top border-right small">
          Your ID: <span className="text-muted">{id}</span>
        </div>

        {/* <Button></Button> */}
      </Tab.Container>
    </div>
  );
}