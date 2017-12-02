import React, { Component } from 'react'

function Footer({props}) {
    return (
        <div style={{textAlign:'center'}}>
        <small>Powered by Gatsby.js, {new Date().getFullYear()}.</small>
        </div>
    )
}


export default Footer