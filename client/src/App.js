import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김소이',
    'birthday': '200710'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김소이2',
    'birthday': '200710'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김소이3',
    'birthday': '200710'
  }
]

function App() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
        </TableHead>
        <TableBody>
          {
            customers.map(c => {
              return (
                <Customer 
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                />
              )
            
            })
          }
        </TableBody>
      </Table>
    </div>
    
  );
}

export default App;
