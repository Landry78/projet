import React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <List>
      <ListItem button >
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <Link to="/validate" className="menu-link" style={{ color: 'white' }}>Valider un propriétaire</Link>
        </ListItem >
      <ListItem button>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <Link to="/listeP" className="menu-link" style={{ color: 'white' }}>Liste de propriétaires</Link>
      </ListItem>
    </List>
  );
};

export default AdminMenu;
