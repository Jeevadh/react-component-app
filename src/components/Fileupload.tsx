import React, { useState } from 'react';
import '../style/components/fileUpload.css';
import Button from './Button';
import '../style/components/button.css';
import TextField from '../components/Input';
import { Form, Formik } from 'formik';

export interface FileUpload {
    clickHandler: (e: any) => void;
}

const FileUpload: React.FC<FileUpload> = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    async function handleSubmit() {
        try {
            console.log('test', errorMessage);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="file-upload-blk">
            <div className='waiting-time-blk'>
                <div className='waiting-time-content'>
                    <h3>Choose a historic data file to upload from your desktop:</h3>
                </div>
                <div className='footer-btn'>
                    <label htmlFor='fileUpload'>
                        Choose File
                        <input id='fileUpload' type='file' />
                    </label>
                </div>
                <Formik initialValues={{
                    fileName: '',
                }}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form onFocus={() => {
                            if (errorMessage) {
                                setErrorMessage('');
                            }
                        }}>
                            <TextField
                                type="text"
                                label="You have selected:"
                                id="username"
                                name="username"
                                placeholder="Please select a CSV file "
                                readOnly
                            />
                        </Form>
                    )}
                </Formik>
                {/* <form >
                    <input type="file" />
                    <button type="submit">Upload</button>
                </form> */}
            </div>
            <div className='footer-btn'>
                <Button text='Start' onClick={props.clickHandler} addClass='success-btn' disabled={false}></Button>
            </div>
        </div>
    );
};

export default FileUpload;