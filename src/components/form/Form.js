import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import './Form.css';
import { TwitterShareButton } from 'react-share';


const initialValues = { who: '', what: '', where: '', when: '', link: '' }

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field}{...props}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

function InputForm() {

  const hashtag = ['sentwith5w']

  return (
    <div className="InputForm">
      <Formik                                                                                                      
        initialValues={initialValues}                                                                                           
        validationSchema={Yup.object({                                                                             
          who: Yup.string()                                                                                       
            .max(15, 'Must be 15 characters or less')                                                              
            .required('Required'),
          what: Yup.string()                                                                                       
            .max(15, 'Must be 15 characters or less')                                                              
            .required('Required'),
          when: Yup.string()                                                                                       
            .max(15, 'Must be 15 characters or less')                                                              
            .required('Required'),
          where: Yup.string()                                                                                       
            .max(15, 'Must be 15 characters or less')                                                              
            .required('Required'),
          link: Yup.string()                                                                                       
            .required('Required'),
        })}                                                                                                        
        onSubmit={(values, { setSubmitting, resetForm }) => {                                                      
          setTimeout(() => {                                                                                       
            alert(JSON.stringify(values, null, 2));                                                                
            resetForm();                                                                                           
            setSubmitting(false);                                                                                  
          }, 400)                                                                                                 
        }}                                                                                                         
        >                                                                                                          
                                                                                                                  
        {props => (                                                                                         
            <Form className="formy">                                                                                            
            <CustomTextInput name="who" type="text" placeholder="who" autoComplete="off"/>                    
            <CustomTextInput name="what" type="text" placeholder="what" autoComplete="off"/>     
            <CustomTextInput name="when" type="text" placeholder="where" autoComplete="off"/>     
            <CustomTextInput name="where" type="text" placeholder="when" autoComplete="off"/>     
            <CustomTextInput name="link" type="text" placeholder="link" autoComplete="off"/>     
              <div className="button-local">            
                  <TwitterShareButton
                  url={"\n" + JSON.parse(JSON.stringify(props.values.link))}
                  title={"Who: " + JSON.parse(JSON.stringify(props.values.who)) + 
                         "\nWhat: "+ JSON.parse(JSON.stringify(props.values.what)) + 
                         "\nWhen: "+ JSON.parse(JSON.stringify(props.values.when)) + 
                         "\nWhere: "+ JSON.parse(JSON.stringify(props.values.where))
                    }
                  hashtags={hashtag}
                >
                    <button className="form-button" type="submit">{props.isSubmitting ? '...' : 'TWEET'}</button> 
                </TwitterShareButton>
              </div>
              <h3>168,345 sent.</h3>
          </Form> 
        )}                                                                                                  
      </Formik>   
    </div>
  )
}

export default InputForm;

/*
                <button type="submit">{props.isSubmitting ? '...' : 'SEND'}</button>
*/
