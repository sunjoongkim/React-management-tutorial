import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

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
    </div>
    
  );
}

export default App;
