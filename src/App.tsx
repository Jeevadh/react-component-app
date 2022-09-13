import { Formik } from 'formik';
import React from 'react';
import Button from './components/Button';
import TextInput from './components/Input';
import Toggle from './components/Toggle';


function App() {
  return (
    <div className="App container main-section">
      <div className='header'></div>
      <section className='parent-section'>
        {/* button */}
        <section className='button-section'>
          <h1>Button component</h1>
          <Button text="Button 1" addClass='btn-success mr-2'></Button>
          <Button text="Button 2" addClass='btn-success mr-2'></Button>
          <Button text="Button 3" addClass='btn-success'></Button>
        </section>
        {/* end */}

        {/* input */}
        <section className='input-section'>
          <h1>Input field component</h1>
          <Formik
            initialValues={{ name: 'jeeva' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <form className='fm-block' onSubmit={props.handleSubmit}>
                <TextInput
                  type="text"
                  label="Email"
                  id="username"
                  name="username"
                  placeholder="Enter your email"
                /><TextInput
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                /></form>)}</Formik>
        </section>
        {/* end */}

        {/* Toggle */}
        <section className='toggle-section'>
          <h1>Toggle Component</h1>
          <Toggle name='mailAuth' onChange={(event: any) => {
          }} />

        </section>
        {/* end */}
      </section>
    </div>
  );
}

export default App;
