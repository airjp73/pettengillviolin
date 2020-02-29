import cn from 'classnames';
import { useState } from 'react';

enum AlertType {
  SUCCESS = 'alert-success',
  ERROR = 'alert-danger',
}

interface AlertProps {
  type: AlertType;
}

const Alert: React.FC<AlertProps> = ({ children, type }) => (
  <div className={cn('alert', type)} role="alert">
    {children}
  </div>
);

type ValidElement = HTMLInputElement | HTMLTextAreaElement;
const useFormField = (name: string, required: boolean) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.FormEvent<ValidElement>) =>
    setValue((event.target as ValidElement).value);

  const props = {
    value,
    onChange,
    name,
    required,
  };

  return [value, props];
};

type Result = {
  type: AlertType;
  message: string;
};
const ContactForm: React.FC = () => {
  const [result, setResult] = useState<Result | null>(null);
  const [name, nameProps] = useFormField('name', true);
  const [parentName, parentNameProps] = useFormField('parentName', true);
  const [email, emailProps] = useFormField('email', true);
  const [phone, phoneProps] = useFormField('phone', false);
  const [message, messageProps] = useFormField('message', true);

  return (
    <>
      {result && <Alert type={result.type}>{result.message}</Alert>}

      <form
        onSubmit={async event => {
          event.preventDefault();
          setResult(null);
          const res = await fetch('/api/sendContactForm', {
            method: 'POST',
            body: JSON.stringify({
              name,
              parentName,
              email,
              phone,
              message,
            }),
          });
          console.log(res);
          const body = await res.json();
          setResult({
            type: res.ok ? AlertType.SUCCESS : AlertType.ERROR,
            message: body.message,
          });
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name(s)"
            {...nameProps}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="parent-name-field"
            placeholder="Parent Name(s)"
            {...parentNameProps}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email-field"
            placeholder="Email"
            {...emailProps}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            id="phone-field"
            placeholder="Phone Number (Optional)"
            {...phoneProps}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="message-field"
            rows={3}
            placeholder="Message"
            {...messageProps}
          />
        </div>
        <div style={{ display: 'none' }}>
          <input type="test" name="username" />
        </div>
        <input type="submit" className="btn btn-success" id="submit-btn" />
      </form>
    </>
  );
};

export default ContactForm;
