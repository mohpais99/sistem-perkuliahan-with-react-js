import React from 'react'

function Header(props) {
    return (
        <div className="header py-5 px-5">
            <h4 className="font-weight-700 ">
                <span className="mr-2">{props.title}</span>
                {
                    props.component && (
                        props.component
                    )
                }
            </h4>
        </div>
    )
}

export default Header
