import React from 'react'
import {Router, Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

export default function Navigation({history, }) {
    return (
        <div style={{
            backgroundColor:'rgb(242, 242, 242)',
            boxShadow: 'lightgrey 0px 4px 5px',
            position: 'fixed',
            zIndex: '4',
            display: 'flex',
            width: '100%',
            padding: '0.4rem',
            justifyContent: 'center'

        }}>
            <Router history={history}>
                <Link to="/home">
                    <Button variant='contained' color='primary' style={{margin:'1rem'}}>Home</Button>
                </Link>
                <Link to="/about">
                    <Button variant='contained' color='primary' style={{margin:'1rem'}}>About</Button>
                </Link>
                <Link to="/Contact">
                    <Button variant='contained' color='primary' style={{margin:'1rem'}}>Contact</Button>
                </Link>
            </Router>

        </div>
    )
}
// style={{backgroundcolor: 'rgb(242, 242, 242)', boxshadow: 'lightgrey 0px 4px' }}