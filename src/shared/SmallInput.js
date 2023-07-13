import React from 'react';
import { Row,Col } from 'react-bootstrap';

export const SmallInput = (props) =>{
    return(
        <React.Fragment>
            <Row className='mx-1'>
                <Col m={6} sm={12} lg={4} ml-0 className='p-1'>
                    <label htmlFor={props.namr} className='form-label col-sm-10 col-md-12 col-lg-12  p-0 text-lg-end text-md-start text-sm-start'>{props.lable}<span style={{color:'red',fontSize:'20px'}}>{props.span}</span></label>
                </Col>
                <Col m={6} sm={12} lg={6} ml-0 className='p-1'>
                    <input className='form-Control ml-0   col-lg-12 col-md-12 col-sm-12'
                    style={{width:'100%',padding:'9px',borderRadius:'5px',border:'1px solid lightgray'}}
                    onClick={props.onClick}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    value={props.value}
                    name={props.name}
                    placeholder={props.placeholder}
                    type={props.type || 'text'}
                    autoComplete={props.type === 'password' ? 'new-password' :'off'}
                    disabled={props.disabled || false }
                    />
                    {props.isTouched && props.error && <div className='pt-1 form-error' style={{color:'red'}}>{props.error}</div>}
                </Col>
            </Row>
        </React.Fragment>
    )
}