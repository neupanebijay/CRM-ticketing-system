import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './BreadcrumbFile.style.css'

export const BreadcrumbFile = ({page}) => {
    return (
        <Breadcrumb className="breadcrumb-top">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
           
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
