import { tx } from '@transifex/native';
import { T, LanguagePicker, useLocale } from '@transifex/react';

import './App.css';

tx.init({
  token: process.env.REACT_APP_TRANSIFEX_TOKEN,
});

function App() {
  const currentLocale = useLocale();

  const handleSubmit = event => {
    event.preventDefault();
    alert('Your form is submitted!');
  };

  return (
    <div className="app">
      <div className="form">
        <h1>
          <T _str="Login form" />
        </h1>
        <p className="subtitle">
          <T _str="Please enter your credentials to proceed." />
          <p>Currently selected locale is {currentLocale}.</p>
        </p>
        <div className="picker">
          <p className="picker-title">
            <T _str="Select the language: " />
          </p>{' '}
          <LanguagePicker />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              <T _str="Email" />
            </label>
            <input type="text" name="email" required />
          </div>
          <div className="input-container">
            <label>
              <T _str="Password" />
            </label>
            <input type="password" name="password" required />
          </div>
          <button className="button-container" type="submit">
            <p className="button-text">
              <T _str="Sign in" />
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
