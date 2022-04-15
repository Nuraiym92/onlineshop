import React from 'react'
import {Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
function Order() {
  const [form,setForm]=React.useState({
    name:"",
    email:"",
    address:'',
    phone:"",
    isCorrectInfo:''

  })
console.log(form)
  function handleChange(event){
    setForm(prevSetForm=>{
        const {name,value,type,checked}=event.target
        return{
            ...prevSetForm,
            [name]:type==="checkbox" ? "checked": value

        }
    })
 }

 
 function handleSubmit(event){
  event.preventDefault();

  if(form.isCorrectInfo){
      console.log("Thank you for submition")
  }
}

  return (
    <Form className="form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name and Surname</Form.Label>
      <Form.Control onChange={handleChange} value={form.name} name="name" type="text" placeholder="Enter name and surname" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={handleChange} value={form.email} name="email" type="email" placeholder="Enter email" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control onChange={handleChange} value={form.address} name="address" type="text" placeholder="address" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone number</Form.Label>
      <Form.Control onChange={handleChange} value={form.phone} name="phone" type="tel" placeholder="phone number" />
      </Form.Group>
  
   
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check htmlFor="isCorrectInfo" type="checkbox" label="Information provided is correct " />
    </Form.Group>
   <Link to="/payment">
   <Button className="order-btn"variant="primary" type="submit"> Submit</Button>
     </Link> 
  </Form>
  )
}

export default Order