import {useState} from 'react';
import {useParams} from 'react-router-dom';
import './addForm.css';

const AddForm = ()=>{
  console.log('text');
    return(
 <div className="add">
   <form>
   <table>
        <thead></thead>
        <tbody>
          <tr>
          <td>Pick a date :</td>
          <td><input type="date" name="date"></input></td>
          </tr>
          <tr>
          <td>Add an event or memories :</td>
          <td><input type="text" name="event"></input></td>
          </tr>
          <input type="submit" name ="submit" value="Add"></input>
        </tbody>
      </table>
   </form>
 </div> 
    );
}
export default AddForm;