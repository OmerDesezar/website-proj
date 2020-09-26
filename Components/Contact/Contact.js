import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Button } from '@material-ui/core'

export default function Contact() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div>
            <Button variant='contained' color='primary' style={{ margin: '1rem' }} onClick={() => {
                Swal.fire({
                    title: 'Please supply information',
                    html:
                        '<input id="swal-input1" placeholder="Full Name" class="swal2-input">' +
                        '<input id="swal-input2" placeholder="Email Address" class="swal2-input">' +
                        '<input id="swal-input3" placeholder="Phone Number" class="swal2-input">',
                    focusConfirm: false,
                    preConfirm: () => {
                            setName(document.getElementById('swal-input1').value)
                           setEmail(document.getElementById('swal-input2').value)
                            setPassword(document.getElementById('swal-input3').value)
                        }
                })
            }}>Sign Up</Button>
        </div>
    )
}