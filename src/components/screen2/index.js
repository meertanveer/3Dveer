import React from 'react';
import LoginBtn from '../loginbtn';
import Switch from '../toggle-switch';
const optionList1 = [
  { label: 'Notifications', path: 'notify1.png' },
  { label: 'Enable Biometric', path: 'biometric.png' },
  { label: 'Change Password', path: 'password.png' },
  { label: 'Language', path: 'lang.png' },
  { label: 'FAQs', path: 'faq.png' },
  { label: 'About', path: 'about.png' },
];

const optionList2 = [
  { label: 'Terms of services', path: 'terms.png' },
  { label: 'Privacy Policy', path: 'privacy.png' },
];

const Screen1 = () => {
  return (
    <div className='main-container'>
      <div className='logo-container'></div>
      <div className='option-container'>
        <p className='heading-1'>PREFERENCES</p>
        <br></br>
        {optionList1.map((o) => {
          return (
            <div className='option' key={o.path}>
              <div className='logo-title'>
                <img
                  className='logo-sm'
                  src={`./assets/logos/${o.path}`}
                  style={{ filter: 'invert(1)' }}
                  alt=''
                  width='24px'
                  height='24px'
                />
                <span>{o.label}</span>
              </div>
              {o.label === 'Notifications' ? (
                <Switch />
              ) : o.label === 'Enable Biometric' ? (
                <Switch />
              ) : (
                <img
                  className='logo-sm1'
                  src='./assets/logos/rarrow.png'
                  style={{ filter: 'invert(1)' }}
                  alt=''
                  width='24px'
                  height='24px'
                />
              )}
            </div>
          );
        })}
        <p className='heading-1'>LEGAL</p>
        {optionList2.map((o) => {
          return (
            <div className='option' key={o.path}>
              <div className='logo-title'>
                <img
                  className='logo-sm'
                  src={`./assets/logos/${o.path}`}
                  style={{ filter: 'invert(1)' }}
                  alt=''
                  width='24px'
                  height='24px'
                />
                <span>{o.label}</span>
              </div>
              <img
                className='logo-sm1'
                src='./assets/logos/rarrow.png'
                style={{ filter: 'invert(1)' }}
                alt=''
                width='24px'
                height='24px'
              />
            </div>
          );
        })}
      </div>
      <div className='logout'>
        <LoginBtn />
      </div>
      <div className='bottom-container'></div>
    </div>
  );
};
export default Screen1;
