import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Name</td> 
        <td>Job</td> 
        <td>company</td> 
        <td>location</td> 
        <td>Last Login</td> 
        <td>Favorite Color</td>
        <th></th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
        <th>1</th> 
      </tr>
      <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
        <th>2</th> 
      </tr>
   
     
      <tr>
        <th>11</th> 
        <td>Andy Tipple</td> 
        <td>Librarian</td> 
        <td>Hilpert Group</td> 
        <td>Poland</td> 
        <td>7/9/2020</td> 
        <td>Indigo</td>
        <th>11</th> 
      </tr>
      
      <tr>
        <th>20</th> 
        <td>Lorelei Blackstone</td> 
        <td>Data Coordinator</td> 
        <td>Witting, Kutch and Greenfelder</td> 
        <td>Kazakhstan</td> 
        <td>6/3/2020</td> 
        <td>Red</td>
        <th>20</th> 
      </tr>
    </tbody> 
   
  </table>
</div>
    </>
  )
}

export default App
