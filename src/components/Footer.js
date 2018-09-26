import React, { Component } from 'react'

function Footer({props}) {
    return (
        <div style={{textAlign:'center'}}>
        <small>&copy; EngineringJourney, {new Date().getFullYear()}.</small>
        </div>
    )
}


export default Footer
