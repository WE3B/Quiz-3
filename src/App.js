import './App.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react'

const users = [
  {
      id:1,
      name:'Zohaib',
      age:21,
      city:'Lahore'
  },
  {
      id:2,
      name:'Ali',
      age:22,
      city:'Lahore'
  },
  {
      id:3,
      name:'Sarbaz',
      age:23,
      city:'Kasur'
  },
  {
      id:4,
      name:'Zaeem',
      age:22,
      city:'Lahore'
  },
  {
      id:5,
      name:'Fahad',
      age:26,
      city:'Gojra'
  },
  {
      id:6,
      name:'Awais',
      age:21,
      city:'Islamabad'
  },
  {
      id:7,
      name:'Usama',
      age:23,
      city:'Gojra'
  },
  {
      id:8,
      name:'Noaman',
      age:24,
      city:'Lahore'
  },
  {
      id:9,
      name:'Omer',
      age:15,
      city:'Gojra'
  },
  {
      id:10,
      name:'Salman',
      age:13,
      city:'Gojra'
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState(1) //for pagination
  const [data, setData] = useState(users)
  const postPerPage = 3
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentItems = data.slice(indexOfFirstPost, indexOfLastPost)
  const paginationLength = Math.ceil(data.length / postPerPage)


  const sortName = (event) => {
    const value = event.target.value
    if (value === 'nameASC') {
      users.sort((a, b) => {
        let fa = a.name.toLowerCase()
        let fb = b.name.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      setData(users)
    } else {
      users.sort((a, b) => {
        let fa = a.name.toLowerCase()
        let fb = b.name.toLowerCase()
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      })
      const reverse = users.reverse()
      console.log("sorted data is", reverse)
      setData(reverse)
    }
  }

  

  const handleChange = (event, value) => {
    setCurrentPage(value)
  };
  return (
    <div>
      <div>
        <button value="nameASC" onClick={sortName}>Sort by name</button>
      </div>


      <table width='100%'>
      <tr>
          <th style={{ border: "1px solid #dddddd"}} >Name</th>
          <th style={{ border: "1px solid #dddddd"}}>Age</th>
          <th style={{ border: "1px solid #dddddd" }}>City</th>
        </tr>
        {
          currentItems.map((value, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid #dddddd"}}>
                  {value.name}
                </td>
                <td style={{ border: "1px solid #dddddd" }}>
                  {value.age}
                </td>
                <td style={{ border: "1px solid #dddddd"}}>
                  {value.city}
                </td>
              </tr>
            )
          })
        }
      </table>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <Stack spacing={2}>
          <Pagination count={paginationLength} siblingCount={0} onChange={handleChange} variant="outlined" color="success" />
        </Stack>
      </div>
    </div >
  );
}
export default App;
